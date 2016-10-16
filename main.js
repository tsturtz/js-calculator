$(document).ready(function () {
    // APPLY CLICK HANDLERS

    apply_click_handlers();

});

// GLOBAL VARIABLES

var input_array = ['']; // Create empty array that will store input
var input_index = 0; // Set input index position to 0
var display; // Display current input

// CLICK HANDLERS

function apply_click_handlers() {
    $('.operand').click(operand_click);
    $('.operator').click(operator_click);
    $('.decimal').click(decimal_click);
    $('.equals').click(equals_click);
    $('.clear').click(clear_click);
    $('.clear_entry').click(clear_entry_click);
}

// BUTTON CLICK FUNCTIONS

function operand_click() {
    if(input_array.length === 1){
        // Adds text of current click to the current index position string
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }else{
        // Increments out of operator to next index position to receive next operand input
        input_index++;
        // Prepares next input to be a string (?) Confused on why without this I receive the following example in the next index position: example: 'undefined3'
        input_array[input_index] = '';
        // Adds text of current click to the current index position string
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }
}

function operator_click() {
    // Checks for and prevents multiple operator inputs
    if(input_array[input_array.length-1].includes('+') || input_array[input_array.length-1].includes('-') || input_array[input_array.length-1].includes('x') || input_array[input_array.length-1].includes('/') ){
        console.log('multiple operators not allowed');
    }
    else{
        // Increments from last index position to receive new operator input
        input_index++;
        // Adds operator string to current index position
        input_array[input_index] = $(this).text();
        console.log('input array: ', input_array);
        // Increments out of operator to next index position to receive next operand input
        //input_index++;
        display_value();
        // Prepares next input to be a string (?) Confused on why without this I receive the following example in the next index position: example: 'undefined3'
        //input_array[input_index] = '';
    }
}

function decimal_click(){
    // Checks for and prevents multiple decimal inputs
    if(input_array[input_array.length-1].includes('.')){
        console.log('multiple decimals not allowed');
    }
    // Adds single decimal to string, same as an operand
    else{
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }
}

function equals_click() {
    console.log(input_array);
    // Clears display
    $('.calc-display').text('');
    // Calls function to do math and adds result to display
    $('.calc-display').append(do_math(input_array[0], input_array[2]));
}

function clear_click() {
    // Resets array to starting position
    input_array = [''];
    // Resets index position to starting position
    input_index = 0;
    // Displays 0 on calculator display
    $('.calc-display').text('0');
    console.log(input_array);
}

function clear_entry_click() {
    // Removes last index entry from array
    input_array.pop();
    // Decrements index position to be ready for next input
    input_index--;
    console.log(input_index);
    display_value();
}

// ADD TO DISPLAY

function display_value() {
    // Joins together array indexes into a string
    display = input_array.join('');
    // Displays joined string on calculator display
    $('.calc-display').text(display);
}

// CALCULATE RESULT (first number position 0 and second number at position 2)

function do_math(num1, num2) {
    var result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var operator = input_array[1];
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === 'x') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    console.log(result);
    return result;
}


/*        var input = $(this).text();
 var obj = {};
 if(input == '+' || input == '-' || input == 'x' || input == '/'){
 console.log('operator');
 obj.type = 'operator';
 obj.value = input;
 input[input_index] += obj;
 input_index++;
 console.log(input);
 }else if(input == '='){
 console.log('equalSign');
 obj.type = 'equalSign';
 obj.value = input;
 input[input_index] += obj;
 input_index++;
 console.log(input);
 }else if(input >= 0 || input <= 9 || input == '.'){
 console.log('number');
 obj.type = 'number';
 obj.value = input;
 input[input_index] += obj;
 console.log(input);
 }else if(input == 'C'){
 console.log('clear');
 }else if(input == 'CE'){
 console.log('clear entry')
 }
 console.log(obj);*/