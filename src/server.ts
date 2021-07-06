import {getTransacionsController} from './useCases/transaction/getTransactions'
(async function(){ 
    for (;;) {
        await getTransacionsController.handle();
    }  
 })();




    

