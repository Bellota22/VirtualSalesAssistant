import os

from google.cloud import secretmanager

def get_secret(secret_id):
    project_id = "sturdy-filament-399620"
    client = secretmanager.SecretManagerServiceClient()
    response = client.access_secret_version(
        name=f"projects/{project_id}/secrets/{secret_id}/versions/1"
    )
    return response.payload.data.decode("UTF-8")
