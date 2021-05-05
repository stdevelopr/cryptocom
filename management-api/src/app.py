from sanic import Sanic
from sanic_restful_api import reqparse, abort, Api, Resource
from minio import Minio
from io import BytesIO
import json as pjson
from sqlalchemy.ext.asyncio import create_async_engine
from resources.products import Product, ProductsList

from contextvars import ContextVar 

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker

_base_model_session_ctx = ContextVar("session")

app = Sanic("sanic-api")
api = Api(app)

client = Minio(
    "minio:9000",
    access_key="minio",
    secret_key="minioadmin",
    secure=False
)

bind = create_async_engine("postgresql+asyncpg://postgres:ccom@postgres-db:5432/ccom", echo=True)


@app.middleware("request")
async def inject_session(request):
    request.ctx.session = sessionmaker(bind, AsyncSession, expire_on_commit=False)()
    request.ctx.session_ctx_token = _base_model_session_ctx.set(request.ctx.session)


@app.middleware("response")
async def close_session(request, response):
    if hasattr(request.ctx, "session_ctx_token"):
        _base_model_session_ctx.reset(request.ctx.session_ctx_token)
        await request.ctx.session.close()

api.add_resource(ProductsList, '/products')
api.add_resource(Product, '/products/<product_id>')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)