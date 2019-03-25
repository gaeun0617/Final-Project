function get_detail_info(t) {
	location.href = "detail.go";
	$.ajax({
		url : "detail.get",
		data:{ge_title:t},
		success: function(returnData) {
			var titleArea_1 = $("<div></div>").text(title);
//				var img_url = $(s).find("ge_image").text();
//				var img = $("<img>").attr("src",img_url).css("width","100%");
//				var imgArea = $("<div></div>").append(img);
//				
//				var start_date = $(s).find("ge_start_date").text();
//				var info_1 = $("<span></span>").text("시작일"+"\t"+start_date);
//				var end_date = $(s).find("ge_end_date").text();
//				var info_2 = $("<span></span>").text("종료일"+"\t"+end_date);
//				var addr = $(s).find("ge_addr").text();
//				var info_3 = $("<span></span>").text("주소"+"\t"+addr);
//				var infoArea = $("<div></div>").append(info_1,info_2,info_3);
//				
//				var titleArea_2 = $("<div>지도</div>");
//				var latitude = $(s).find("ge_map_y").text();
//				var longitude = $(s).find("ge_map_x").text();
//				var container = document.getElementById('map');
//				var options = { // 지도를 생성할 때 필요한 기본 옵션
//						center : new daum.maps.LatLng(latitude, longitude), // 지도의 중심좌표.
//						level : 3
//						// 지도의 레벨(확대, 축소 정도)
//				};
//				var map = new daum.maps.Map(container, options); // 지도 생성 및 객체 리턴
//				var mapArea = $("<div id='map'></div>").css("width","400px").css("height","300px");
				$("#detail_info").append(titleArea_1);
		}
	});
}
