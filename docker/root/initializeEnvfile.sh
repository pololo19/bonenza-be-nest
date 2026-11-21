#!/bin/bash

NODE_ENV=$(az keyvault secret show --name NODE-ENV --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "NODE_ENV ---> $NODE_ENV"
POSTGRES_HOST=$(az keyvault secret show --name POSTGRES-HOST --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "POSTGRES_HOST ---> $POSTGRES_HOST"
POSTGRES_PORT=$(az keyvault secret show --name POSTGRES-PORT --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "POSTGRES_PORT ---> $POSTGRES_PORT"
POSTGRES_USER=$(az keyvault secret show --name POSTGRES-USER --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "POSTGRES_USER ---> $POSTGRES_USER"
POSTGRES_PASSWORD=$(az keyvault secret show --name POSTGRES-PASSWORD --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "POSTGRES_PASSWORD ---> $POSTGRES_PASSWORD"
POSTGRES_DATABASE=$(az keyvault secret show --name POSTGRES-DATABASE --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "POSTGRES_DATABASE ---> $POSTGRES_DATABASE"
SERVER_NAME=$(az keyvault secret show --name SERVER-NAME --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SERVER_NAME ---> $SERVER_NAME"
ENVIRONMENT_KEY=$(az keyvault secret show --name ENVIRONMENT-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "ENVIRONMENT_KEY ---> $ENVIRONMENT_KEY"
JWT_SECRET_KEY=$(az keyvault secret show --name JWT-SECRET-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "JWT_SECRET_KEY ---> $JWT_SECRET_KEY"
JWT_TOKEN_EXPIRE=$(az keyvault secret show --name JWT-TOKEN-EXPIRE --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "JWT_TOKEN_EXPIRE ---> $JWT_TOKEN_EXPIRE"
FRONTEND_AUTH_KEY=$(az keyvault secret show --name FRONTEND-AUTH-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "FRONTEND_AUTH_KEY ---> $FRONTEND_AUTH_KEY"

SEND_GRID=$(az keyvault secret show --name SEND-GRID --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SEND_GRID ---> $SEND_GRID"
TWILIO_ACCOUNT_SID=$(az keyvault secret show --name TWILIO-ACCOUNT-SID --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "TWILIO_ACCOUNT_SID ---> $TWILIO_ACCOUNT_SID"
TWILIO_AUTH_TOKEN=$(az keyvault secret show --name TWILIO-AUTH-TOKEN --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "TWILIO_AUTH_TOKEN ---> $TWILIO_AUTH_TOKEN"
GOOGLE_CLIENT_ID=$(az keyvault secret show --name GOOGLE-CLIENT-ID --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "GOOGLE_CLIENT_ID ---> $GOOGLE_CLIENT_ID"
GOGGLE_CLIENT_SECRET=$(az keyvault secret show --name GOGGLE-CLIENT-SECRET --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "GOGGLE_CLIENT_SECRET ---> $GOGGLE_CLIENT_SECRET"
TELEGRAM_BOT_TOKEN=$(az keyvault secret show --name TELEGRAM-BOT-TOKEN --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "TELEGRAM_BOT_TOKEN ---> $TELEGRAM_BOT_TOKEN"
WEBSITE_ORIGIN=$(az keyvault secret show --name WEBSITE-ORIGIN --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "WEBSITE_ORIGIN ---> $WEBSITE_ORIGIN"
BLOCKCHAIN_WALLET_SYSTEM_URL=$(az keyvault secret show --name BLOCKCHAIN-WALLET-SYSTEM-URL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "BLOCKCHAIN_WALLET_SYSTEM_URL ---> $BLOCKCHAIN_WALLET_SYSTEM_URL"

# Game
SOFTSWISS_CASINO_ID=$(az keyvault secret show --name SOFTSWISS-CASINO-ID --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SOFTSWISS_CASINO_ID ---> $SOFTSWISS_CASINO_ID"
SOFTSWISS_API_URL=$(az keyvault secret show --name SOFTSWISS-API-URL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SOFTSWISS_API_URL ---> $SOFTSWISS_API_URL"
SOFTSWISS_SECRET_KEY=$(az keyvault secret show --name SOFTSWISS-SECRET-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SOFTSWISS_SECRET_KEY ---> $SOFTSWISS_SECRET_KEY"
SOFTSWISS_DEPOSIT_URL=$(az keyvault secret show --name SOFTSWISS-DEPOSIT-URL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SOFTSWISS_DEPOSIT_URL ---> $SOFTSWISS_DEPOSIT_URL"
SOFTSWISS_RETURN_URL=$(az keyvault secret show --name SOFTSWISS-RETURN-URL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "SOFTSWISS_RETURN_URL ---> $SOFTSWISS_RETURN_URL"

### Stripe ###
STRIPE_PUBLISHABLE_KEY=$(az keyvault secret show --name STRIPE-PUBLISHABLE-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "STRIPE_PUBLISHABLE_KEY ---> $STRIPE_PUBLISHABLE_KEY"
STRIPE_SECRET_KEY=$(az keyvault secret show --name STRIPE-SECRET-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "STRIPE_SECRET_KEY ---> $STRIPE_SECRET_KEY"
STRIPE_WEBHOOK_SECRET=$(az keyvault secret show --name STRIPE-WEBHOOK-SECRET --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "STRIPE_WEBHOOK_SECRET ---> $STRIPE_WEBHOOK_SECRET"

### Storage Account ###
AZURE_STORAGE_CONNECTION=$(az keyvault secret show --name AZURE-STORAGE-CONNECTION --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "AZURE_STORAGE_CONNECTION ---> $AZURE_STORAGE_CONNECTION"
AZURE_STORAGE_CONTAINER=$(az keyvault secret show --name AZURE-STORAGE-CONTAINER --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "AZURE_STORAGE_CONTAINER ---> $AZURE_STORAGE_CONTAINER"

###
CMC_PRO_API_KEY=$(az keyvault secret show --name CMC-PRO-API-KEY --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "CMC_PRO_API_KEY ---> $CMC_PRO_API_KEY"

###
REDIS_URL=$(az keyvault secret show --name REDIS-URL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "REDIS_URL ---> $REDIS_URL"

###
WEBSITE_LOCAL=$(az keyvault secret show --name WEBSITE-LOCAL --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "WEBSITE_LOCAL ---> $WEBSITE_LOCAL"
WEBSITE_TEST=$(az keyvault secret show --name WEBSITE-TEST --vault-name $AZURE_KEYVAULT --query value -o tsv)
echo "WEBSITE_TEST ---> $WEBSITE_TEST"

#################
sed -i "s|<NODE_ENV>|$NODE_ENV|g" /app/.env
sed -i "s|<POSTGRES_HOST>|$POSTGRES_HOST|g" /app/.env
sed -i "s|<POSTGRES_PORT>|$POSTGRES_PORT|g" /app/.env
sed -i "s|<POSTGRES_USER>|$POSTGRES_USER|g" /app/.env
sed -i "s|<POSTGRES_PASSWORD>|$POSTGRES_PASSWORD|g" /app/.env
sed -i "s|<POSTGRES_DATABASE>|$POSTGRES_DATABASE|g" /app/.env
sed -i "s|<SERVER_NAME>|$SERVER_NAME|g" /app/.env
sed -i "s|<ENVIRONMENT_KEY>|$ENVIRONMENT_KEY|g" /app/.env
sed -i "s|<JWT_SECRET_KEY>|$JWT_SECRET_KEY|g" /app/.env
sed -i "s|<JWT_TOKEN_EXPIRE>|$JWT_TOKEN_EXPIRE|g" /app/.env
sed -i "s|<FRONTEND_AUTH_KEY>|$FRONTEND_AUTH_KEY|g" /app/.env
sed -i "s|<SEND_GRID>|$SEND_GRID|g" /app/.env
sed -i "s|<TWILIO_ACCOUNT_SID>|$TWILIO_ACCOUNT_SID|g" /app/.env
sed -i "s|<TWILIO_AUTH_TOKEN>|$TWILIO_AUTH_TOKEN|g" /app/.env
sed -i "s|<GOOGLE_CLIENT_ID>|$GOOGLE_CLIENT_ID|g" /app/.env
sed -i "s|<GOGGLE_CLIENT_SECRET>|$GOGGLE_CLIENT_SECRET|g" /app/.env
sed -i "s|<TELEGRAM_BOT_TOKEN>|$TELEGRAM_BOT_TOKEN|g" /app/.env
sed -i "s|<WEBSITE_ORIGIN>|$WEBSITE_ORIGIN|g" /app/.env
sed -i "s|<BLOCKCHAIN_WALLET_SYSTEM_URL>|$BLOCKCHAIN_WALLET_SYSTEM_URL|g" /app/.env
sed -i "s|<SOFTSWISS_CASINO_ID>|$SOFTSWISS_CASINO_ID|g" /app/.env
sed -i "s|<SOFTSWISS_API_URL>|$SOFTSWISS_API_URL|g" /app/.env
sed -i "s|<SOFTSWISS_SECRET_KEY>|$SOFTSWISS_SECRET_KEY|g" /app/.env
sed -i "s|<SOFTSWISS_DEPOSIT_URL>|$SOFTSWISS_DEPOSIT_URL|g" /app/.env
sed -i "s|<SOFTSWISS_RETURN_URL>|$SOFTSWISS_RETURN_URL|g" /app/.env
sed -i "s|<STRIPE_PUBLISHABLE_KEY>|$STRIPE_PUBLISHABLE_KEY|g" /app/.env
sed -i "s|<STRIPE_SECRET_KEY>|$STRIPE_SECRET_KEY|g" /app/.env
sed -i "s|<STRIPE_WEBHOOK_SECRET>|$STRIPE_WEBHOOK_SECRET|g" /app/.env
sed -i "s|<AZURE_STORAGE_CONNECTION>|$AZURE_STORAGE_CONNECTION|g" /app/.env
sed -i "s|<AZURE_STORAGE_CONTAINER>|$AZURE_STORAGE_CONTAINER|g" /app/.env
sed -i "s|<CMC_PRO_API_KEY>|$CMC_PRO_API_KEY|g" /app/.env
sed -i "s|<REDIS_URL>|$REDIS_URL|g" /app/.env
sed -i "s|<WEBSITE_LOCAL>|$WEBSITE_LOCAL|g" /app/.env
sed -i "s|<WEBSITE_TEST>|$WEBSITE_TEST|g" /app/.env