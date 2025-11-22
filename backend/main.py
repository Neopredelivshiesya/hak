import os
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        os.getenv("FRONTEND_URL", "*")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных для запроса
class ComparisonRequest(BaseModel):
    cardType: List[str]
    banks: List[str]
    criteria: List[str]

# Эндпоинт для сохранения параметров
@app.post("/api/params")
async def compare_products(request: ComparisonRequest):
    """
    Принимает выбранные параметры и сохраняет результат выбора в массивы
    """
    print("=== Получены данные ===")
    print(f"Типы карт: {request.cardType}")
    print(f"Банки: {request.banks}")
    print(f"Критерии: {request.criteria}")

    # Преобразуем в массивы Python
    card_types = request.cardType
    banks = request.banks
    criteria = request.criteria

    # Здесь логика обработки данных
    # Например, можно сохранить в базу данных или обработать через AI

    # Пример ответа
    return {
        "status": "success",
        "message": "Данные успешно получены",
        "data": {
            "cardTypes": card_types,
            "banks": banks,
            "criteria": criteria,
            "comparisonResult": "Результат сравнения будет здесь"
        }
    }

@app.get("/")
async def read_root():
    return {"message": "Hello from FastAPI backend!"}
