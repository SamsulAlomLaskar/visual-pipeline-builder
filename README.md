# Visual Pipeline Builder

A web-based visual pipeline editor that allows users to create dynamic, node-based workflows with real-time validation and backend integration.

## ⚙️ Features

- Drag-and-drop pipeline builder using React Flow
- Abstracted and reusable node components
- Dynamic input/output connection handling
- Smart Text node with variable parsing and live preview
- Integrated backend validation to check if the pipeline is a DAG
- Clean, consistent UI with centralized styling
- Support for custom node types like Input, Output, Text, LLM, Math, JSON, Delay, Logger, and If/Else

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- Zustand (State Management)
- React Flow
- SCSS / CSS modules

**Backend**
- Python
- FastAPI

## 🚀 Getting Started

### Clone & Install

git clone https://github.com/SamsulAlomLaskar/visual-pipeline-builder.git
cd visual-pipeline-builder

## Frontend
cd frontend
npm install
npm run dev

## Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

## 📌 How It Works
Users build a flow by dragging different nodes into the canvas.

Connections (edges) are established between compatible input/output handles.

On clicking submit, the frontend sends node/edge data to the backend.

The backend responds with the number of nodes, number of edges, and whether the pipeline is a valid DAG.