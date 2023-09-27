# Use the appropriate Python version and tag
FROM python:3.10-bullseye

# Python environment setup
ENV PYTHONUNBUFFERED True

# Install system dependencies
RUN apt-get update && apt-get install -y python3-dev build-essential libsqlite3-dev

# Create and change to the app directory
WORKDIR /app

# Copy requirements file and application code
COPY ./requirements.txt ./requirements.txt
COPY . /app

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r /app/requirements.txt

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]