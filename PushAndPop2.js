//reverse the array using push and pop
let array = ['a']
let array2 =[]
let array3=[]
array.push('b')
array.push('c')
array.push('d')
array.push('e')

console.log(array)
while(array.length)
{
	array2.push(array.pop())
}

/*array.pop()
array.pop()
array.pop()
array.pop()
array.pop()

console.log(array)*/


console.log(array2)