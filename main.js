$(document).ready(function () {
    // APPLY CLICK HANDLERS

    $('.operand').click(operand_click);
    $('.operator').click(operator_click);
    $('.equals').click(equals_click);
    $('.clear').click(clear_click);
    $('.clear_entry').click(clear_entry_click);
});

// GLOBAL VARIABLES

var input_array = ['']; // Create empty array that will store input
var input_index = 0; // Set input index position to 0
var display; // Display current input

// BUTTON CLICK FUNCTIONS

function operand_click() {
    input_array[input_index] += $(this).text();
    console.log('input array: ', input_array);
    display_value();
}

function operator_click() {
    input_index++;
    input_array[input_index] = $(this).text();
    console.log('input array: ', input_array);
    input_index++;
    display_value();
    input_array[input_index] = '';
}

function equals_click() {
    console.log(input_array);
    $('.calc-display').text('');
    $('.calc-display').append(do_math(input_array[0], input_array[2]));
}

function clear_click() {
    input_array = [''];
    input_index = 0;
    $('.calc-display').text('0');
    console.log(input_array);
}

function clear_entry_click() {
    input_array.pop();
    input_array = [''];
    console.log(input_array);
    display_value();
}

// ADD TO DISPLAY

function display_value() {
    display = input_array.join('');
    $('.calc-display').text(display);
}

// CALCULATE RESULT (first number position 0 and second number at position 2)

function do_math(num1, num2) {
    var result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var operator = input_array[1];
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == 'x') {
        result = num1 * num2;
    } else if (operator == '/') {
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