//Đầu Viettel gồm có 086, 096, 097, 098, 032, 033, 034, 035, 036, 037, 038, 039.
function validatePhoneNumber(str){
    regexp=/((03[2-9]{1})|(09[6-8]{1})|086)([0-9]{7})/;
    if (regexp.test(str)){
        return true;
    }
    else {
        return false;
    }
}
function checkPhoneNumbers(arr) {
     arr=["0972773240","0702119920","0936755068","0396915296","0862773240","0962773240","0982773240","0322773240"];
    for (let i=0;i<arr.length;i++){
        if (validatePhoneNumber(arr[i])===true){
            console.log(arr[i]+" la so dien thoai viettel");
        }
        else{
            console.log(arr[i]+ " khong la so dien thoai viettel");
        }
    }
}
checkPhoneNumbers();



