FROM node:19-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js app runs on
EXPOSE 3000

# Set the command to run the Next.js application
CMD ["npm", "start"]
