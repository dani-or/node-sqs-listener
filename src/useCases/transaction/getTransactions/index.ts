import { GetTransacionsController } from "./getTransactions.controller";
import { GetTransactionService } from "./getTransactions.service";
import { SQSTransactionRespository } from "../../../repositories/implementations/SQSTransactionRespository";
const sqsTransactionRespository = new SQSTransactionRespository();
const getTransactionService = new GetTransactionService(sqsTransactionRespository);
const getTransacionsController = new GetTransacionsController(getTransactionService);
export { getTransactionService, getTransacionsController};