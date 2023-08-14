# calculator
The Odin Project calculator project

Create 3 variables:
1. num1 (first number of the equation) //done
2. num2 (second number of the equation) //done
3. operator (operator of the equation) //done

Create functions for:
1. Addition //done
2. Subtraction //done
3. Multiplication //done
4. Division //done

Create a function that takes num1 and num2 and operates them based on the operator selected. //done

1. When a number is clicked it gets added to the end of the displayed character.
2. When an operator( +, -, x, / ) is clicked:
    a. the number in the display is logged as num1.
    b. the clicked operator is logged as operator.
3. When a number is clicked it gets added to the end of the displayed character.
4. When equal is clicked:
    a. the number in the display is logged as num2.
    b. the operate function is run.
Alts:
    a. at any point if the clear(c) button is clicked, the display is cleared.
        1. Run an if loop if display has number => clr //num2 will not be assigned yet.
        2. else if operator is not empty => clr
        3. else if num1 is not empty => clr
    b. at any point is the decimal(.) is clicked it adds a decimal to the displayed characters.