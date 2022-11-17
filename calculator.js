let result = document.getElementById('input')

// let calculate = function calc(number){
//     result.value+=number;
// }

//Allows user to input into input box with buttons
function calc(number){
    result.value+=number
}

//Checks evaluates string and checks for invalid inputs
function Result(){
    try {
        result.value=eval(result.value)
    } catch (error) {
        alert('Invalid input')
    }
}

//Clears calculator
function clr(){
    result.value = " "
}