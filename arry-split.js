const nums = [1,2,3,4,5,6,7,8,9]
const part = nums.slice(2,6)

const remove = nums.splice(2,6, 77,88,99,100)

console.log(part)

console.log(remove)

console.log(nums)


const togather = nums.join(" ,")
console.log(togather)