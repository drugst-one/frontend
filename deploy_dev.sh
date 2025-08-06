cp docker/Dockerfile.development ./Dockerfile
docker build -t ghcr.io/drugst-one/frontend:development . && docker push ghcr.io/drugst-one/frontend:development
cp docker/Dockerfile.production ./Dockerfile