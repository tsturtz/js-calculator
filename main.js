var my_calculator = new calculator(display_function);

/*type will be a string equal to one of the following: itemAdded, calculated, error*/
function display_function(type,value,item){
    switch (value){
        case undefined:
            $('.calc-display').text('');
            break;
        default:
            $('.calc-display').text(value);
            break;
    }
    console.log('display_function called');
}

$(document).ready(function(){
    $('.btn-lg').click(function(){
        var val = $(this).text();
        switch (val) {
            case 'CE':
                my_calculator.allClear();
                break;
            case 'C':
                my_calculator.clear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
});