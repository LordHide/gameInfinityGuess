from typing import Union

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"Hello": "World", "success": 1}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/api/getProfileData")
def get_profile_data():
    return {"data": {"name": "Corregidor Alguaciles", "stats":{"Mov": "4-4", "CC": 14, "BS": 11, "PH": 10, "WIP": 13, "ARM": 1, "BTS": 0, "S": 2}}, "success": 1}