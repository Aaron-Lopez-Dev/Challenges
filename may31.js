/* Here is your challenge: Given a string representing an IP address, return true if the string is a valid address.
An IP address is valid if it consists of four octets, separated by ., and each octet is between 0 and 255.

Test Cases:
With 256.1.2.3, return false,
With 1.2.3.4.5, return false,
With 123,45,67,89, return false,
With 1e0.1e1.1e2.2e2, return false,
With  1.2.3.4, return false,
With 1.2.3.4 , return false,
With 12.34.56.-7, return false,
With 1.2.3.4\n, return false,
With \n1.2.3.4, return false,
With 0.0.0.0, return true,
With 123.45.67.89, return true,
With 255.255.255.255, return true,
With 1.2.3.4, return true,
With 31.41.59.26, return true,
With 53.58.97.93, return true,
With 238.46.26.43, return true
*/



let input = "1e0,1e1,1e2,2e2";

function isValid(input) {

let inputArr = input.split(".", 4)
let validator = [];

    for (let i = 0; i < 4; i++) {
        if (Number(inputArr[i]) >= 0 && 
            Number(inputArr[i]) <= 255 &&
            !inputArr[i].includes(" ") &&
            !inputArr[i].includes("\n") &&
            !inputArr[i].includes("e") 
            ) {
            validator.push("y");
        } else {
            validator.push("n");
        }
    }
if (validator.includes("n")){
    console.log("false");
}else{
    console.log("true")
}

}
    isValid(input);
 
