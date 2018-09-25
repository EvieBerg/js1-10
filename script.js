//write first method
function sleep_in(x,y) {
    if (x == true && y == false) {
        return y;
    }
    if (x == false && y == false) {
        return true;
    }
    if (x == false && y == true) {
        return y;
    }
    if (x == true && y == true) {
        return y;
    }
}

function monkey_trouble(x,y) {
    if (x == true && y == true) {
        return true;
    }
    if (x == false && y == false) {
        return true;
    }
    if (x == false && y == true) {
        return false;
    }
    if (x == true && y == false) {
        return false;
    }
}
function string_times(let, n){
    var sum = ""
    for(var i = 0; i < n; i++){
        sum = sum + let;
    }
    return(sum);
}

function front_times(let, n){
    var sum = ""
    var three = let;
    var real = three.substring(0,3);
    for(var i = 0; i < n; i++){
        sum = sum + real;
    }
    return(sum);
}


function string_bits(let){
    var sum = ""
    var three = let;
    var num = let.length;
    for(var i = 0; i < num; i++){
        var real = three.substring(0+2*i,1+2*i);
        sum = sum + real;
    }
    return(sum);
}


function caught_speeding(speed, birthday){

    if(birthday == true){
        speed = speed - 5;
    }
    if(speed <= 60){
        speed = 0;
    }
    if(speed > 60 && speed <= 80){
        speed = 1;
    }
    if(speed >= 81){
        speed = 2;
    }
    return speed;
}


function fizz_buzz(int) {
    var num = int +"!";

    if (int % 3 == 0 && int % 5 == 0) {
        int = "FizzBuzz";
        return int;
    }else{
        if (int % 3 == 0) {
            int = "Fizz";
            return int;
        }else{
            if (int % 5 == 0) {
                int = "Buzz";
                return int;
            }else{
                return num;
            }
        }
    }
}



function teaParty(x,y){
    if(x < 5 || y < 5){
        return 0;
    }

    if(x >= y*2||y >= x*2){
        return 2;
    }

    if(x >= 5 && y >= 5){
        return 1;
    }
}

function blackjack(x,y){
    if(x>21 && y > 21){
        return 0;
    }
    if(x>21){
        return y;
    }
    if(y>21){
        return x;
    }
    if (21 - x < 21 - y){
        return x;
    }
    if (21 - x > 21 - y){
        return y;
    }
}


function loneSum(a,b,c){
    sum = a + b + c;
    if(a == b){
        sum = sum - 2*a;
    }
    if(a == c){
        sum = sum - 2*a;
    }
    if(c == b){
        sum = sum - 2*b;
    }
    if(c == b && b == a){
        sum = 0;
    }
    return sum;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

function monkeyTrouble(x) {

    return x;

}




//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false) + "<br>";
    document.getElementById("output").innerHTML += nextOne(true, false) + "<br>";
    document.getElementById("output").innerHTML += monkeyTrouble(true) + "<br>";
    //test third method, etc
}
