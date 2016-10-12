$(document).ready(function(){
    apply_click_handlers();
});

//click handlers
function apply_click_handlers(){
    console.log('click handlers called');
    $('.btn_c').click(display_function);
    $('.btn_ce').click(display_function);
    $('.btn_0').click(display_function);
    $('.btn_1').click(display_function);
    $('.btn_2').click(display_function);
    $('.btn_3').click(display_function);
    $('.btn_4').click(display_function);
    $('.btn_5').click(display_function);
    $('.btn_6').click(display_function);
    $('.btn_7').click(display_function);
    $('.btn_8').click(display_function);
    $('.btn_9').click(display_function);
    $('.btn_dot').click(display_function);
    $('.btn_equals').click(display_function);
    $('.btn_plus').click(display_function);
    $('.btn_minus').click(display_function);
    $('.btn_multiply').click(display_function);
    $('.btn_divide').click(display_function);
}

var my_calculator = new calculator(display_function);

/*type will be a string equal to one of the following:
* itemAdded, calculated, error*/
function display_function(type,value,item){
    var val = '';
    $('.calc-display').text(value);
    console.log('display_function called');
}