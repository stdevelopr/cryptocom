from sanic_restful_api import reqparse, abort, Api, Resource
from models import PageInfoModel, PageInfoSchema
from sanic import Sanic, response
from sanic.response import json, text, file
from sqlalchemy import select, delete, update
import json


class PageInfo(Resource):
    async def get(self, request, tenant_id):
        session = request.ctx.session
        async with session.begin():
            stmt = select(PageInfoModel).where(PageInfoModel.tenant_id == int(tenant_id))
            result = await session.execute(stmt)
            page_info = result.scalar()
        return page_info.to_dict()

    async def put(self, request, tenant_id):
        session = request.ctx.session
        async with session.begin():
            data = json.loads(request.body)
            res = update(PageInfoModel).where(PageInfoModel.tenant_id == int(tenant_id)).values(data)
            result = await session.execute(res)
            
            return response.json(data, status=200)