//arry = [1,2,3,4,5,6]
//target = 7
//write a code find the all pairs that sum up to the target

let array1 = [1,2,3,4,5,6]
let sum =0
for(let i=0;i<array1.length;i++)
{
	for(let j=1;j<array1.length;j++)
	{
	let num1 = array1[i]
	let num2 = array1[j]
	
	sum = num1 + num2
	if(sum>7)
	{
		console.log(num1,num2)
	}
	}
	
}
