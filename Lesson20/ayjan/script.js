/*
===========================================================
  BANK ACCOUNT SYSTEM — OOP WITH PRIVATE FIELDS
===========================================================
In this project, you'll build a tiny banking model:
- Create accounts (checking/savings)
- Authenticate with PIN (private)
- Deposit, withdraw, transfer
- Keep a transaction history
- Run monthly processing (interest/fees)
- Print statements

You'll practice:
1. Classes, objects, and inheritance (extends)
2. Encapsulation with private fields (#)
3. Methods and basic validation
4. Arrays (push, filter, find, map)
5. Conditional logic and guard clauses
6. Static methods/properties (ID generators, rules)
7. (Optional) Error handling with try/catch

Test each step by running this file with Node.js.
*/

/*
-----------------------------------------------------------
  STEP 1: Transaction Class
-----------------------------------------------------------
1) Create a `Transaction` class that represents a single
   account operation.

2) Constructor should accept:
   - type: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'FEE' | 'INTEREST'
   - amount: number (> 0)
   - description: string (optional)
   - meta: an object for extra info (e.g., { to: 100002 } for transfers)
   - timestamp: default to new Date()

3) Add a `toString()` instance method returning a readable line:
   e.g., "[2025-09-23 10:12] DEPOSIT €100.00 (Initial funding)"
*/

class Transaction {
  static TransactionType = {
    deposit: "DEPOSIT",
    withdraw: "WITHDRAW",
    transferOut: "TRANSFER_OUT",
    transferIn: "TRANSFER_IN",
    fee: "FEE",
    interest: "INTEREST",
  };
  constructor(type, amount, description, meta, timestamp = new Date()) {
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.meta = meta;
    this.timestamp = timestamp;
  }

  toString() {
    const formattedDateTime = this.timestamp
      .toISOString()
      .slice(0, 16)
      .replace("T", " ");

    return `[${formattedDateTime}] ${this.type} EUR${this.amount} (${this.description})`;
  }
}

const tr1 = new Transaction(
  Transaction.TransactionType.deposit,
  500,
  "Initial deposit",
  {}
);
console.log(tr1.toString());

/*
-----------------------------------------------------------
  STEP 2: Base Class - BankAccount with Private Fields
-----------------------------------------------------------
Create `BankAccount` with:
- Private fields:
  #balance (number), #pin (string), #transactions (array)
- Public properties:
  accountNumber (number), ownerName (string), currency (string)

Constructor:
  new BankAccount({ ownerName, pin, initialBalance = 0, currency = 'EUR' })

Public methods to implement:
  - getOwnerName() : string
  - getAccountNumber() : string
  - deposit(amount, description?) : void
  - withdraw(amount, description?) : void
  - changePin(oldPin, newPin) : boolean
  - getBalance(pin) : number | throws if locked or wrong pin
  - getTransactions(pin) : Transaction[] | throws if locked or wrong pin

Private helpers (use #):
  - #record(tx: Transaction) : void (to push transaction)
  - #requireAuth(pin) : throws if wrong or locked (used in methods that require pin)

Validation rules:
  - deposit/withdraw require amount > 0
  - withdraw must have sufficient balance (for base class)
*/
class BankAccount {
  #balance;
  #pin;
  #transactions;

  constructor(ownerName, pin, initialBalance = 0, currency = "EUR") {
    this.ownerName = ownerName;
    this.#pin = pin.toString();
    this.#balance = initialBalance;
    this.currency = currency;
    this.#transactions = [];
    this.accountNumber = Date.now();
  }
  _commitTransaction(transaction) {
    const type = transaction.type;
    const amount = transaction.amount;
    if (
      type === Transaction.TransactionType.deposit ||
      type === Transaction.TransactionType.transferIn ||
      type === Transaction.TransactionType.interest
    ) {
      this.#balance += amount;
    } else if (
      type === Transaction.TransactionType.withdraw ||
      type === Transaction.TransactionType.transferOut ||
      type === Transaction.TransactionType.fee
    ) {
      this.#balance -= amount;
    }
    this.#transactions.push(transaction);
    console.log(`Transaction committed: ${transaction.toString()}`);
  }

