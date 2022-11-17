let result = document.getElementById('input')

// let calculate = function calc(number){
//     result.value+=number;
// }

function calc(number){
    result.value+=number
}

function Result(){
    try {
        result.value=eval(result.value)
    } catch (error) {
        alert('Invalid input')
    }
}

function clr(){
    result.value = " "
}