setInterval(time, 1000);

var year; var setdate; var thisYear;

//the clock
var time = new Date();
function time(){
	var hour, minute, second, realtime, colon;
	hour = time.getHours();
	minute = time.getMinutes();
	second =time.getSeconds()%2;
	colon =" ";
	if(second === 1){
		colon = ":";
	}
	if(hour>12){
		hour= hour-12;
	}
	else if (hour==0){
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
function setDate(add){//mark today
	var day = time.getDate();
	var mon = time.getMonth();
	var today = marking([day, mon]);
	year = parseInt(document.getElementById('year').value);
	if(thisYear===year)	{
		store = today;
		$(today).addClass('today')
		monthArrey =[".month.1",".month.2",".month.3",".month.4",".month.5",".month.6",".month.7",".month.8",".month.9",".month.10",".month.11",".month.12",]
		// $('html, body').animate({scrollTop : 2},800,
		// 	function(){
		// 		setTimeout(
		// 		function(){$('html, body').animate({scrollTop : $(monthArrey[mon]).position()['top']-180},800)},
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
	var now = time.getFullYear();
	var mon = time.getMonth();
	setdate = 35*mon; //setdate is for function setDate() for marking today 
	document.getElementById('year').value = now;
	thisYear = now;

	var mariking_days = [15, 14, 15, 14, 15, 15 ,16, 16, 16, 17, 16, 16]//Marking for bangla new month
	var seasons = [['shit','shit'],['shit','basanto'],['basanto','basanto'],['basanto','grisho'],['grisho','grisho'],['grisho','barsha'],['barsha','barsha'],['barsha','sarat'],['sarat','sarat'],['sarat','hamanto'],['hamanto','hamanto'],['hamanto','shit']];
	var mon = time.getMonth()
	var date = time.getDate()
	var season = seasons[mon][(date<mariking_days[mon]?0:1)]
	var img = ((Math.random()*10)>5?"2":"");
	$('.wallpapper>img').css('background-image', 'asset/'+season+img+'.png')
	$('.wallpapper>img').attr('src', 'asset/'+season+img+'.jpeg')

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
			 $('#d'+d+' .dateBangla').text('');
             d++;
            }
			
			for(let ids of holi_ids){
			   $(ids).removeClass('holiday')
				$(ids).removeAttr('tool-tip')
			}
			holi_ids = []
			Calender();
        }
    }


// searching the first day of first date of the year//
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
	
	document.getElementById('sal').innerHTML="<p>"+Year+"</p>";
	$('.Bangla-year.1').html(Year-594+" বং")
	$('.Bangla-year.2').html(Year-593+" বং")
	
	var se = weekDay+4
	januaryspace = se
	year = Year
	jan(se, Year);
	// var style = document.createElement('style');
	// style.innerText = '#d1::after {content:"1"}';
	// document.body.appendChild(style)
}

var januaryspace;
function Bangla_Arabi(){
	var forleapyear;
	var leapyear2;
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
	// বৈশাখ
	supBangla_Arabi(35*3, whiteSpace[3],   whiteSpace[4], 35*4, 14, 30, 31);//April
	// জৈষ্ঠ
	supBangla_Arabi(35*4, whiteSpace[4],   whiteSpace[5], 35*5, 15, 31, 31);//May
	//আষাঢ়
	supBangla_Arabi(35*5, whiteSpace[5],   whiteSpace[6], 35*6, 15, 30, 31);//june
	//শ্রাবণ
	supBangla_Arabi(35*6, whiteSpace[6],   whiteSpace[7], 35*7, 16, 31, 31);//jully
	//ভাদ্র
	supBangla_Arabi(35*7, whiteSpace[7],   whiteSpace[8], 35*8, 16, 31, 31);//August
	//আশ্বিন
	supBangla_Arabi(35*8, whiteSpace[8],   whiteSpace[9], 35*9, 16, 30, 31);//september
	//কার্তিক
	supBangla_Arabi(35*9, whiteSpace[9],   whiteSpace[10], 35*10, 17, 31, 30);//october
	//অগ্রহায়ণ
	supBangla_Arabi(35*10, whiteSpace[10], whiteSpace[11], 35*11, 16, 30, 30);//November
	//পোষ
	supBangla_Arabi(35*11, whiteSpace[11], whiteSpace[0], 35*0, 16, 31, 30);//December
	//মাঘ
	supBangla_Arabi(35*0, whiteSpace[0],   whiteSpace[1], 35*1, 15, 31, 30);//january
	//ফাল্গুন
	supBangla_Arabi(35*1, whiteSpace[1],   whiteSpace[2], 35*2, 14, 29-forleapyear, 30-forleapyear);//February
	//চৈত্র
	supBangla_Arabi(35*2, whiteSpace[2],   whiteSpace[3], 35*3, 15, 31, 30);//March

	var mariking_days = [15, 14, 15, 14, 15, 15 ,16, 16, 16, 17, 16, 16]//Marking for bangla new month
	for (var i=0; i<12; i++){
		var da = marking([mariking_days[i], i]);
		$(da+' .dateBangla').addClass("mark_bangla")
	}
}

