var num1 = 0;       //Begin number1 = 0;
var num2 = 1;       //Begin number2 = 1;
var storage = 0;        //Used to store the calcluations.

function fibonacciCalc(num) {
        for (i = 0; i < num; i++) {     //loop trough the times user wants fibonachi calculations to be done.
            document.write(storage + "<br>") //Print to dom + <br> 
            storage = num1 + num2;      //storage = num1 + num2; | Which will change due to the loop doing this 20x. 
            num1 = num2;                // num 1  = 2 (1)
            num2 = storage;             //num 2 = storage
        }
    
}


// Edit (20) to any number to get fibonacci to calcluate to that certain number =). 
fibonacciCalc(20) 