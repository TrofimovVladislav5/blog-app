FROM node:20-alpine
WORKDIR /app
COPY src/frontend/package*.json ./
RUN npm ci
COPY src/frontend/ .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]