function calendar_init() {
	$("body").css('max-height','100%').css('overflow','hidden');
	$(".contentBody").css('height','100%').css('overflow','none');
	$(".contentMargin").css('max-height','100%').css({'overflow':'none','flex-direction':'unset', 'text-align':'unset'});
	$("#dialog_field").hide();
	var width = $(window).width();
	var flag = 0;
	if(width < 769){
		flag = 1;
	}
	click_calendar_date();
	make_date(flag);
	dialog_click_event();
	get_festivalTitle();		
}
function click_calendar_date() {
	$(document).on("click touchend", ".current", function(){
		dialog_paint(1);
		make_select();
	});
}
function dialog_paint(flag) {
	if (flag == 1) {
		$("#dialog_field").show().css("background-color","#FAFAFA");
		$(".contentBody").css("background-color","#9E9E9E");
		$("#calendar").css("background-color","#9E9E9E");
		$("#dates").css("background-color","#9E9E9E");
		$(".week_character").css("background-color","#9E9E9E");
		$(".date_div").css("background-color","#9E9E9E");
		
	} else if (flag == 2) {
		$("#dialog_field").hide();
		$(".contentBody").css("background-color","#FFFFFF");
		$("#calendar").css("background-color","#FFFFFF");
		$("#dates").css("background-color","#FFFFFF");
		$(".week_character").css("background-color","#FFFFFF");
		$(".date_div").css("background-color","#FFFFFF");
	}
}
function make_select() {
	$("#select_want_year").empty();
	$("#select_want_month").empty();
	var d = new Date();
	var cur_year = d.getFullYear();
	var cur_month = d.getMonth() + 1;
	for (var i = 0; i < 2; i++) {
		var option = $("<option value='" + (cur_year + i) + "'></option>")
				.text(cur_year + i);
		$("#select_want_year").append(option);
	}
	for (var i = 1; i < 13; i++) {
		if (i != cur_month) {
			var option = $("<option value='" + i + "'></option>").text(i);
		} else {
			var option = $(
					"<option value='" + i + "' selected='selected'></option>")
					.text(i);
		}
		$("#select_want_month").append(option);
	}
}
function dialog_click_event() {
	$("#ok_btn_inDialog").click(function() {
		var year = $("#select_want_year").val()
		var month = $("#select_want_month").val()
		make_date(0, year, month);
		dialog_paint(2)
	});
	$("#cancel_btn_inDialog").click(function() {
		dialog_paint(2)
	});
}
function make_date(flag, y, m) {

	var d = new Date();
	var cur_year;
	var cur_month;
	var dates;

	if (y == null) {
		cur_year = d.getFullYear();
	} else {
		cur_year = y;
	}
	if (m == null) {
		cur_month = d.getMonth() + 1;
	} else {
		cur_month = m;
	}
	if (cur_month == 2) {
		dates = isLeap(cur_year);
	} else {
		dates = check_month(cur_month);
	}
	if(flag == 1){
		showCalendarMoblie(cur_year, cur_month, dates);
	}else{		
		show_calendar(cur_year, cur_month, dates);
	}
}
// 윤년 체크
function isLeap(y) {
	var m = 28;
	// 윤년이 4년에 한번 && 100년말고 ||400년
	if (y % 4 == 0 && y % 100 == 0 || y % 400 == 0) {
		m = 29;
	}
	return m;
}
// 홀수가 31 짝수가 30
function check_month(m) {
	var d = 31;
	if (m < 8) {
		if (m % 2 == 0) {
			d = 30;
		}
	} else if (m >= 8) {
		if (m % 2 == 1) {
			d = 30;
		}
	}
	return d;
}
function show_calendar(y, m, d) {

	$("#date").text(y + "." + m + "월");

	var events = send_controller(y, m);
	var temp = '';
	
	var flag = false;
	
	var ld = last_day(y, m, d);
	var day = ld[0] + 1;

	if (day == 7) {
		day = 0;
	}

	var start = 1
	$("#dates").empty();

	var week_character = $("<div class='week_character'></div>");

	for(var i = 0; i < 7; i++){
		switch (i) {
			case 0:
				var td = $("<span class='day_of_the_week'></span>").text('SUN').css('color', 'red');
				break;
			case 1:
				var td = $("<span class='day_of_the_week'></span>").text('MON').css("color","#3d3d3d");
				break;
			case 2:
				var td = $("<span class='day_of_the_week'></span>").text('TUE').css("color","#3d3d3d");
				break;
			case 3:
				var td = $("<span class='day_of_the_week'></span>").text('WEN').css("color","#3d3d3d");
				break;
			case 4:
				var td = $("<span class='day_of_the_week'></span>").text('THU').css("color","#3d3d3d");
				break;
			case 5:
				var td = $("<span class='day_of_the_week'></span>").text('FIR').css("color","#3d3d3d");
				break;
			case 6:
				var td = $("<span class='day_of_the_week'></span>").text('SAT').css('color', '#000374');
				break;
		}
		week_character.append(td);
	}
	$("#dates").append(week_character);
	
	var monthField = $("<div id='monthField'></div>");
	
	for(var i = 0; i < 5; i++){
		var week_record = $("<div class='week_record'></div>");
		
		for(var j = 0; j < 7; j++){
			if(i == 0){
				if(day == j || day < j){
					if(day == 0){
						day = 7;
						start = ld[1] - (day - j) + 1;
						var date_number = $("<span class='date_number'></span>").text(start).css("color","#9E9E9E");
						var date_div = $("<div class='date_div'></span>").append(date_number);
					}else{
						if(start > 10){
							start = 1;	
						}
						if(j == 0){
							var date_number = $("<span class='date_number'></span>").text(start).css("color","red");
						}else if(j == 6){
							var date_number = $("<span class='date_number'></span>").text(start).css("color","#000374");							
						}else{
							var date_number = $("<span class='date_number'></span>").text(start);														
						}
						var date_div = $("<div class='date_div'></span>").append(date_number);
						
						temp = temp_date(y,m,start);
						var div = $("<div class='title_div'></div>");
						
						$.each(events.events, function(i, e){
							if(e.ge_start_date == temp){
								var title = e.ge_title;
								titles = title.split(" ");
								title = '';
								for(var l = 0; l < (titles.length - 1); l++){
									if(titles[l].indexOf("2019") == -1){
										title += titles[l]+" ";
									}else{
										continue;
									}
								}
								var title_div = $("<span class='title_span'></span>").text(title);
								div.append(title_div);
								date_div.append(div);
							}
						});
					}	
					week_record.append(date_div);
					start += 1;
				}else{
					if(day > j){
						start = ld[1] - (day - j) + 1;
					}
					var date_number = $("<span class='date_number'></span>").text(start).css("color","#9E9E9E");
					var date_div = $("<div class='date_div'></span>").append(date_number);
					week_record.append(date_div);
				}
			}else{
				if(flag == false){			
					if(d < start){
						if(i == 1){
							start = 1;
							if(j == 0){
								var date_number = $("<span class='date_number'></span>").text(start).css("color","red");
							}else if(j == 6){
								var date_number = $("<span class='date_number'></span>").text(start).css("color","#000374");							
							}else{
								var date_number = $("<span class='date_number'></span>").text(start);														
							}
							var date_div = $("<div class='date_div'></span>").append(date_number);
						}else{
							start = 1;
							var date_number = $("<span class='date_number'></span>").text(start).css("color","#9E9E9E");
							var date_div = $("<div class='date_div'></span>").append(date_number);
							flag = true;
						}
					}else{
						if(j == 0){
							var date_number = $("<span class='date_number'></span>").text(start).css("color","red");
						}else if(j == 6){
							var date_number = $("<span class='date_number'></span>").text(start).css("color","#000374");							
						}else{
							var date_number = $("<span class='date_number'></span>").text(start);														
						}
						var date_div = $("<div class='date_div'></span>").append(date_number);
					}
					if(flag != true){
						temp = temp_date(y,m,start);
						var div = $("<div class='title_div'></div>");
						$.each(events.events, function(i, e){
							if(e.ge_start_date == temp){
								var title = e.ge_title;
								titles = title.split(" ");
								title = '';
								for(var l = 0; l < (titles.length - 1); l++){
									if(titles[l].indexOf("2019") == -1){
										title += titles[l]+" ";
									}else{
										continue;
									}
								}
								var title_div = $("<span class='title_span'></span>").text(title);
								div.append(title_div);
								date_div.append(div);
							}
						});
					}
					
				}else{
					var date_number = $("<span class='date_number'></span>").text(start).css("color","#9E9E9E");
					var date_div = $("<div class='date_div'></span>").append(date_number);
				}			
				week_record.append(date_div);
				start += 1;
			}
		}
		monthField.append(week_record);
	}
	$("#dates").append(monthField);
}
function showCalendarMoblie(y, m, d){
	$("#date").text(y + "." + m + "월");

	//이벤트 받아오기
	var events = send_controller(y, m);
	var temp = '';
	
	var flag = false;
	
	//전 달 마지막 날
	var ld = last_day(y, m, d);
	var day = ld[0] + 1;

	var lastDay = check_month(m);

	if (day == 7) {
		day = 0;
	}

	$("#dates").empty();
	
	for(var i = 1; i < (lastDay+1); i++){
		
		var dateField = $("<div class='dateField'></div>").css({'display':'grid','grid-template-columns':'20% 80%', 'height':'200px', 'border-bottom':'1px dashed #ccc'});
		var date = $("<div class='dateNum'></div>").text(i).css({'border-right':'1px dashed #ccc','text-align':'right', 'padding-top':'20px', 'padding-right':'20px', 'font-size':'18px'});			
		var titleDiv = $("<div class='titleDiv'></div>");
		temp = temp_date(y, m, i);
		$.each(events.events, function(i, e){
			if(e.ge_start_date == temp){
				var title = e.ge_title;
				titles = title.split(" ");
				title = '';
				for(var l = 0; l < (titles.length - 1); l++){
					if(titles[l].indexOf("2019") == -1){
						title += titles[l]+" ";
					}else{
						continue;
					}
				}
				var title_span = $("<span class='title_span'></span>").text(title);
				titleDiv.append(title_span).trigger("create");
			}
		});
		dateField.append(date, titleDiv);
		$("#dates").append(dateField).trigger("create");
	}
}

