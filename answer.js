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
 
