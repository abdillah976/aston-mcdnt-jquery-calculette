$(document).ready(function(){
    // var operations = [""];
    var val = "";
    var operation = null;
    $('.btn').on("click",function(){
        if(this.text != "="){
            val += this.text;
            $('#res').val(val);
        }else{
            val = eval(val);
            $('#res').val(val);
        }
        if(this.text == "C"){
            val = "";
            $('#res').val(val);
        }
    });



    // function btnAction(action){
    //     operation = action;
    //     if(tNb[0] == null){
    //         tNb[0] == $("#calculator-result").text();
    //     }
    //     if(){
    //         tNb[0] == ;
    //     }
    //     if(action == "addition") {
    //         $("#calculator-result").val(eval(tNb[0] + tNb[1]));
    //     }
    // }
});
