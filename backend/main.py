from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

# CORS setup so frontend can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models to receive data
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# Default check
@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# Main POST handler
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    G = nx.DiGraph()

    for node in pipeline.nodes:
        G.add_node(node.id)

    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)

    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag
    }
