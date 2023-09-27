# Virtual Sales Assistant

This is a fullstack project built with Fast API for the backend, Langchain, Pinecone, and React.js for the frontend.

## Description

This project demonstrates a fullstack application utilizing Fast API as the backend framework. It incorporates Langchain and Pinecone for efficient data retrieval and indexing. The frontend is developed with React.js to provide an interactive user interface.

## Setup

### Backend

1. Make sure you have Python installed on your system.

2. Set up a virtual environment (optional but recommended):

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
3. Install the required Python packages:
    
    ```bash
    pip install -r requirements.txt
4. Export Google Cloud credentials as an environment variable, copy the full path and then export it :

    ```bash
    export GOOGLE_APPLICATION_CREDENTIALS="key.json"
5. Run the backend:

    ```bash
    uvicorn main:app --reload --port 80 --host 0.0.0.0
### Frontend

1. Navigate to the frontend directory.
2. Install the required dependencies:
    ```bash
    npm install
3. Start the frontend server:
    ```bash
    npm run dev
Usage
-----
First run the backend then open your web browser and go to `http://localhost:81` to access the frontend of the application. The frontend will interact with the Fast API backend to provide a seamless user experience.

Additional Notes
-----------------
- Ensure that the required Python packages and Node.js dependencies are installed before running the application.


Author
------
Gabriel Angel Villanueva Vega

