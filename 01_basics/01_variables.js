const accountId = 1233  // by using const keyword the value becomes fixed.

let accountName = "Anuj"
var accountBalance = 1000    // not recommended to use var keyword because of its scope problem.
accountType = "saving"   // not recommended
console.log(accountId);
console.table([accountId,accountBalance,accountName,accountType]) // no need to write print statement again and again by using console.table
