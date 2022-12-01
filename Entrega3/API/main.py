from typing import List

import pandas as pd

from fastapi import FastAPI

from data_model import DataModel
from prediction_model import PredictionModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
   return { "message": "Hello world" }

@app.post("/predict")
def make_predictions(X: List[DataModel]):
    df = pd.DataFrame([x.dict() for x in X])
    df['departamento'] = df["departamento"].str.upper()
    df['municipio'] = df["municipio"].str.upper()
    print(df.head(10))
    predicion_model = PredictionModel()
    results = predicion_model.make_predictions(df)
    
    
    
    return results.tolist()


