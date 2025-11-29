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
            "name": "Fusiliers", 
            "equipments": [], 
            "skills": [], 
            "stats":{
                "MOV": {
                    "value":"4-4", "status": ""
                }, 
                "CC": {
                    "value":"13", "status": ""
                }, 
                "BS": {
                    "value":"12", "status": ""
                }, 
                "PH": {
                    "value":"10", "status": ""
                }, 
                "WIP": {
                    "value":"12", "status": ""
                }, 
                "ARM": {
                    "value":"1", "status": ""
                }, 
                "BTS": {
                    "value":"0", "status": ""
                }, 
                "VITA": {
                    "value":"1", "status": ""
                }, 
                "S": {
                    "value":"2", "status": ""
                }
            },
            "loadouts": [
                { "skills":[], "equipments":[], "Range_Weapons": ["Combi Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipments":[], "Range_Weapons": ["Heavy Machine Gun"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipments":[], "Range_Weapons": ["Missile Launcher"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":[], "equipments":[], "Range_Weapons": ["MULTI Sniper Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]},
                { "skills":["Hacker"], "equipments":["Hacking Device"], "Range_Weapons": ["Combi Rifle"], "Melee_Weapons": ["Pistol", "CC Weapon" ]}
                         ]
        }, 
        "success": 1}

@app.post("/api/getStatsStoreData/{storeType}")
def get_profile_data(storeType: str):
    match storeType:
        case "stats":
            return {
                "data":[
                    { "label": "MOV", "value": "MOV", "extraValueType": "Double number",
                        "textOptions": [
                            { "label": "Default", "value": "0-0" },
                        ] },
                    { "label": "CC", "value": "CC", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "10" },
                        ] },
                    { "label": "BS", "value": "BS", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "10" },
                        ] },
                    { "label": "PH", "value": "PH", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "10" },
                        ] },
                    { "label": "WIP", "value": "WIP", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "10" },
                        ] },
                    { "label": "ARM", "value": "ARM", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "0" },
                        ] },
                    { "label": "BTS", "value": "BTS", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "0" },
                        ] },
                    { "label": "VITA", "value": "VITA", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "1" },
                        ] },
                    { "label": "STR", "value": "STR", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "1" },
                        ] },
                    { "label": "S", "value": "S", "extraValueType": "Single number",
                        "textOptions": [
                            { "label": "Default", "value": "2" },
                        ] },
                ], 
            "success": 1}
        case "skills":
            return {
                "data":[
                    {
                        "label": "Hacker", "value": "Hacker", "extraValueType": "Text Options",
                        "textOptions": [
                            { "label": "Basic", "value": "Basic" },
                            { "label": "Advanced", "value": "Advanced" },
                        ]
                    },
                    { "label": "Forward Observer", "value": "Forward Observer", "extraValueType": "None" },
                    { "label": "Paramedic", "value": "Paramedic", "extraValueType": "None" },
                    { "label": "Lieutenant", "value": "Lieutenant", "extraValueType": "Text Options" },
                    { "label": "Specialist Operative", "value": "Specialist Operative", "extraValueType": "None" },
                    { "label": "Sapper", "value": "Sapper", "extraValueType": "None" },
                    { "label": "Triangulated Fire", "value": "Triangulated Fire", "extraValueType": "None" },
                    { "label": "Minelayer", "value": "Minelayer", "extraValueType": "None" },
                    { "label": "Sensor", "value": "Sensor", "extraValueType": "None" },
                ], 
            "success": 1}
        case "equipments":
            return {
                "data":[
                    { "label": "Hacking Device", "value": "Hacking Device", "extraValueType": "Text Options" },
                    { "label": "FastPanda", "value": "FastPanda", "extraValueType": "None" },
                    { "label": "MediKit", "value": "MediKit", "extraValueType": "Text Options" },
                    { "label": "Biometric Visor", "value": "Biometric Visor", "extraValueType": "None" },
                    { "label": "X Visor", "value": "X Visor", "extraValueType": "None" },
                    { "label": "Multispectral Visor L2", "value": "Multispectral Visor L2", "extraValueType": "None" },
                    { "label": "Deactivator", "value": "Deactivator", "extraValueType": "None" },
                    { "label": "GizmoKit", "value": "GizmoKit", "extraValueType": "None" },
                    { "label": "Deployable Cover", "value": "Deployable Cover", "extraValueType": "None" },
                ], 
            "success": 1}
        case "weapons":
            return {
                "data":[
                    { "label": "Combi Rifle", "value": "Combi Rifle", "extravalueType": "Text Options" },
                    { "label": "Heavy Machine Gun", "value": "Heavy Machine Gun", "extravalueType": "Text Options" },
                    { "label": "Missile Launcher", "value": "Missile Launcher", "extravalueType": "Text Options" },
                    { "label": "MULTI Sniper Rifle", "value": "MULTI Sniper Rifle", "extravalueType": "Text Options" },
                    { "label": "Flash Pulse", "value": "Flash Pulse", "extravalueType": "Text Options" },
                    { "label": "Pistol", "value": "Pistol", "extravalueType": "Text Options" },
                    { "label": "CC Weapon", "value": "CC Weapon", "extravalueType": "Text Options" },
                    { "label": "D-Charges", "value": "D-Charges", "extravalueType": "Text Options" },
                    { "label": "AP Mine", "value": "AP Mine", "extravalueType": "Text Options" },
                ], 
            "success": 1}
        case "others":
            return {
                "data":[],
                "success": 1
            }
        
@app.post("/api/getNamesList")
def get_profile_data():
    return {
        "data": [
            "Antipode Assault Pack Handler",
            "",
            ""
            "",
            "",
            "",
            ],
        "data":[
                    { "label": "'Gator' Squadron", "value": "'Gator' Squadron", "extravalueType": "Text Options" },
                    { "label": "Fusiliers", "value": "Fusiliers", "extravalueType": "Text Options" },
                    { "label": "Eudoros", "value": "Eudoros", "extravalueType": "Text Options" },
                    { "label": "Daylami", "value": "Daylami", "extravalueType": "Text Options" },
                    { "label": "Blue Wolf Mongol Cavalry", "value": "Blue Wolf Mongol Cavalry", "extravalueType": "Text Options" },
                    { "label": "Acontecimento Regulars", "value": "Acontecimento Regulars", "extravalueType": "Text Options" },
                    { "label": "Antipode Assault Pack Handler", "value": "Antipode Assault Pack Handler", "extravalueType": "Text Options" },
                    { "label": "Nexus Operatives", "value": "Nexus Operatives", "extravalueType": "Text Options" },
                    { "label": "StormBots", "value": "StormBots", "extravalueType": "Text Options" },
                ],
        "success": 1}