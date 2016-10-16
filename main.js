$(document).ready(function(){

    // GLOBAL VARIABLES

    var input = ['']; // Create empty array that will store input
    var input_index = 0; // Set input index position to 0
    var display;
    var numbers = ['0','1','2','3','4','5','6','7','8','9']; // Numbers
    var operators = ['+','-','/','x']; // Operators
    var decimal = ['.']; // Decimal point

    // APPLY CLICK HANDLERS

    function apply_click_handlers(){
        $('.operand').click(operand_click);
        $('.operator').click(operator_click);
        $('.equals').click(equals_click);
        $('.clear').click(clear_click);
        $('.clear_entry').click(clear_entry_click);
    }

    // BUTTON CLICK FUNCTIONS

    function operand_click(){
        console.log('operand clicked');
        input[input_index] += $(this).text();
        console.log('input array: ', input);
        display = input.join('');
        display_value();
    }

    function operator_click(){
        input_index++;
        input[input_index] = $(this).text();
        console.log('input array: ', input);
        input_index++;
        display = input.join('');
        display_value();
        input[input_index] = '';
    }

    function equals_click(){
        console.log(input);
        $('.calc-display').text('');
        $('.calc-display').append(do_math(input[0],input[2]));
    }

    function clear_click(){
        input = [''];
        input_index = 0;
        display = input.join('');
        display_value();
        console.log(input);
    }

    function clear_entry_click(){
        if(input[input.length-1].indexOf(operators)){
            input.pop();
            input.pop();
        }else if(input[input.length-1].indexOf(number)){
            input.pop();
            input = [''];
        }
        console.log(input);
        display = input.join('');
        display_value();
    }

    // ADD TO DISPLAY

    function display_value(){
        $('.calc-display').text(display);
    }

    //

    function check_if_operator(){
        if(input[input.length-1].indexOf(operators)){

        }
    }

    // CALCULATE RESULT (first number position 0 and second number at position 2)

    function do_math(num1,num2){
        var result;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        operator = input[1];
        if(operator == '+'){
            result = num1 + num2;
        }else if(operator == '-'){
            result = num1 - num2;
        }else if(operator == 'x'){
            result = num1 * num2;
        }else if(operator == '/'){
            result = num1 / num2;
        }
        console.log(result);
        return result;
    }

});





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