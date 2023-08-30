FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install


COPY . .  

#run code set in a container 
ENV PORT 8080

#run containers to access app publicly
EXPOSE 8080

#tell the container  how to run the app
CMD [ "npm", "start" ]
