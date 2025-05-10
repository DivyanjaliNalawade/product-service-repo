FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .
COPY .env .env

# Expose the application's port
EXPOSE 3004

# Define the command to run the application
CMD ["npm", "start"]
