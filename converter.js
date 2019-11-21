function convertToBinary (number){
    let result="";
    do{
        result=number%2 + result  ;
        number=Math.floor(number/2);
       
    }
    while(number!==0);
    return result;
    //console.log(result);
}



function convertToHexa (number){
    let result="";
    do{
        let remainder=number%16;
        switch(remainder){
            case 0:
            result=0+result;
            break;
            case 1:
            result=1+result;
            break;
            case 2:
            result=2+result;
            break;
            case 3:
            result=3+result;
            break;
            case 4:
            result=4+result;
            break;
            case 5:
            result=5+result;
            break;
            case 6:
            result=6+result;
            break;
            case 7:
            result=7+result;
            break;
            case 8:
            result=8+result;
            break;
            case 9:
            result=9+result;
            break;
            case 10:
            result="A"+result;
            break;
            case 11:
            result="B"+result;
            break;
            case 12:
            result="C"+result;
            break;
            case 13:
            result="D"+result;
            break;
            case 14:
            result="E"+result;
            break;
            case 15:
            result="F"+result;
            break; 
}
number=Math.floor(number/16);
}
while(number!==0);
return result;
}
module.exports={
    convertToBinary,
    convertToHexa,

}