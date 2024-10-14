# Stage 1: Build the application
FROM node:21 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:21 AS serve

# Set the working directory
WORKDIR /app

# Copy only the built application from the build stage
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./

# Install a lightweight server
RUN npm install serve

# Expose the port for the application
EXPOSE 3000

# Command to run the application
CMD ["npx", "serve", "-s", "build"]