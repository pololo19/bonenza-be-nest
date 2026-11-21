# Use the official Node.js image as the base image
FROM node:18.18.1

ARG AZURE_KEYVAULT
ARG AZURE_CLIENT_ID
ARG AZURE_CLIENT_SECRET
ARG AZURE_TENANT_ID

ENV AZURE_KEYVAULT=$AZURE_KEYVAULT

# Install system dependencies for Azure CLI
RUN apt-get update && \
    apt-get install -y ca-certificates curl apt-transport-https lsb-release gnupg && \
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/azure-cli.list && \
    apt-get update && \
    apt-get install -y azure-cli

RUN az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

COPY docker/root/application.env ./.env

# Copy entrypoint.sh
COPY docker/root/entrypoint.sh /
COPY docker/root/initializeEnvfile.sh /

RUN chmod +x /*.sh

# build
RUN npm run build

# debug
# create index.html
RUN mkdir -p /app/upload/
RUN touch /app/upload/index.html

# Expose the port on which your app listens
EXPOSE 5000

# Start the app
ENTRYPOINT [ "/entrypoint.sh" ]