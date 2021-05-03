from sanic import Sanic, response
from sanic.response import json, text, file
from sanic_restful_api import reqparse, abort, Api, Resource
from minio import Minio
from io import BytesIO
from databases import Database
from marshmallow import Schema, fields


app = Sanic("sanic-api")
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('title', 'description')

client = Minio(
    "minio:9000",
    access_key="minio",
    secret_key="minioadmin",
    secure=False
)

database = Database('postgresql://postgres:ccom@postgres-db:5432/ccom')
app.db = database
products = [
    {'id': '1', 'title': 'product1', 'description': 'joia1', 'price': 'R$5', 'img': 'http://localhost:9000/my-bucket/portfolio_2020_min.png'},
    {'id': '2', 'title': 'product2', 'description': 'joia2', 'price': 'R$100', 'img': 'http://localhost:9000/my-bucket/portfolio_2020_min.png'}
]

class ProductSchema(Schema):
    id = fields.Str()
    title = fields.Str()
    description = fields.Str()



@app.listener('after_server_start')    
async def connect_to_db(*args, **kwargs):        
    await app.db.connect()

class Product(Resource):
    async def get(self, request, product_id):
        return products[0]

    async def delete(self, request, todo_id):
        pass

    async def put(self, request, todo_id):
        pass

class ProductsList(Resource):
    async def get(self, request): 
        query = f"SELECT * from products"
        products = await app.db.fetch_all(query=query)
        schema = ProductSchema(many=True)
        result = schema.dump(products)
        return response.json(
        result,
        headers={'Content-Range': 'products 0-24/319'},
        status=200)

    async def post(self, request):
        req_json = request.json
        args = parser.parse_args(request)
        title = request.json['title']
        description = request.json['description']
        query = f"INSERT INTO products(title, description) VALUES ('{title}', '{description}')"
        await app.db.execute(query=query)
        return response.json({"msg":"success"})


api.add_resource(ProductsList, '/products')
api.add_resource(Product, '/products/<product_id>')


if __name__ == '__main__':
    # setup_database()
    app.run(host="0.0.0.0", port=8000, debug=True)