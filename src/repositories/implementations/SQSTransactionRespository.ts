import { ITransactionRepository } from "../ITransactionRepository";
import { Transaction } from "../../entities/Transaction";
import { SQS } from 'aws-sdk';

export class SQSTransactionRespository implements ITransactionRepository {


  private sqs = new SQS({ region: "us-east-1" });
  //export NEQUI_QUEUE_NAME=https://sqs.us-east-1.amazonaws.com/177333342796/sqs-lambda-customer-service-create-ticket-comment-qa
  async getTransactions() {
    let params = {
      QueueUrl: process.env.NEQUI_QUEUE_NAME
    };
    let response = await this.sqs.receiveMessage(params).promise();
    console.log("response",response);
    return  [];
  }
}
