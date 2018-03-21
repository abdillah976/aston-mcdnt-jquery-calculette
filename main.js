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
});
