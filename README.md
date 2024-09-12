NodeJS Typescript Template Backend App

# Install Package

npm install

# Add Required Environment Variables

Create env for development & production

# Run Development

npm run dev

# Create Build

npm run dist

# Run Production

npm run start

# Docker Development

docker build -t backend-app:dev -f docker/development/DockerFile .
docker run --rm -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 5000:5000 backend-app:dev

# Docker Production

docker build -t backend-app:dev -f docker/production/Dockerfile .
docker run --rm -d -v ${PWD}:/user/src/backend-app -v /usr/src/backend-app/node_modues -p 5000:5000 backend-app:1.0.0
