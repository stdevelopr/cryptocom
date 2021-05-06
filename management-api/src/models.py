from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import INTEGER, Column, ForeignKey, String, Float
from marshmallow import Schema, fields
Base = declarative_base()


class BaseModel(Base):
    __abstract__ = True
    id = Column(INTEGER(), primary_key=True)


class ProductModel(BaseModel):
    __tablename__ = "products"
    title = Column(String())
    description = Column(String())
    price = Column(Float())
    img = Column(String())

    def to_dict(self):
        return {"id": self.id, "title": self.title, "description": self.description, "price": self.price, "img": self.img}

class ProductSchema(Schema):
    id = fields.Str()
    title = fields.Str()
    description = fields.Str()
    price = fields.Number()
    img = fields.Str()