  getOwnerName() {
    return this.ownerName;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  deposit(amount, description) {
    if (amount <= 0) {
      console.error("Only deposit with positive amount is allowed.");
      return;
    }
    const depositTransaction = new Transaction(
      Transaction.TransactionType.deposit,
      amount,
      description
    );
    this._commitTransaction(depositTransaction);
    console.log(
      "Deposit is successfully completed.",
      depositTransaction.toString()
    );
  }

  withdraw(amount, description, pin) {
    if (pin.toString() !== this.#pin) {
      console.error("Incorrect pin.");
      return;
    }

    if (this.#balance < amount) {
      console.error("Insufficient funds in the account!");
      return;
    }
    
    const withdrawTransaction = new Transaction(
      Transaction.TransactionType.withdraw,
      amount,
      description
    );
    this._commitTransaction(withdrawTransaction);
    console.log(
      "Withdrawal is successfully completed.",
      withdrawTransaction.toString()
    );
  }

  changePin(oldPin, newPin) {
    if (oldPin.toString() !== this.#pin) {
      console.error("Incorrect pin.");
      return false;
    }
    // TODO: check if newPin length is 4 or 6 chars
    this.#pin = newPin.toString();
    return true;
  }
  getBalance(pin) {
    if (pin.toString() !== this.#pin) {
      console.error("Incorrect pin.");
      return;
    }
    console.log("Current balance is:", this.#balance);
    return this.#balance;
  }

  getTransactions(pin) {
    if (pin.toString() !== this.#pin) {
      console.error("Incorrect pin.");
      return;
    }
    console.log("Transactions:");
    console.table(this.#transactions);
    return this.#transactions;
  }
}

const bankAccount = new BankAccount(
  "Anna",
  "1234",
  (initialBalance = 0),
  (currency = "EUR")
);

bankAccount.deposit(2000, "Salary");
bankAccount.withdraw(25, "Groceries", 1230);
bankAccount.getBalance(1230);

bankAccount.withdraw(25, "Groceries", 1234);
bankAccount.getBalance(1234);

bankAccount.changePin(1234, "0000");
bankAccount.withdraw(25, "Groceries", 1234);
bankAccount.getBalance(1234);
bankAccount.withdraw(25, "Groceries", "0000");
bankAccount.getBalance("0000");
bankAccount.getTransactions("0000");

/*
-----------------------------------------------------------
  STEP 3: Subclasses — SavingsAccount & CheckingAccount
-----------------------------------------------------------
1) `SavingsAccount`:
   - Adds `interestRate` (e.g., 0.02 for 2% annual).
   - Method: applyMonthlyInterest() -> computes monthly interest
     interest = balance * (annualRate / 12)
     Record a Transaction("INTEREST", interest)


2) `CheckingAccount`:
   - Adds `overdraftLimit` (e.g., €200).
   - Override withdraw(): allow balance - amount >= -overdraftLimit
     If the operation dips below 0, also record a Transaction("FEE", fee)
     where fee is a flat fee (e.g., €5).
   - Provide static FEE = 5
*/
class SavingsAccount extends BankAccount {
  constructor(ownerName, pin, initialBalance = 0, interestRate = 0.02) {
    super(ownerName, pin, initialBalance);
    this.interestRate = interestRate;
  }
  applyMonthlyInterest(pin) {
    const currentBalance = this.getBalance(pin);
    if (currentBalance === undefined || currentBalance <= 0) {
      console.log("No interest applied due to non-positive balance.");
      return;
    }
    const monthlyRate = this.interestRate / 12;
    const interestAmount = parseFloat(
      (currentBalance * monthlyRate).toFixed(2)
    );
    const interestTransaction = new Transaction(
      Transaction.TransactionType.interest,
      interestAmount,
      `Monthly interest (${(this.interestRate * 100).toFixed(2)}% annual)`
    );

    this._commitTransaction(interestTransaction);
    console.log(`Interest of EUR ${interestAmount} applied.`);
  }
}
const savingsAccount = new SavingsAccount("Alice", "9999", 1200, 0.04);
savingsAccount.applyMonthlyInterest("9999");
savingsAccount.getBalance("9999");
const emptySavingsAccount = new SavingsAccount("Bob", "8888", 0, 0.04);
emptySavingsAccount.applyMonthlyInterest("8888");
emptySavingsAccount.getBalance("8888");


class CheckingAccount extends BankAccount {
  static FEE = 5;
  constructor(ownerName, pin, initialBalance = 0, overdraftLimit = 200) {
    super(ownerName, pin, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(amount, description, pin) {
    if (this.getBalance(pin) === undefined) {
      console.error("Incorrect pin.");
      return;
    }
    const currentBalance = this.getBalance(pin);
    if (currentBalance - amount < -this.overdraftLimit) {
      console.error("Withdrawal exceeds overdraft limit!");
      return;
    }

    const withdrawTransaction = new Transaction(
      Transaction.TransactionType.withdraw,
      amount,
      description
    );
    this._commitTransaction(withdrawTransaction);
    const newBalance = this.getBalance(pin);
    if (currentBalance >= 0 && newBalance < 0) {
      console.log("Account has gone into overdraft. Applying fee.");
      const feeTransaction = new Transaction(
        Transaction.TransactionType.fee,
        CheckingAccount.FEE,
        "Overdraft fee"
      );
      this._commitTransaction(feeTransaction);
    }
  }
}

const checkingAcc = new CheckingAccount("Doe", "5678", 500, 300);
checkingAcc.withdraw(700, "Rent payment", "5678");
checkingAcc.getBalance("5678");
checkingAcc.withdraw(200, "Utility bill", "5678");
checkingAcc.getBalance("5678");

/*
-----------------------------------------------------------
  STEP 4: Bank — Manage Many Accounts
-----------------------------------------------------------
Create a `Bank` class to manage accounts and authentication flows.

Responsibilities:
- createChecking({ ownerName, pin, initialBalance?, overdraftLimit? }) -> CheckingAccount
- createSavings({ ownerName, pin, initialBalance?, interestRate? }) -> SavingsAccount
- findAccount(accountNumber) -> account or null
- authenticate(accountNumber, pin) -> boolean (and return the account)
- getBalance(accountNumber, pin)
- deposit(accountNumber, amount, description?)
- withdraw(accountNumber, pin, amount, description?)
- transfer(fromAcc, fromPin, toAcc, amount, description?)

Notes:
- For `transfer`: withdraw from source then deposit to target *only if both succeed*.
  Record TRANSACTION types: TRANSFER_OUT on source, TRANSFER_IN on target.
*/

class Bank {
  #accounts;
  constructor() {
    this.#accounts = new Map();
    console.log("Bank created.");
  }

  createSavings({ ownerName, pin, initialBalance = 0, interestRate = 0.02 }) {
    const newSavingsAcc = new SavingsAccount(
      ownerName,
      pin,
      initialBalance,
      interestRate
    );
    this.#accounts.set(newSavingsAcc.getAccountNumber(), newSavingsAcc);
    console.log(
      `Savings account created for ${ownerName} with account number ${newSavingsAcc.getAccountNumber()}.`
    );
    return newSavingsAcc;
  }

  createChecking({ ownerName, pin, initialBalance = 0, overdraftLimit = 200 }) {
    const newCheckingAcc = new CheckingAccount(
      ownerName,
      pin,
      initialBalance,
      overdraftLimit
    );
    this.#accounts.set(newCheckingAcc.getAccountNumber(), newCheckingAcc);
    console.log(
      `Checking account created for ${ownerName} with account number ${newCheckingAcc.getAccountNumber()}.`
    );
    return newCheckingAcc;
  }

  findAccount(accountNumber) {
    return this.#accounts.get(accountNumber) || null;
  }

  deposit(accountNumber, amount, description) {
    const account = this.findAccount(accountNumber);
    if (!account) {
      console.error("Account not found.");
      return;
    }
    account.deposit(amount, description);
  }

  withdraw(accountNumber, pin, amount, description) {
    const account = this.findAccount(accountNumber);
    if (!account) {
      console.error("Account not found.");
      return;
    }
    account.withdraw(amount, description, pin);
  }

  getBalance(accountNumber, pin) {
    const account = this.findAccount(accountNumber);
    if (!account) {
      console.error("Account not found.");
      return;
    }
    const balance = account.getBalance(pin);
    if (balance !== undefined) {
      console.log(`Balance for account ${accountNumber}: EUR${balance}`);
    } else {
      console.error("Unable to retrieve balance.");
    }
    return balance;
  }

  transfer(fromAccountNum, fromPin, toAccountNum, amount, description) {
    const fromAccount = this.findAccount(fromAccountNum);
    const toAccount = this.findAccount(toAccountNum);
    if (!fromAccount || !toAccount) {
      console.error("One or both accounts not found.");
      return;
    }
    if(fromAccountNum === toAccountNum){
      console.error("Cannot transfer to the same account.");
      return;
    }
    const currentBalance = fromAccount.getBalance(fromPin);
    if (currentBalance === undefined) {
      console.error("Authentication failed for the source account.");
      return;
    }
    if(currentBalance < amount && !(fromAccount instanceof CheckingAccount)){
      console.error("Insufficient funds including overdraft limit.");
      return;
}
console.log(`Initiating transfer...${amount} from ${fromAccountNum} to ${toAccountNum}`);
  
const transactionOut = new Transaction(
  Transaction.TransactionType.transferOut,
  amount,
  description,
  { to: toAccountNum }
);
fromAccount._commitTransaction(transactionOut);

const transactionIn = new Transaction(
  Transaction.TransactionType.transferIn,
  amount,
  description,
  { from: fromAccountNum }
);
toAccount._commitTransaction(transactionIn);

console.log("Transfer completed successfully.");


}
}

const bank = new Bank();
const acc1 = bank.createChecking({
  ownerName: "Alice",
  pin: "1111",
  initialBalance: 300,
  overdraftLimit: 150,
});
const acc2 = bank.createSavings({
  ownerName: "Bob",
  pin: "2222",
  initialBalance: 500,
  interestRate: 0.025,
});
bank.getBalance(acc1.getAccountNumber(), "1111");
bank.getBalance(acc2.getAccountNumber(), "2222");
bank.transfer(
  acc1.getAccountNumber(),
  "1111",
  acc2.getAccountNumber(),  
  200,
  "Payment for services"
);
bank.getBalance(acc1.getAccountNumber(), "1111");
bank.getBalance(acc2.getAccountNumber(), "2222");




