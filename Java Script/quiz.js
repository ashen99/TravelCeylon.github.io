var question001 = ['Sri Jayawardanapura Kotte is the legislative capital city of Sri Lanka',
            'There are 24 districts in Sri Lanka',
			'Pidurutalagala is the tallest mountain in Sri Lanka',
            'Euro is the currency of Sri Lanka',
            'Sri Lanka is surrounded by the Adriatic Sea',
            'Bambarakanda is the tallest waterfall in Sri Lanka',
            'There are 9 province in Sri Lanka',
			'There are 24 airports in Sri Lanka',
			'Cricket is the most famous sport in Sri Lanka',
            'Sri Lanka did not gain their independence from India',
        ];

        var options001 = ["<button class=buttons001 onclick=q1i()>False</button><br /><br /><button class=buttons001 onclick=q1c()>True</button>"];
        var options002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
        var options003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>False</button><br /><br /><button class=buttons001 onclick=q5i()>True</button>"];
        var options006 = ["<button class=buttons001 onclick=q6i()>False</button><br /><br /><button class=buttons001 onclick=q6c()>True</button>"];
        var options007 = ["<button class=buttons001 onclick=q7c()>True</button><br /><br /><button class=buttons001 onclick=q7i()>False</button>"];
        var options008 = ["<button class=buttons001 onclick=q8c()>False</button><br /><br /><button class=buttons001 onclick=q8i()>True</button>"];
        var options009 = ["<button class=buttons001 onclick=q9c()>True</button><br /><br /><button class=buttons001 onclick=q9i()>False</button>"];
        var options010 = ["<button class=buttons001 onclick=q10i()>False</button><br /><br /><button class=buttons001 onclick=q10c()>True</button>"];

        var a = 0;
        a++;
        var b = 0;
    
		var data=[];
        function begin001() {
            c = 7;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
			
        }

        function q1c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML ="Correct. "; 
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[0]='Q1. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q1i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML ="Incorrect. "; 
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[0]='Q1. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q2c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[1]='Q2. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q2i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. There are 25 districts in Sri Lanka";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[1]='Q2. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q3c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[2]='Q3. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q3i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[2]='Q3. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q4c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[3]='Q4. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q4i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. Rupee is the currency of sri lanka ";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[3]='Q4. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q5c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. Sri Lanka is surrounded by the Indian Ocean";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[4]='Q5. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q5i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[4]='Q5. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q6c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[5]='Q6. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q6i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. Bambarakanda is the tallest waterfall in srilanka";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[5]='Q6. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q7c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[6]='Q7. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q7i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[6]='Q7. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q8c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. There are 2 airports in Sri Lanka ";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[7]='Q8. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q8i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[7]='Q8. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q9c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[8]='Q9. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q9i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[8]='Q9. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q10c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. Sri Lanka gain their independence from United Kingdom";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[9]='Q10. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q10i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. ";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[9]='Q10. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function next001() {
            if (a == "2") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "3") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "4") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "5") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "6") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "7") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "8") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "9") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "10") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "#FFF8DC";
            } else {
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Play Again</button>";
				message005.innerHTML=data[0];
				message006.innerHTML=data[1];
				message007.innerHTML=data[2];
				message008.innerHTML=data[3];
				message009.innerHTML=data[4];
				message010.innerHTML=data[5];
				message011.innerHTML=data[6];
				message012.innerHTML=data[7];
				message013.innerHTML=data[8];
				message014.innerHTML=data[9];
			
			if(score001.innerHTML<10){
				document.getElementById("frame001").style.backgroundColor = "#DC143C";
				document.getElementById("frame001").style.height='575px';
			
			}
			else if(score001.innerHTML>10){
				document.getElementById("frame001").style.backgroundColor = "#32CD32";
				document.getElementById("frame001").style.height='575px';
			
			}
			
            }
			
        }

        function timer001() {
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }

            if (c < 1) {
                window.clearInterval(update);
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
        }

        update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }
    