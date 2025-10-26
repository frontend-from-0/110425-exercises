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
    deposit: 'DEPOSIT',
    withdraw: 'WITHDRAW',
    transferOut: 'TRANSFER_OUT',
    transferIn: 'TRANSFER_IN',
    fee: 'FEE',
    interest: 'INTEREST',
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
      .replace('T', ' ');

    return `[${formattedDateTime}] ${this.type} €${this.amount.toFixed(2)} (${this.description})`;
  }
}

const tr1 = new Transaction(
  Transaction.TransactionType.deposit,
  500,
  'Initial deposit',
  {},
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
  - #requireAuth(pin) : throws if wrong or locked (used in methods that require pin) Don't Repeat Yourself (DRY) principle

Validation rules:
  - deposit/withdraw require amount > 0
  - withdraw must have sufficient balance (for base class)
*/
class BankAccount {
  #balance;
  #pin;
  #transactions;

  requireAuth(pin) {
    if (pin.toString() != this.#pin) {
      throw new Error('Incorrect pin.');
    }
  }

  record(tx) {
    this.#transactions.push(tx);
  }
  getBalanceValue() {
    return this.#balance;
  }

  updateBalance(amount) {
    this.#balance += amount;
  }


  constructor(ownerName, pin, initialBalance = 0, currency = 'EUR') {
    this.ownerName = ownerName;
    this.#pin = pin.toString();
    this.#balance = initialBalance;
    this.currency = currency;
    this.#transactions = [];
    this.accountNumber = Date.now();
  }

  getOwnerName() {
    return this.ownerName;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  deposit(amount, description) {
    if (amount < 0) {
      console.error('Only deposit with positive amount is allowed.');
      return;
    }
    const depositTransaction = new Transaction(
      Transaction.TransactionType.deposit,
      amount,
      description,
      {},
    );
    this.record(depositTransaction);
    this.updateBalance(amount);
  }

  withdraw(amount, description, pin) {
    this.requireAuth(pin);

    if (this.#balance < amount) {
      throw new Error('Insufficient funds in the account!');
    }
    this.updateBalance(-amount);
    const withdrawTransaction = new Transaction(
      Transaction.TransactionType.withdraw,
      amount,
      description,
      {},
    );
    this.record(withdrawTransaction);
    console.log(
      'Withdrawal is successfully completed.',
      withdrawTransaction.toString(),
    );
  }

  changePin(oldPin, newPin) {
    if (oldPin.toString() !== this.#pin) {
      console.error('Incorrect pin.');
      return false;
    }
    if (newPin.toString().length != 4 && newPin.toString().length != 6) {
      console.error('The length of the new password should be either 4 or 6.')
      return false;
    }
    // TODO: check if newPin length is 4 or 6 chars
    this.#pin = newPin.toString();
    return true;
  }

  getBalance(pin) {
    this.requireAuth(pin);
    const balance = this.getBalanceValue();
    console.log('Current balance is:', balance);
    return balance;
  }

  getTransactionsArray() {
    return this.#transactions;
  }

  getTransactions(pin) {
    this.requireAuth(pin);
    return this.getTransactionsArray();
  }
}

const bankAccount = new BankAccount(
  'Anna',
  '1234',
  (initialBalance = 0),
  (currency = 'EUR'),
);
bankAccount.deposit(2000, 'Salary');

try {
  bankAccount.withdraw(25, 'Groceries', 1230);
}
catch (error) {
  console.log('Incorrect pin.');
}

try {
  bankAccount.getBalance(1230);
}
catch {
  console.log('Incorrect pin.');
}

bankAccount.withdraw(25, 'Groceries', 1234);
bankAccount.getBalance(1234);

bankAccount.changePin(1234, '0000');

try {
  bankAccount.withdraw(25, 'Groceries', 1234);
}
catch {
  console.log('Incorrect pin.');
}

try {
  bankAccount.getBalance(1234);
}
catch {
  console.log('Incorrect pin.');
}

bankAccount.withdraw(25, 'Groceries', '0000');
bankAccount.getBalance('0000');
bankAccount.getTransactions('0000');

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
  constructor(ownerName, pin, initialBalance = 0, currency = 'EUR', interestRate) {
    super(ownerName, pin, initialBalance, currency);
    this.interestRate = interestRate;
  }

  applyMonthlyInterest() {
    const interest = this.getBalanceValue() * (this.interestRate / 12);
    this.updateBalance(interest);
    const transactionWithInterest = new Transaction(Transaction.TransactionType.interest, interest, 'INTEREST', {})
    this.record(transactionWithInterest);
  }
}


const savings = new SavingsAccount(
  'Elara',
  '4321',
  1000, // Initial balance
  'EUR',
  0.025 // 2.5% annual interest rate
);

// Example:

// 1. Initial Balance:
console.log('Balance before interest:', savings.getBalanceValue());

// 2. Call the method here:
savings.applyMonthlyInterest();

// 3. Check the new Balance:
console.log('Balance after interest:', savings.getBalanceValue());


class CheckingAccount extends BankAccount {
  constructor(ownerName, pin, initialBalance = 0, currency = 'EUR', overdraftLimit) {
    super(ownerName, pin, initialBalance, currency)
    this.overdraftLimit = overdraftLimit;
  }
  static FEE = 5;

  withdraw(amount, description, pin) {
    this.requireAuth(pin);
    if (this.getBalanceValue() - amount >= -this.overdraftLimit) {
      this.updateBalance(-amount);
      const withdrawalTx = new Transaction(Transaction.TransactionType.withdraw, amount, description, {})
      this.record(withdrawalTx);
      if (this.getBalanceValue() < 0) {
        this.updateBalance(-CheckingAccount.FEE);
        const feeTransaction = new Transaction(Transaction.TransactionType.fee, CheckingAccount.FEE, 'Overdraft fee applied', {});
        this.record(feeTransaction);
      }

    } else {
      throw new Error('Withdrawal exceeds overdraft limit.');
    }
  }
}

const checking = new CheckingAccount('Havva', '4321', 1000, 'EUR', 1500);
checking.withdraw(1200, 'Sending money', '4321');
console.log(checking.getBalanceValue());
try {
  checking.withdraw(3000, 'Sending money', '4321');
  console.log('Second withdrawal successful.');
}
catch (error) {
  console.error(`Second withdrawal failed: ${error.message}`);
}

console.log(checking.getBalanceValue());

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
  constructor(accounts = []) {
    this.accounts = accounts;
  }

  createChecking({ ownerName, pin, initialBalance = 0, overdraftLimit }) {
    const newAccount = new CheckingAccount(ownerName, pin, initialBalance, 'EUR', overdraftLimit);
    this.accounts.push(newAccount);
    return newAccount;
  }

  createSavings({ ownerName, pin, initialBalance = 0, interestRate }) {
    const newAccount = new SavingsAccount(ownerName, pin, initialBalance, 'EUR', interestRate);
    this.accounts.push(newAccount);
    return newAccount;
  }

  findAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  authenticate(accountNumber, pin) {
    const account = this.findAccount(accountNumber);
    if (account === undefined) {
      return false;
    }
    try {
      account.getTransactions(pin);
      return true;
    }
    catch (error) {
      return false;
    }
  }


  getBalance(accountNumber, pin) {
    const account = this.findAccount(accountNumber);
    if (this.authenticate(accountNumber, pin)) {
      return account.getBalanceValue();
    } else {
      return null
    }
  }

  deposit(accountNumber, depositAmount, description) {
    const account = this.findAccount(accountNumber);
    if (account === undefined) {
      return false;
    }
    account.deposit(depositAmount, description);
    return true;
  }

  withdraw(accountNumber, pin, amount, description) {
    const account = this.findAccount(accountNumber);
    if (account === undefined) {
      return false;
    }
    if (this.authenticate(accountNumber, pin)) {
      try {
        account.withdraw(amount, description, pin);
        return true;
      }
      catch (error) {
        return null;
      }
    }
    return false;
  }


  transfer(fromAcc, fromPin, toAcc, amount, description) {
    const fromAccount = this.findAccount(fromAcc);
    const toAccount = this.findAccount(toAcc);
    if (fromAccount === undefined || toAccount === undefined) {
      return false;
    }
    if (this.authenticate(fromAcc, fromPin)) {
      try {
        fromAccount.withdraw(amount, description, fromPin);
        toAccount.deposit(amount, description);
        return true;
      }
      catch (error) {
        return false;
      }
    } else {
      return null;
    }
  }
}

