function get_details() {

	var para = document.location.href.split("?");
	para = decodeURI(para[1]);
	title = para.split("=");

	$.ajax({
		url : "detail.get",
		data : {
			ge_title : title[1]
		},
		success : function(returnData) {
			$(returnData).find("search").each(
					function(i, s) {
						var title = $(s).find("ge_title").text();
						$("#titleArea_1").text(title);
						var img_url = $(s).find("ge_image").text();
						var img = $("<img>").attr("src", img_url).css("max-width","100%");
						$("#imgArea").append(img);
						var overview = $(s).find("ge_overview").text();
						$("#overviewArea").html(overview);
						var start_date = $(s).find("ge_start_date").text();
						var start_date_span = $("<span></span>").text(start_date);
						var li_1 = $("<li>").append("<span>시작일</span>",start_date_span);
						var end_date = $(s).find("ge_end_date").text();
						var end_date_span = $("<span></span>").text(end_date);
						var li_2 = $("<li>").append("<span>종료일</span>",end_date_span);
						var addr = $(s).find("ge_addr").text();
						var addr_span = $("<span></span>").text(addr);
						var li_3 = $("<li>").append("<span>주소</span>",addr_span);
						$("#infoArea ul").append(li_1,li_2,li_3);
						
						var latitude = $(s).find("ge_map_y").text();
						var longitude = $(s).find("ge_map_x").text();
						var container = document.getElementById('map');
						var options = { // 지도를 생성할 때 필요한 기본 옵션
							center : new daum.maps.LatLng(latitude, longitude),// 지도의중심좌표.
							level : 5
						// 지도의 레벨(확대, 축소 정도)
						};
						
						var map = new daum.maps.Map(container, options); // 지도 생성 및 객체 리턴
						
						make_map_marker(map,latitude,longitude,addr);
					});
		}
	});
}

function make_map_marker(map,latitude,longitude,addr){
	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
		position : new daum.maps.LatLng(latitude, longitude),
		title : addr
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);
}

function map_geocoder(){
	// 주소-좌표 변환 객체를 생성합니다
	var geocoder = new daum.maps.services.Geocoder();
}












