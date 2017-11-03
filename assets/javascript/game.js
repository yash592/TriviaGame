
// Make an array of answers? 
// give each answer an attribute and compare correctChoice to that attribute.


$(document).ready(function () {

var questions = [

{
   	question1: "What is the capital of Iceland?",
	choices: ["Reykjavik", "Bristol", "Dusseldorf", "Addis Ababa"],
	correctchoice: "Reykjavik"
},

{
	question2: "What is the capital of India?",
	choices: ["Mumbai", "Abuja", "Delhi", "Addis Ababa"],
	correctchoice: "Delhi"
},

{
	question3: "What is the capital of America?",
	choices: ["Reykjavik", "Washington DC", "Dusseldorf", "Addis Ababa"],
	correctchoice: "Washington DC"
},

{
	question4: "What is the capital of Germany?",
	choices: ["Reykjavik", "Bristol", "Berlin", "Addis Ababa"],
	correctchoice: "Berlin"
},

{
	question5: "What is the capital of Ethiopia?",
	choices: ["Reykjavik", "Bristol", "Dusseldorf", "Addis Ababa"],
	correctchoice: "Addis Ababa"
},


];




var score = 0;
var counter = 50;





$("#questionone").text(questions[0].question1);
$("#onechoiceone").text(questions[0].choices[0]).attr("data-q", 0);
$("#onechoicetwo").text(questions[0].choices[1]).attr("data-q", 0);
$("#onechoicethree").text(questions[0].choices[2]).attr("data-q", 0);
$("#onechoicefour").text(questions[0].choices[3]).attr("data-q", 0);

$("#questiontwo").text(questions[1].question2);
$("#twochoiceone").text(questions[1].choices[0]).attr("data-q", 1);
$("#twochoicetwo").text(questions[1].choices[1]).attr("data-q", 1);
$("#twochoicethree").text(questions[1].choices[2]).attr("data-q", 1);
$("#twochoicefour").text(questions[1].choices[3]).attr("data-q", 1);

$("#questionthree").text(questions[2].question3).attr("data-q", 2);
$("#threechoiceone").text(questions[2].choices[0]).attr("data-q", 2);
$("#threechoicetwo").text(questions[2].choices[1]).attr("data-q", 2);
$("#threechoicethree").text(questions[2].choices[2]).attr("data-q", 2);
$("#threechoicefour").text(questions[2].choices[3]).attr("data-q", 2);

$("#questionfour").text(questions[3].question4).attr("data-q", 3);
$("#fourchoiceone").text(questions[3].choices[0]).attr("data-q", 3);
$("#fourchoicetwo").text(questions[3].choices[1]).attr("data-q", 3);
$("#fourchoicethree").text(questions[3].choices[2]).attr("data-q", 3);
$("#fourchoicefour").text(questions[3].choices[3]).attr("data-q", 3);

$("#questionfive").text(questions[4].question5).attr("data-q", 4);
$("#fivechoiceone").text(questions[4].choices[0]).attr("data-q", 4);
$("#fivechoicetwo").text(questions[4].choices[1]).attr("data-q", 4);
$("#fivechoicethree").text(questions[4].choices[2]).attr("data-q", 4);
$("#fivechoicefour").text(questions[4].choices[3]).attr("data-q", 4);


    function starttimer() {
    	intervalID = setInterval(decrease, 1000);
    };

    function decrease () {
    	counter--;
    	$(".timer").text(counter);

    	if (counter ===0) {
    		stoptimer();
    		alert("Game over!")
    		counter = 50;
    	}
    }

    function stoptimer () {
    	clearInterval(intervalID);
    	counter = 50;
    };

    $("#start").on("click", function(){
    	starttimer();
    	$(".timer").text(counter);
    	
    	
    })


	$(".choice").on("click", function (){
		if (($(this).text()) == (questions[$(this).attr("data-q")].correctchoice)) {
			alert("Correct!");
			score++;

		}

		else{
			alert("Wrong!");

		}
			
	
		
		
	})

	});
		



// $("#onechoiceone").on("click", function() {
	
// 	if ($(this).text() === "Reykjavik") {
// 		alert("correct!");
		
// 		$("#questiontwo").css("display", "block");
// 		$(".answertwo").css("display", "block");
// 		$("#questionone").css("display", "none");
// 		$(".answerone").css("display", "none");
// 	}

// })

// 	$("#twochoicethree").on("click", function() {
	
	// if ($(this).text() === "Delhi") {
	// 	alert("correct!");
// 	}

// })

// $("#threechoicetwo").on("click", function() {
	
// 	if ($(this).text() === "Washington DC") {
// 		alert("correct!");
// 	}

// })


// $("#fourchoicethree").on("click", function() {
	
// 	if ($(this).text() === "Berlin") {
// 		alert("correct!");
// 	}

// })


// $("#fivechoicefour").on("click", function() {
	
// 	if ($(this).text() === "Addis Ababa") {
// 		alert("correct!");

// 	}

// })









