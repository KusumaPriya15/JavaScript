const accountId=231232
let accountEmail="john@google.com"
var accountPassword="12345"
accountCity="Udaipur"

//accountId=3 not allowed//

accountEmail="dead@happy.com"
accountPassword="22222"
accountCity="Yemen"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity])

//Prefer not to use var because of scope problem//