function supBangla_Arabi(ce, space, space2, next_table, st, englen, len){
	if (space%7 != 0 && space>7){
		space = space%7;
	}else if(space%7 == 0  && space>7){space=7	}
	
	if (space2%7 != 0 && space2>7){
		space2 = space2%7;
	}else if(space2%7 == 0  && space2>7){space2=7}
	

	var da = ce + space-1 + st; // da for date cell
	var num = 1;      //num for date num
	var first_condition_exeed = false;
	for(var i =1;i<=len;i++){
		$('#d'+da+" .dateBangla").text(num);
		da++; num++;
		
		totalDate = ce+space+englen-1;
		var last_cell = totalDate - 35;
		
		if (totalDate>ce+35 && da=== ce+35+1){
			first_condition_exeed = true;
			da = ce+1;
		}else if(first_condition_exeed && da===last_cell+1){
			da= next_table+space2
		}
		else if(totalDate<=ce+35 && da===totalDate+1){
			da = next_table+space2
		}
	}
}

//start of main
//ce  = first cell index
//end = last cell index
//st  = from which cell will start
//len = how date is in this month
	

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
	if(thisYear==year && ce==setdate){
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
let holi_ids=[]
function dece(a){
	sup(385, 420, a, 31);
	Bangla_Arabi();
	var holy_days = [
		[21,1, "আন্তর্জতিক মাতৃভাষা দিবস ও শহীদ দিবস"],
		[17,2, "বঙ্গবন্ধু শেখ মজিবুর রহমানের জন্মদিন"],
		[26, 2, "স্বাধীনতা দিবস"] ,
		[14, 3, "বাংলা নববর্ষ"] , 
		[1, 4, "আন্তর্জতিক শ্রমিক দিবস"], 
		[4,4, "বৈদ্ধ পূর্ণিমা"],
		[15,7, "জাতীয় শোক দিবস"], 
		[6,8, "জন্মাষ্টমী"],
		[24,9, "বিজয়া দশমী"],
		[16,11, "বিজয় দিবস"],
		[25,11, "Christmas Day"]
	]
	
	for(var i=0; i<holy_days.length; i++){
		var holiday_cell_id = $( marking(holy_days[i]))
		holi_ids.push(holiday_cell_id)
		holiday_cell_id.addClass('holiday');
		holiday_cell_id.attr({'tool-tip': holy_days[i][2]});
		
	}
}




//marking Days if neccesary. Takes [date, month, text] .Returns the actual cell id related to date, month

function marking(date){
	var forleapyear;
	if (year%100 == 0){
		if (year%400 ==0){
			forleapyear=1
		}else{
			forleapyear=0
		}
	}
	else if(year%4 == 0){
		forleapyear=1
	}else{
		forleapyear=0
	}
	var whiteSpace =[
		januaryspace,
		januaryspace+3,
		januaryspace+3+forleapyear,
		januaryspace+3+forleapyear+3,
		januaryspace+3+forleapyear+3+2,
		januaryspace+3+forleapyear+3+2+3,
		januaryspace+3+forleapyear+3+2+3+2,
		januaryspace+3+forleapyear+3+2+3+2+3,
		januaryspace+3+forleapyear+3+2+3+2+3+3,
		januaryspace+3+forleapyear+3+2+3+2+3+3+2,
		januaryspace+3+forleapyear+3+2+3+2+3+3+2+3,
		januaryspace+3+forleapyear+3+2+3+2+3+3+2+3+2,
	];
	var eng_mon_length = [31,28+forleapyear,31,30,31,30,31,31,30,31,30,31]
	var day = date[0];
	var mon = date[1];

	if (whiteSpace[mon]%7 != 0 && whiteSpace[mon]>7){
		whiteSpace[mon] = whiteSpace[mon]%7;
	}else if(whiteSpace[mon]%7 == 0  && whiteSpace[mon]>7){whiteSpace[mon]=7}
	
	var first_ceel = 35*mon;
	var last_ceel  = first_ceel+35;
	var total_length = first_ceel+whiteSpace[mon]+eng_mon_length[mon]-1;
	
	da =(mon)*35 + whiteSpace[mon] +day-1;
	if ( da>last_ceel){
		return '#d'+ total_length-35;
	}else{
		return '#d'+ da;
	}
	

}



/*****************************************/
document.querySelector(".wallpapper img").addEventListener('load', e=>e.target.classList.add('loaded'))