// 전 달 마지막 요일 확인
function last_day(y, m, d) {
	var year = y;
	var temp = m - 1;
	if (temp == 0) {
		year = year - 1;
		temp = 12;
	}
	var day = 0;
	if (temp == 2) {
		day = isLeap(y);
	} else {
		day = check_month(temp);
	}
	var lastDay = new Date(year + "-" + temp + "-" + day).getDay();
	var reval = [lastDay, day];
	return reval;
}

// 년도와 월을 컨트롤러로 보내기
function send_controller(y, m) {
	var year = y;
	var month = m;
	var eventJson = {};
	if (month < 10) {
		month = '0' + m;
	}
	var submit = year + '' + month;
	$.ajax({
		url : 'get.Event',
		data : {
			ge_start_date : submit
		},
		type : 'post',
		async : false,
		success : function(eventData) {
			eventJson = eventData;
		}
	});
	return eventJson;
}
function temp_date(y,m,start){
	var temp_m = '';
	var temp_d = '';
	var temp = '';
	
	if(m < 10){
		temp_m = "0"+m;
	}else{
		temp_m = m;
	}
	if(start < 10){
		temp_d = "0"+start;
	}else{
		temp_d = start;
	}
	
	temp = y+temp_m+temp_d;
	return temp;
}

// title클릭 시 상세페이지로
function get_festivalTitle(){
	$(document).on("click touchend", ".title_span", function(){
		var title = $(this).text();
		goDetail(title);
	});
}
