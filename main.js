$(document).ready(function () {
    // APPLY CLICK HANDLERS

    apply_click_handlers();

});

// GLOBAL VARIABLES

var input_array = ['']; // Create empty array that will store input
var input_index = 0; // Set input index position to 0
var display; // Display current input
var operator_validate = ['+','-','/','x'];

// CLICK HANDLERS

function apply_click_handlers() {
    $('.operand').click(operand_click);
    $('.decimal').click(decimal_click);
    $('.operator').click(operator_click);
    $('.equals').click(equals_click);
    $('.clear').click(clear_click);
    $('.clear_entry').click(clear_entry_click);
}

// OPERAND CLICK

function operand_click() {
    if (input_array.length === 1) {
        // Adds text of current click to the current index position string
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    } else if (operator_validate.indexOf(input_array[input_array.length-1]) !== -1){
        // Increments out of operator to next index position to receive next operand input
        input_index++;
        // Prepares next input to be a string
        input_array[input_index] = '';
        // Adds text of current click to the current index position string
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }
    else {
        // Adds text of current click to the current index position string
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }
}

// DECIMAL CLICK

function decimal_click() {
    // Checks for and prevents multiple decimal inputs
    if (input_array[input_array.length - 1].includes('.')) {
        console.warn('multiple decimals not allowed');
    } else if (operator_validate.indexOf(input_array[input_array.length-1]) !== -1){
    // Increments out of operator to next index position to receive next operand input
    input_index++;
    // Prepares next input to be a string
    input_array[input_index] = '';
    // Adds text of current click to the current index position string
    input_array[input_index] += $(this).text();
    console.log('input array: ', input_array);
    display_value();
}
    // Adds single decimal to string, same as an operand
    else {
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        display_value();
    }
}

//OPERATOR CLICK

function operator_click() {
    var empty_string = input_array[input_array.length -1];
    // Checks for and prevents multiple operator inputs
    if (operator_validate.indexOf(input_array[input_array.length-1]) !== -1) {
        input_array[input_array.length-1] = $(this).text();
        console.log(input_array);
        display_value();
    }
    else if (empty_string.length === 0) {
        console.warn('Cannot start with an operator');
    }
    else {
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

// EQUALS CLICKED

function equals_click() {
    console.log(input_array);
    // Clears display
    $('.calc-display').text('0');
    if(input_array.length !== 1) {
        // Calls function to do math and adds result to display
        prepare_math(input_array);
    }
}

// C CLICKED

function clear_click() {
    // Resets array to starting position
    input_array = [''];
    // Resets index position to starting position
    input_index = 0;
    // Displays 0 on calculator display
    $('.calc-display').text('0');
    console.log(input_array);
}

// CE CLICKED

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

// PREPARE MATH: do math on first two numbers, set result to first number, add next number

function prepare_math(arr){
    // As long as array is longer than 1, splice 3 indexes at position 0, do math the math, and unshift to insert the total into the first position of the array
    while (arr.length > 1){
        var section = arr.splice(0,3);
        var total = do_math(section);
        arr.unshift(total);
    }
    display_value();
    return arr;
}

// CALCULATE RESULT (first number position 0 and second number at position 2)

function do_math(arr) {
    var result;
    if (arr.length === 3) {
        var num1 = parseFloat(arr[0]);
        var num2 = parseFloat(arr[2]);
        var operator = arr[1];
        if (num1 === 1 && operator === '/' && num2 === 0) {
            result = 'Error';
        }
        else if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === 'x') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }
    }
    console.log(result);
    display_value();
    return result;
}

// TODO see scope sheet
