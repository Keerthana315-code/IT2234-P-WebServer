let numarray = [2,3,4,5]
console.log(numarray);
for(let i=0;i<numarray.length;i++)
{
	console.log(numarray[i])
}

let names = ["Anjalan","Keerthana","Jathu","Vino","Kumu"]
for(let i=0;i<names.length;i++)
{
	console.log(names[i])
}
numarray.forEach((n)=>
{
	console.log(n)
})