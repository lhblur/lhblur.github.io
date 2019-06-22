var num=0,result=0,numshow="0"; 
var operate=0; //判断输入状态的标志 
var calcul=0; //判断计算状态的标志 
var quit=0; //防止重复按键的标志 
function command(num){ 
var str=String(document.calculator.numScreen.value); //获得当前显示数据 
str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
str=str + String(num); //给当前值追加字符 
document.calculator.numScreen.value=str; //刷新显示 
operate=0; //重置输入状态 
quit=0; //重置防止重复按键的标志 
} 
function dzero(){ 
var str=String(document.calculator.numScreen.value); 
str=(str!="0") ? ((operate==0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
document.calculator.numScreen.value=str; 
operate=0; 
} 
function dot(){ 
var str=String(document.calculator.numScreen.value); 
str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
for(i=0; i