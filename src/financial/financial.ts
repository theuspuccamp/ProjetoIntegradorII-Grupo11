
import {Request, RequestHandler, Response} from "express";

/**
    * tudo dentro desse modulo, vai tratar
    * de finanças na plataforma.
    * Exemplo: saldo de carteira de usuario,
    * transferir dinheiro de uma carteira para outra.
*/

export namespace FinancialManager{

    const w1 : Wallet = {
        ownerEmail: "pedro@puc.edu.br",
        balance: 0
    }

    const w2 : Wallet = {
        ownerEmail : "jose@puc.edu.br",
        balance : 1000
    }

    let walletDatabase: Wallet[] = [];
    walletDatabase.push(w1);
    walletDatabase.push(w2);

    export type Wallet ={
        ownerEmail: string;
        balance: number;
    }

    export type Deposit = {
        walletOwnerEmail: string;
        value: number; 
    }

    export type InternalWithdraw = {
        walletEmailFrom : string;
        walletEmailTo: string;
        value : number;
    }

    export type ExternallWithdraw = {
        walletEmailRequester : string;
        value : number;
    }
    
    

    function getWalletBalance(email: string): number | undefined {
        let balance = undefined; 
    
        walletDatabase.find(w => {
            if (w.ownerEmail === email) {
                balance = w.balance;
                return ;
            }
          
        });
    
        return balance; // Will be undefined if not found
    }
    

    export const  getWalletBalanceHandler : RequestHandler = (req: Request, res: Response) => {
        // implementar
    }

    /*
        Ex1 - Implementar o tratador da rota de saldo
        Ex2 - Implementar o processo de transferencia de 
        valor de uma conta para outra(verificando se tem saldo)
    */

}