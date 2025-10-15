from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.config import settings 

from db.database import create_tables

create_tables()

