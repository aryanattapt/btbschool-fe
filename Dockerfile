FROM node:22.4.0

# Set the working directory inside the container  
WORKDIR /app/btbschool-fe

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  

# Set Config
RUN npm config delete proxy
RUN npm config delete http-proxy
RUN npm config delete https-proxy
RUN npm cache clean --force
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g npm

# Install dependencies
RUN npm ci --no-audit

# Copy the app source code to the container  
COPY . .  

# Set environment Variable
ENV NEXT_PUBLIC_INTERNALAPIBASEURL=https://dev.aryanattapt.my.id/api/btbschool

# Expose the port the app will run on  
EXPOSE 40000

# Build the Next.js app  
RUN npm run build  

# Start the app
CMD npm run start:pro 