// Code your solutions in this file
const array = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        array[i] = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
    }
        return array;
}

function countDown(num) {
    while(num >= 0){
        console.log(num)
        num--
    }
}