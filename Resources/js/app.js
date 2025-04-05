function test(){
    console.log(colorMessage("red", "red"));
    console.log(isEven(4));
    console.log(numberDigits(15));
    
    function colorMessage(favoriteColor, shirtColor) {    
        if ( favoriteColor == shirtColor) {
            return `The shirt ${shirtColor} is your favorite color!`;
        } else {
            return "That is a nice color"
        }
    }

    function isEven(n) {
        return n % 2 === 0;
    }

    function numberDigits(x) {    
        if (x >= 0 && x <= 9) {
            return `One digit: ${x}`;
        } else if (x >= 10 && x <= 99) {
            return `Two digits: ${x}`;
        } else {
            return `The number is: ${x}`;
        }
    }
}