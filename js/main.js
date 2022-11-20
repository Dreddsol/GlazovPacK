/*let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/
let inputValue = prompt("Input value");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("oops it seems you were wrong");
}