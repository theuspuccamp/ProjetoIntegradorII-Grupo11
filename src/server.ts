import express from "express";
import {Request, Response, Router} from "express";
import { AccountsHandler } from "./accounts/accounts";
import { FinancialManager } from "./financial/financial";

const port = 3000; 
const server = express();
const routes = Router();

// definir as rotas. 
// a rota tem um verbo/método http (GET, POST, PUT, DELETE)
routes.get('/', (req: Request, res: Response)=>{
    res.statusCode = 403;
    res.send('Acesso não permitido. Rota Default não disponivel');
});

// vamos organizar as rotas em outro local 
routes.put('/signUp', AccountsHandler.createAccountRoute);
routes.post('/getWalletBalance', FinancialManager.getWalletBalanceHandler)

server.use(routes);

server.listen(port, ()=>{
    console.log(`Server is running on: ${port}`);
})