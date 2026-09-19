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
