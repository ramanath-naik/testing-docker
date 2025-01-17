# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json to the container
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on (default is usually 3000)
EXPOSE 3000

# Command to run your application
CMD ["node", "index.js"]
