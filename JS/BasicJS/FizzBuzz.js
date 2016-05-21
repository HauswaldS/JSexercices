for (i = 0 ; i <= 10 ; i++) {
    if (i % 2 == 0 && i % 3 == 0){
        console.log("FizzBuzz");
    }
   else if( i % 2 == 0) {
        console.log("Fizz");
    }
    else if (i % 3 == 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}