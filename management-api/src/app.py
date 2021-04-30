from sanic import Sanic
from sanic.response import json, text

app = Sanic("sanic-api")

@app.post('/test')
async def handler(request):
    print("request", request.files)
    return text('OK')

@app.route('/')
async def main(request):
    return json({'sanic': 'api'})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)