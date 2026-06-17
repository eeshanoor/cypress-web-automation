FROM cypress/included:13.7.0
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npx", "cypress", "run"]