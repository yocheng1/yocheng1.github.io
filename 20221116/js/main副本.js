//當按件是add時,數值增加，當按件是minus,數值減少
$('.count-btn').click(function(){
    //.attr()=>屬性，點擊時判斷data是什麼
    var btnType=$(this).attr('data');
    //以input取值，以方便運算 parseInt把值變為 '數值'（可運算）
    var inputVal=$('#addresult').val();
    //if點下去的按件data="add"=>數值+1
    if(btnType=="add"){
        // input id="addresult"的value要加1
        $('#addresult').val(parseInt(inputVal)+1);
    }
    else if(btnType=="minus"){
        $('#addresult').val(parseInt(inputVal)-1);
    }
})

//array(陣列)通常用中括號
var newArray=['基隆市' ,'台北市' , '新竹市'];
console.log(newArray)