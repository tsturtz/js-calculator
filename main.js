var input_array = [''];
var input_index = 0;

$(document).ready(function(){
    $('.operand').click(function(){
        input_array[input_index] += $(this).text();
        console.log('input array: ', input_array);
        $('.calc-display').append($(this).text());
    });
    $('.operator').click(function(){
        input_index++;
        input_array[input_index] = $(this).text();
        console.log('input array: ', input_array);
        input_index++;
        input_array[input_index] = '';
        $('.calc-display').text('');
    });
    $('.equals').click(function(){
        console.log(input_array);
        $('.calc-display').text('');
        $('.calc-display').append(do_math(input_array[0],input_array[2]));
    });
    $('.clear').click(function(){
        $('.calc-display').text('');
        input_array = [''];
        input_index = 0;
        console.log(input_array);
    });
    $('.clear_entry').click(function(){

    });
});

function do_math(num1,num2){
    var result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    operator = input_array[1];
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*' || operator == 'x' || operator == 'X'){
        result = num1 * num2;
    }else if(operator == '/'){
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
 input_array[input_index] += obj;
 input_index++;
 console.log(input_array);
 }else if(input == '='){
 console.log('equalSign');
 obj.type = 'equalSign';
 obj.value = input;
 input_array[input_index] += obj;
 input_index++;
 console.log(input_array);
 }else if(input >= 0 || input <= 9 || input == '.'){
 console.log('number');
 obj.type = 'number';
 obj.value = input;
 input_array[input_index] += obj;
 console.log(input_array);
 }else if(input == 'C'){
 console.log('clear');
 }else if(input == 'CE'){
 console.log('clear entry')
 }
 console.log(obj);*/