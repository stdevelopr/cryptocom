from sanic_restful_api import reqparse, abort, Api, Resource
from models import ProductModel, ProductSchema
from sanic import Sanic, response
from sanic.response import json, text, file
from sqlalchemy import select, delete, update
from io import BytesIO
from minio import Minio
import json

client = Minio(
    "minio:9000",
    access_key="minio",
    secret_key="minioadmin",
    secure=False
)

class Product(Resource):
    async def get(self, request, product_id):
        session = request.ctx.session
        async with session.begin():
            stmt = select(ProductModel).where(ProductModel.id == int(product_id))
            result = await session.execute(stmt)
            product = result.scalar()
        return product.to_dict()

    async def delete(self, request, product_id):
        session = request.ctx.session
        async with session.begin():
            stmt = delete(ProductModel).where(ProductModel.id == int(product_id))
            result = await session.execute(stmt)

    async def put(self, request, product_id):
        session = request.ctx.session
        async with session.begin():
            data = json.loads(request.body)
            res = update(ProductModel).where(ProductModel.id == int(product_id)).values(data)
            result = await session.execute(res)
            schema = ProductSchema()
            
            return response.json(data, status=200)

class ProductsList(Resource):
    async def get(self, request): 
        session = request.ctx.session
        query = f"SELECT * from products"
        async with session.begin():
            rs = await session.execute(query)
            schema = ProductSchema(many=True)
            result = schema.dump(rs)
            size= len(result)
            return response.json(
            result,
            headers={'Content-Range': f'products 0-{size}/{size}'},
            status=200)

    async def post(self, request):
        session = request.ctx.session
        img_file = request.files['file'][0]
        data = json.loads(request.form['data'][0])['data']

        output = BytesIO()
        output.write(img_file.body)
        output.seek(0)
        client.put_object('my-bucket', img_file.name, output, length=len(img_file.body))
        title = data['title']
        description = data['description']
        price = data['price']
        img = f'/my-bucket/{img_file.name}'
        async with session.begin():
            product = ProductModel(title= title, description=description, price=price, img=img)
            session.add(product)
            session.flush()
        schema = ProductSchema()

        return response.json(schema.dump(product))
