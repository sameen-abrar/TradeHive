# Step 1: Use a base image (Node.js)
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR mkdir /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port that the app will run on
EXPOSE 8080

# Step 7: Set environment variables (optional if not in .env)
# ENV DATABASE_URL=postgresql://admin:admin.10@db:5432/tradehive?schema=public
# ENV JWT_SECRET=your-secret-key

# Step 8: Start the application
CMD ["node", "src/index.js"]
