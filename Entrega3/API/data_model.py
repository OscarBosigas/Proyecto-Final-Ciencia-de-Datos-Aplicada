from pydantic import BaseModel

class DataModel(BaseModel):
    departamento: str
    municipio: str
    grupo_cultivo: str
    year: int
    period: str
    area:  int
    estado_produccion: str
    ciclo_cultivo: str
    

    
