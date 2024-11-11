# Stage 1: Build the Next.js application
FROM node:22.4.0 AS builder

# Set the working directory inside the container
WORKDIR /app/btbschool-fe

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Set npm configuration
RUN npm config delete proxy && \
    npm config delete http-proxy && \
    npm config delete https-proxy && \
    npm cache clean --force && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set registry https://registry.npmjs.org/

# Install dependencies using npm ci (clean install without audit)
RUN npm ci --no-audit

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create the final image (runtime environment)
FROM node:22.4.0-alpine

# Set the working directory inside the container
WORKDIR /app/btbschool-fe

# Copy only necessary files from the builder stage
COPY --from=builder /app/btbschool-fe /app/btbschool-fe

# Set environment variables (can also be done via Docker Compose or Kubernetes)
ENV NEXT_PUBLIC_INTERNALAPIBASEURL="https://developerpreview.aryanattapt.my.id/api/btbschool"
ENV NEXT_PUBLIC_BASEURL="https://developerpreview.aryanattapt.my.id/"
ENV NEXT_PUBLIC_CLIENTSESSION="X-CLIENT-SID"
ENV NEXT_PUBLIC_BASICKEY="Basic YnRic2Nob2sOmJ0YnNjaG9vbA=="
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6Lc5SikqAAAAAIury1pPE5QsX1ilLuyVL8MsXdd_"
ENV NEXT_PUBLIC_RECAPTCHA_SECRET_KEY="6Lc5SikqAAAAAE3pIs6vKTMZGZgqtSj43E1bTUwY"

# Expose the port the app will run on
EXPOSE 40000

# Start the app (use the production start command)
CMD ["npm", "run", "start:pro"]