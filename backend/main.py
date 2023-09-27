from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import time 
from models.question import Question_Input

from utils.queryClass import queryClass

assistant = queryClass()

app = FastAPI(
    title="Chat API",
    version="0.0.1",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/query_from_user/", tags=["assistant"])
async def procesar_query_from_user(item: Question_Input) ->JSONResponse:
    start_tme = time.time()
    query_from_user = item.question
    history = item.history

    finish_time = time.time() - start_tme
    print(f"Tiempo de ejecucion: {finish_time}")

    result = assistant.get_answer(query_from_user, history)


    return result

@app.get("/first/", tags=["assistant"])
async def first_request():
    return {"message":"Hello World"}