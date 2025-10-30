class Payment{
        constructor(){
            this.CreditCardPayment = 5000000;
            this.EWalletPayment = 1000000;
            this.BankTransferPayment = 2000000;
        }
        process(){
    }
}

class CreditCardPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.CreditCardPayment} menggunakan Kartu Kredit`);
    }
}

class EWalletPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.EWalletPayment} menggunakan E-Wallet`);
    }
}

class BankTransferPayment extends Payment{
    process(){
        return console.log(`Membayar Rp${this.BankTransferPayment} menggunakan Transfer Bank`);
    }
}

const payment1 = new CreditCardPayment;
payment1.process();

const payment2 = new EWalletPayment;
payment2.process();

const payment3 = new BankTransferPayment;
payment3.process();