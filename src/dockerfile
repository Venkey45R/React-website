# -- Stage 1: Build ----------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (leverages Docker layer cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# -- Stage 2: Serve ----------------------------------------------------------
FROM nginx:alpine

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom Nginx config for SPA (handles client-side routing)
RUN printf 'server {\n    listen 80;\n    root /usr/share/nginx/html;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ /index.html;\n    }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
