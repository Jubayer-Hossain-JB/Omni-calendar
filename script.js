setInterval(time, 1000);

//the clock
function time(){
	var time = new Date();
	var hour, minute, second, realtime, colon;
	hour = time.getHours();
	minute = time.getMinutes();
	second =time.getSeconds()%2;
	colon =" ";
	if(second === 1){
		colon = ":";
	}
	if(hour>12){
		hour= hour-12;
	}
	if (hour===0){
		hour=12;
	}
	if(hour<10){
		hour= '0'+hour;
	}
	

	if(minute<10){
		minute= '0'+minute;
	}
	realtime = hour + colon + minute;
	document.getElementById('time').innerHTML=realtime;
}
// End of clock function

var store = 0;
function setDate(add){
	var time = new Date();
	var day = time.getDate();
	var mon = time.getMonth();
	var today = 'd'+(add+35*mon+day-1);
	var year = parseInt(document.getElementById('year').value);
	if(thisYear===year)	{
		store = today;
		$('#'+today).addClass('today')
		monthArrey =[".month.1",".month.2",".month.3",".month.4",".month.5",".month.6",".month.7",".month.8",".month.9",".month.10",".month.11",".month.12",]
		// $('html, body').animate({scrollTop : 5},800,
		// 	function(){
		// 		setTimeout(
		// 		function(){$('html, body').animate({scrollTop : $(monthArrey[mon]).position()['top']-150},800)},
		// 		3500
		// 	)}
		// )
	}else{
		document.getElementById(store).style.setProperty('background','#B2FFFE');
		document.getElementById(store).style.setProperty('color','grey');
	}	
}


//set the year of now
function thisTime() {
    var time = new Date();
	var now = time.getFullYear();
	var mon = time.getMonth();
	setdate = 35*mon; //setdate is for function setDate() for marking today 
	document.getElementById('year').value = now;
	thisYear = now;
    Calender();
}

//erase dates when year changes
/*
detals the of function erase()
d is the number of cell
সেল হচ্ছে সংখ্যা বসার ঘর
first d =1
and it is in loop
so 1-7 cell is being deleted first
by document.getElementById('d'+d).innerHTML = ''
we have to delete fisrt 7 cells number and last 7 cell number in every month group.
*/
function erase() {
    var year = document.getElementById('year').value;
    if(year !="" && year != isNaN){
        var d =1;
        for(var i = 0; i<169; i++){
            switch(d){
                case 8: d=29;
                    break;
                case 43: d=64;
                    break;
                case 78: d=98;
                    break;
                case 113: d=134;
                    break;
                case 148: d=169;
                    break;
                case 183: d=204;
                    break;
                case 218: d=239;
                    break;
                case 253: d=274;
                    break;
                case 288: d=309;
                    break;
                case 323: d=344;
                    break;
                case 358: d=379;
                    break;
                case 393: d=414;
                    break;
            }
			 $('#d'+d+' .dateEnglish').text('');
             d++;
            }
							
         Calender();
        }
    }

