const strings=['a','b','c','d']

// 4*4 = 16 bytes of storage

// push 
strings.push('e') // Add the next item at the end ---> O(1)

// pop
strings.pop() // Remove the last item  ---> O(1)

// Unshift -> Insert Operation
strings.unshift('x')  // Add the item in the beginning  ---> O(n) 

// Shift -> Delete Operation
strings.shift() // Remove the item in the beginning ---> O(n)

// splice -> Add things in middle og the arrat
strings.splice(2,0,'alien') // O(n)

console.log(strings) 