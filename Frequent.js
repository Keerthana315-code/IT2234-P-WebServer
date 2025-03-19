let array1 = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let frequency = {}; // Object to store the frequency of elements
let maxCount = 0;
let mostFrequentElement;

// Count occurrences of each element
for (let num of array1) {
    frequency[num] = (frequency[num] || 0) + 1;
    
    // Update most frequent element
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
}

console.log(`The most frequent element is ${mostFrequentElement} with a count of ${maxCount}`);
