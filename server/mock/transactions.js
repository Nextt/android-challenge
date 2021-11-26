class TransactionGenerator {
  transactionTypes = [ 'deposit', 'withdrawal', 'credit' ];

  ccTransactions = [ 'Uber 03217361 SF*POOL**', 'IFood - 213131', 'Amazon 1232312 Online' ]

  getDescription(type) {
    if (type === 'credit') {
      return this.ccTransactions[Math.floor(Math.random() * 3)];
    } else if (type === 'deposit') {
      return 'One-time Deposit';
    } else {
      return 'One-time Withdrawal';
    }
  }

  generateTransaction(createdOn) {
    const type = this.transactionTypes[Math.floor(Math.random() * 3)];

    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      accountNumber: Math.floor(Math.random() * 1000000),
      amount: Math.floor(Math.random() * 100000)/100,
      type: type,
      createdOn: createdOn ? createdOn : new Date(),
      oldBalance: Math.floor(Math.random() * 1000000)/100,
      newBalance: Math.floor(Math.random() * 1000000)/100,
      description: this.getDescription(type)
    };
    return transaction;
  };

  generateTransactions(quantity, months = 3) {
    const endDate = new Date();
    const startDate = this.getStartDate(endDate, months);
    const transactions = [];
    for (let i = 0; i < quantity; i++) {
      transactions.push(this.generateTransaction(this.randomDate(startDate, endDate)));
    }
    return transactions.sort((a, b) => b.createdOn - a.createdOn);
  };

  getStartDate(maxDate, months) {
    const startDate = new Date();
    startDate.setMonth(maxDate.getMonth() - months);
    return startDate;
  };

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

};

module.exports = TransactionGenerator;
