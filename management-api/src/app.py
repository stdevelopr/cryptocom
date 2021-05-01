from sanic import Sanic
from sanic.response import json, text
from minio import Minio
from io import BytesIO

app = Sanic("sanic-api")

client = Minio(
    "minio:9000",
    access_key="minio",
    secret_key="minioadmin",
    secure=False
)

@app.post('/test')
async def handler(request):
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file'][0]
    output = BytesIO()
    output.write(file.body)
    output.seek(0)
    client.put_object('my-bucket', file.name, output, length=len(file.body))

    if file.name == '':
            flash('No selected file')
            return redirect(request.url)
    return json({"id": '1'})

@app.route('/')
async def main(request):
    print(client)
    client.make_bucket("my-bucket")
    return json({'sanic': 'api'})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)