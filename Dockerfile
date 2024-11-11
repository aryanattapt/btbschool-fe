# Stage 1: Build the app
FROM node:22.4.0 AS builder

# Set the working directory for the build process
WORKDIR /app/btbschool-fe

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies with npm ci (faster and more reliable for CI/CD)
RUN npm ci --no-audit --prefer-offline

# Copy the entire source code into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create the runtime image
FROM node:22.4.0 AS runtime

# Set the working directory for the runtime environment
WORKDIR /app/btbschool-fe

# Copy only the necessary artifacts from the builder stage (node_modules & .next build output)
COPY --from=builder /app/btbschool-fe /app/btbschool-fe

# Expose the port the app will run on
EXPOSE 40000

# Start the app in production mode
CMD ["npm", "run", "start:pro"]
