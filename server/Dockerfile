FROM node:18-bullseye-slim

WORKDIR /app

# Install basic deps needed for Prisma native engines
RUN apt-get update && apt-get install -y --no-install-recommends \
	ca-certificates \
	openssl \
	&& rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 4000
CMD ["node", "index.js"]
