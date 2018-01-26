

// dictating the length of the search
for (var i = 0; i < 10; i++) {
    // get the square of the existing number
    var a = Math.pow(i, 2);
        // tell the computer to split numbers
        if (a > 9) {
            // split the number 
            var output = [];
            var sNumber = a.toString();
            for (var j = 0; j < sNumber.length; j += 1) {
                output.push( +sNumber.charAt(j)); 
                
                console.log("first square", output);
            var squareNumber = [];
                // indivdually square numbers 
                    for (var x = 0; x < output.length; x++){
                        squareNumber.push(Math.pow((parseInt(output[x])), 2));
                    }
                    console.log("second square", squareNumber);
                    // sum of the output
                    // var sum = squareNumber.reduce();
                    // console.log(sum);
                // add those indivdually squared numbers
            }
        } 
    console.log(a);
}

