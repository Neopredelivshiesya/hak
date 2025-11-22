import json
import os

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel


from src.normalize_url import normalize_habr_url
from src.parser import parse_article

app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Hello from FastAPI backend!"}


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", os.getenv("FRONTEND_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)