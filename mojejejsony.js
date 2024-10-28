
const user = {name: "Jan", age: 30}

const jsonString = JSON.stringify(user)
console.log(`jsonString: jego wartość to ${jsonString} jego typ to ${typeof jsonString}`)

const jsonObject = JSON.parse(jsonString)
console.log(`jsonObject: jego wartość to ${jsonObject} jego typ to ${typeof jsonObject}`)