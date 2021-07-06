#docker image build -t newts1 .
#docker run --network host -d newts1
FROM node:14

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

ENV NEQUI_QUEUE_NAME="https://sqs.us-east-1.amazonaws.com/177333342796/sqs-lambda-customer-service-create-ticket-comment-qa"

# Expose port 8080
EXPOSE 8080
RUN npm run build

CMD npm run start