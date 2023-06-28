// Ch 10: ANOTHER WAY TO DECLARE OBJECTS IN JS:

const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,
  
    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
      return 100;
    }
  };
  
  console.log(bankAccount.getBalance());

//   ➜  bites git:(main) ✗ node bankAccount.js
// 100

// This is useful as a key-value data structure (similar to hashes or maps in other languages), 
// or when you need a single, placeholder object (you'll see this later when you'll need to mock 
// in your unit tests).