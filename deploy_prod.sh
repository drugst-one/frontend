cp docker/Dockerfile.production ./Dockerfile
docker build -t ghcr.io/drugst-one/frontend:production . && docker push ghcr.io/drugst-one/frontend:production