const bank = new Bank();

const checkingAccount = bank.createChecking({
  ownerName: 'Havva',
  pin: '2078',
  initialBalance: 1000,
  overdraftLimit: 200
});

const savingAccount = bank.createSavings({
  ownerName: 'Nur',
  pin: '2078',
  initialBalance: 50,
  interestRate: 0.03
});

console.log(`---ACCOUNTS CREATED---`);
console.log(`Havva's Checking Account Number: ${checkingAccount.accountNumber} `);
console.log(`Nur's Savings Account Number: ${savingAccount.accountNumber}`);

const withdrawalAmount = 1100;

try {
  const success = bank.withdraw(
    checkingAccount.accountNumber,
    '2078',
    withdrawalAmount,
    'Fee-incurring transfer'
  );

  if (success) {
    console.log('---TRANSACTION DETAILS---');
    console.log(`Final Balance: ${checkingAccount.getBalanceValue()}`);

    console.log('Transaction History:');
    console.table(checkingAccount.getTransactions('2078'));
  }
}
catch (error) {
  console.error('Withdrawal failed!');
  console.error(`Error: ${error.message}`);
}


console.log('\n--- INTEREST CALCULATION TEST ---');

savingAccount.applyMonthlyInterest();

console.log('Interest applied successfully.');
console.log(`Final Balance: ${savingAccount.getBalanceValue()}`);
console.log('Transaction History:');
console.table(savingAccount.getTransactions('2078'));