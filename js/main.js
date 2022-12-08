/*let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/
/*let inputValue = prompt("Input value");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("oops it seems you were wrong");
}*/
/*const person={
    city: 'Moscow'
}
const student =Object.create(person);
student.ownCity = 'Piter';
for(let key in student){
    if(student.hasOwnProperty(key)){
    console.log(key)
}
}
console.log(key)*/
function repeatWord(word, count) {
	let words = '';
  for (let i = 1; i <= count; --i) {
  	words += word + i + ', ';
  }
  alert(words);
}

repeatWord('слово', 3)