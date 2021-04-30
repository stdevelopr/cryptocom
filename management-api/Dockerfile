FROM python:3.9-slim-buster

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY src/* ./

ENV SANIC_NO_UVLOOP=true
ENV SANIC_NO_UJSON=true

EXPOSE 8000

CMD [ "python", "app.py" ]

