// for(var i=1;i<=5;i++){
//     for(var j = i; j<=5;j++)
//     {

//         document.write(j);
//     }
//     document.write("<br>");
// }

// for(var a = 0; a<=5;a++)
// {
//     for(var b=0;b<=5;b++)
//     {
//         if((a%2)==0)

//             document.write("0");

//         else{
//             document.write("1");
//         }
//     }
//     document.write("<br>")
// }

// var year = 2023
// if ((0 == year % 4) && (0 != year % 100) || (0 == year%400))
// document.write("<br>",year,"is leap year");
// else{
//     document.write("<br>",year," is not leap year <br><br>")
// }

// var n1 = 50;
// var n2 = 40;
// var n3 = 30;

// if((n1>n2) && (n1>n3))
// {
//     if(n2>n3){
//         document.write(n1,n2,n3);
//     }
//     else{
//         document.write(n1,n3,n2);

//     }
// }
// else if((n2>n1) && (n2>n3)){
//     {
//         if(n1>n3){

//             document.write(n2,n1,n3);
//         }
//         else{
//             document.write(n2,n3,n1);
//         }
//     }
// }
// else if((n3>n1)&&(n3>n2)){
//     if(n1>n2){
//         document.write(n3,n1,n2)
//     }
//     else{
//         document.write(n3,n2,n1)

//     }
// }
// else{
//     console.log("idont know")
// }

// var num = 2;
// if(num%2 == 0)
// {
//     document.write("<br>number ",num ," is Even");
// }
// else{
//     document.write("<br>number ",num ," is odd");

// }

for(var i = 1 ; i<=5;i++){
    for(var j=1;j<=6;j++){
        if(j%2==0){
            document.write(i," ")
        }
        else if(j==3){
            document.write("2 ")
        }
        else if(j==5){
            document.write("3 ")
        }
        else{
            document.write(j ," ")
        }
    }
    document.write("<br>")
}
document.write("<br><br>")

for(var i=1;i<=5;i++){
    for(var j=1;j<=5;j++){
        document.write(i*j," ");
    }
    document.write("<br>");
}

document.write("<br><br>")

for(var i=3;i<=7;i++){
    for(var j=i;j<=7;j++){
        document.write("*")
    }
    document.write("<br>")
}

document.write("<br><br>")

for (var i = 3; i <= 7; i++) {
  for (var j = 7; j >= i; j--) {
        document.write(i," ",j-2," ")
  }
  document.write("<br>");
}


