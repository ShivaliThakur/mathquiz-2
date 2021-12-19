player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";

player1_score= 0;
player2_score= 10;

document.getElementById("player1_score").innerHTML= player1_score ;
document.getElementById("player2_score").innerHTML= player2_score ;

document.getElementById("player_question").innerHTML= "Question Turn:" + player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn:" + player2_name;

function send(){
    num1= document.getElementById("n1").value;
    num2= document.getElementById("n2").value;
    correct_ans= num1 * num2;
    msg="<h3> Q: " + num1+"X" +num2 + "</h3>";
    i= "<input type='number' placeholder='Enter Your Answer Here' id='User's_Answer'> <br><br>";
    button= "<button onclick='check()' class='btn btn-warning'> Check </button>";
    row= msg + i + button;
    document.getElementById("output").innerHTML= row;
}

