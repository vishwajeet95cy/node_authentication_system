# using Lightweight docker image for node
FROM node:20-apline AS base

# Setting Up Working Directory
WORKDIR /usr/src/backend-app

# Copying Package Files
COPY package*.json ./

# Installing Dependencies
RUN npm ci --only-production

# Copying Files
COPY . .

# Build Typescript Project
RUN npm run dist

# Exposing Port
EXPOSE 5000

# Start Application
CMD ["npm", "run", "start"]