function Calender(){
	var Year = parseInt(document.getElementById('year').value);
	var MinusLeapYear = Math.floor(((Year-1)/400*4)-Math.floor((Year-1)/400)); //This MunusLeapyear for indentify the year when it shoud not count as leapyear though nurmally count
	
	var weekFlow = Math.floor((Year-1)*1.25)-MinusLeapYear;
	var weekDay;
	if(Year >= 8 ){
		var weekDayPlus = weekFlow%7;
		if(weekDayPlus !== 0){
			weekDay = weekDayPlus-1; //Munus 1 for convert into arrey index
		}else{
			weekDay = 6;
		}
		
	}else{
		weekDay = weekFlow;		
	}
	var DayArr = ["Tue","Wed","Thu","Fri","Sat","Sun","Mon"];
	var Day = DayArr[weekDay];
	
	document.getElementById('sal').innerHTML=Year;
	
	var se = weekDay+4
	januaryspace = se
	year = Year
	jan(se, Year);
	// var style = document.createElement('style');
	// style.innerText = '#d1::after {content:"1"}';
	// document.body.appendChild(style)
}
var januaryspace;
var year;
function Bangla_Arabi(){
	var forleapyear;
	if (year%100 == 0){
		if (year%400 ==0){
			forleapyear=0
		}else{
			forleapyear=1
		}
	}
	else if(year%4 == 0){
		forleapyear=0
	}else{
		forleapyear=1
	}
	var whiteSpace =[
		januaryspace,
		januaryspace+3,
		januaryspace+3+1-forleapyear,
		januaryspace+3+1-forleapyear+3,
		januaryspace+3+1-forleapyear+3+2,
		januaryspace+3+1-forleapyear+3+2+3,
		januaryspace+3+1-forleapyear+3+2+3+2,
		januaryspace+3+1-forleapyear+3+2+3+2+3,
		januaryspace+3+1-forleapyear+3+2+3+2+3+3,
		januaryspace+3+1-forleapyear+3+2+3+2+3+3+2,
		januaryspace+3+1-forleapyear+3+2+3+2+3+3+2+3,
		januaryspace+3+1-forleapyear+3+2+3+2+3+3+2+3+2,
	];//28=0; 29=1; 30=2; 31=3
	console.log(35*11+whiteSpace[11]%7+30-35*12)
	// বৈশাখ
	supBangla_Arabi(35*3, whiteSpace[3],   whiteSpace[4], 35*4, 14, 30, 31);//April
	// জৈষ্ঠ
	supBangla_Arabi(35*4, whiteSpace[4],   whiteSpace[5], 35*5, 15, 31, 31);//May
	//আষাঢ়
	// supBangla_Arabi(35*5, whiteSpace[5],   whiteSpace[6], 35*6, 15, 30, 31);//june
	//শ্রাবণ
	supBangla_Arabi(35*6, whiteSpace[6],   whiteSpace[7], 35*7, 16, 31, 31);//jully
	//ভাদ্র
	supBangla_Arabi(35*7, whiteSpace[7],   whiteSpace[8], 35*8, 16, 31, 31);//August
	//আশ্বিন
	supBangla_Arabi(35*8, whiteSpace[8],   whiteSpace[9], 35*9, 17, 30, 30);//september
	//কার্তিক
	supBangla_Arabi(35*9, whiteSpace[9],   whiteSpace[10], 35*10, 17, 31, 30);//october
	//অগ্রহায়ণ
	supBangla_Arabi(35*10, whiteSpace[10], whiteSpace[11], 35*11, 16, 30, 30);//November
	//পোষ
	supBangla_Arabi(35*11, whiteSpace[11], whiteSpace[0], 35*0, 16, 31, 30);//December
	//মাঘ
	supBangla_Arabi(35*0, whiteSpace[0],   whiteSpace[1], 35*1, 15, 31, 30);//january
	//ফাল্গুন
	supBangla_Arabi(35*1, whiteSpace[1],   whiteSpace[2], 35*2, 14, 29-forleapyear, 30);//February
	//চৈত্র
	supBangla_Arabi(35*2, whiteSpace[2],   whiteSpace[3], 35*3, 15+forleapyear, 31, 30);//March

}

function supBangla_Arabi(ce, space, space2, end, st, enddate, len){
	if (space>7){
		space = space%7;
	}
	var da = ce + space-1 + st; // da for date cell
	var num = 1;      //num for date num
	for(var i =1;i<=len;i++){
		$('#d'+da+" .dateBangla").text(num);
		da++; num++;
		
		totalDate = ce+space+enddate-1
		if (totalDate>end && (da == end+1 || (da>end && da<=end+1))){
			da = ce+1			
			console.log(da)
		}
		// console.log(totalDate-end+"\n"+da);
		if ((totalDate-end)==da-1){
			da = end+space2%7
		}else if(totalDate+1 == da){
			da = end+space2%7
		}
	}
}

//start of main
//ce  = first cell index
//end = last cell index
//st  = from which cell will start
//len = how date is in this month
	
var setdate; var thisYear;
function sup(ce, end, st, len){
	if(st>7){                  
		if(st>28){             
			st-=28;            
		}
		else if(st>21){
			st-=21;
		}
		else if(st>14){
		st-=14;
		}else{
		st-=7;
		}
	}
	var da = ce + st;
	var num = 1;
	for(var i =1;i<=len;i++){
		$('#d'+da+' .dateEnglish').text(num);
		da++; num++;
		if(da>end){
			da-=(end-ce);
		}
			
	}

	//for show date
	if(ce===setdate){
		setDate(st);
	}
		
}
	
function jan(index, yr){
	var pass = index;
	sup(0, 35, pass, 31);
	
	feb(pass+3, yr);
}

function feb(a, yr){
	var len =28;
	var send = a;
	if (yr%100 == 0){
		if (yr%400 ==0){
			len = 29;
			send = a+1;
		}
	}
	else if((yr%4)== 0){
		len = 29;
		send = a+1;
	}
	sup(35, 70, a, len);
	mar(send);
}

function mar(a){
	sup(70, 105, a, 31);
	april(a+3);
}
function april(a){
	sup(105, 140, a, 30);
	may(a+2);
}
function may(a){
	sup(140, 175, a, 31);
	jun(a+3);
}
function jun(a){
	sup(175, 210, a, 30);
	july(a+2);
}
function july(a){
	sup(210, 245, a, 31);
	augu(a+3);
}
function augu(a){
	sup(245, 280, a, 31);
	sep(a+3);
}
function sep(a){
	sup(280, 315, a, 30);
	oct(a+2);
}
function oct(a){
	sup(315, 350, a, 31);
	nov(a+3);
}
function nov(a){
	sup(350, 385, a, 30);
	dece(a+2);
}
function dece(a){
	sup(385, 420, a, 31);
	// Bangla_Arabi()
}