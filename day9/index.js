class BankAccount {
  static bankName = "State Bank of India";

  constructor(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  depositAmount(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }
  withdrawalAmount(amount) {
    if (amount > this.balance) {
      console.log("Withdrawal failed: Insufficient balance.");
      return;
    }

    if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. Remaining balance: ${this.balance}`);
    } else {
      console.log("Withdrawal amount must be greater than 0.");
    }
  }

  displayBalance() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Holder Name: ${this.holderName}`);
    console.log(`Current Balance: ${this.balance}`);
  }

  static bankInfo() {
    console.log("Bank Name: " + BankAccount.bankName);
    console.log("General Banking Information:");
    console.log("- Savings and current accounts are available.");
    console.log("- Customers can deposit and withdraw money securely.");
    console.log("- Transactions must respect available balance.");
  }
}

BankAccount.bankInfo();

const account1 = new BankAccount(1001, "Aarav", 5000);
const account2 = new BankAccount(1002, "Diya", 3000);

console.log("\nAccount 1 before transactions:");
account1.displayBalance();

console.log("\nAccount 2 before transactions:");
account2.displayBalance();

console.log("\nTransaction 1: Deposit into Account 1");
account1.depositAmount(1500);

console.log("\nTransaction 2: Withdraw from Account 1");
account1.withdrawalAmount(7000);

console.log("\nTransaction 3: Withdraw from Account 2");
account2.withdrawalAmount(3500);

console.log("\nTransaction 4: Deposit into Account 2");
account2.depositAmount(2000);

console.log("\nFinal Account 1");
account1.displayBalance();

console.log("\nFinal Account 2");
account2.displayBalance();


  