from pydantic import BaseModel, Field
from typing import Optional, List, Dict


class Question_Input(BaseModel):
    question : str = Field(..., description="Question to be asked")
    user: str = Field(..., description="User to be used for the question to select pinecone index")
    key : str = Field(..., description="Key to be used for the question to select pinecone index")
    history: Optional[List[Dict[str, str]]] = Field([], description="History of questions and answers")
