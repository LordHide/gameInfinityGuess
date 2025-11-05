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
    return {
        "data": {
            "name": "fusiliers", 
            "equipment": [], 
            "skills": [], 
            "stats":{"Mov": "4-4", "CC": 13, "BS": 12, "PH": 10, "WIP": 12, "ARM": 1, "BTS": 0, "VITA": 1, "S": 2},
            "loadouts": [
                { "skills":[], "equipment":[], "Range_Weapons": ["Combi Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipment":[], "Range_Weapons": ["Heavy Machine Gun"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipment":[], "Range_Weapons": ["Missile Launcher"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipment":[], "Range_Weapons": ["MULTI Sniper Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":["Hacker"], "equipment":["Hacking Device"], "Range_Weapons": ["Combi Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]}
                         ]
        }, 
        "success": 1}