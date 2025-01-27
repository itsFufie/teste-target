let string = "Adoraria trabalhar na Target Sistemas!";
let result = "";
let index = string.length - 1;

while (index >= 0) {
    result += string[index];
    index -= 1;
}
console.log(result);