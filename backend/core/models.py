from sqlalchemy import Integer, Column, String, Float, DateTime, JSON, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from db.database import Base

class Admin(Base):
    __tablename__= "admins"
    id = Column(String, primary_key=True, index=True, unique=True, nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True, index=True)
    hashed_password = Column(String, nullable=False)

    videos = relationship("Video", back_populates="admin")


class Video(Base):
    __tablename__ = "videos"
    id = Column(String, nullable=False, unique=True, primary_key=True, index=True)
    filename = Column(String, nullable=False)
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())

    admin_id = Column(String, ForeignKey("admins.id"))
    admin = relationship("Admin", back_populates="videos")
    notifs = relationship("Notification", back_populates="video")

class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, nullable=False, primary_key=True, index=True, unique=True)
    location = Column(String, nullable=False)
    confidence = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    cordinates_lat = Column(String, nullable=True)
    cordinates_long = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
    is_alert = Column(Boolean, default=False)
    is_new = Column(Boolean, default=True)

    video_id = Column(String, ForeignKey("videos.id"))
    video = relationship("Video", back_populates="notifs")