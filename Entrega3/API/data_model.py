from pydantic import BaseModel

class DataModel(BaseModel):
    departamento: str
    municipio: str
    grupo_cultivo: str
    year: int
    period: str
    area:  float
    estado_produccion: str
    ciclo_cultivo: str
    

    
