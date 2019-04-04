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
						var img = $("<img>").attr("src", img_url);
						$("#imgArea").append(img);
						var overview = $(s).find("ge_overview").text();
						$("#overviewArea").html(overview);
						var start_date = $(s).find("ge_start_date").text();
						var start_date_span = $("<span></span>").text(
								start_date);
						var li_1 = $("<li>").append("<strong>시작일</strong>",
								start_date_span);
						var end_date = $(s).find("ge_end_date").text();
						var end_date_span = $("<span></span>").text(end_date);
						var li_2 = $("<li>").append("<strong>종료일</strong>",
								end_date_span);
						var addr = $(s).find("ge_addr").text();
						addr2 = addr.split(" ");
						$("#titleArea_2").append(addr2[0]+" "+addr2[1]+" "+"맛집");
						var addr_span = $("<span></span>").text(addr);
						var li_3 = $("<li>").append("<strong>주소</strong>",
								addr_span);
						$("#info ul").append(li_1, li_2, li_3);

						var latitude = $(s).find("ge_map_y").text();
						var longitude = $(s).find("ge_map_x").text();
						var container = document.getElementById('map');
						var options = { // 지도를 생성할 때 필요한 기본 옵션
							center : new daum.maps.LatLng(latitude, longitude),// 지도의중심좌표.
							level : 5
						// 지도의 레벨(확대, 축소 정도)
						};

						var map = new daum.maps.Map(container, options); // 지도
						// 생성 및
						// 객체
						// 리턴
						var storename = [];
						storename = search_province_in_festival(addr);
						search_addr_by_keyword(map, storename);
						make_festival_marker(map, latitude, longitude, addr);
					});
		}
	});
}

function make_festival_marker(map, latitude, longitude, addr) {
	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
		map : map,
		position : new daum.maps.LatLng(latitude, longitude),
		title : addr
	});

}

function select_google_place(addr) {
	var place_num = 0;
	if(addr.indexOf("서울특별시") == 0){
		place_num = 1;
	}else if (addr.indexOf("경기도") == 0 || addr.indexOf("인천광역시") == 0) {
		place_num = 2;
	}else if (addr.indexOf("강원도") == 0) {
		place_num = 3;
	}else if (addr.indexOf("충청남도") == 0 || addr.indexOf("충청북도") == 0) {
		place_num = 4;
	}else if (addr.indexOf("광주광역시") == 0 || addr.indexOf("전라남도") == 0 || addr.indexOf("전라북도") == 0) {
		place_num = 5;
	}else if (addr.indexOf("부산광역시") == 0 || addr.indexOf("울산광역시") == 0 || addr.indexOf("경상남도") == 0 
			|| addr.indexOf("경상북도") == 0 || addr.indexOf("대구광역시") == 0 || addr.indexOf("대전광역시") == 0) {
		place_num = 6;
	}else {
		place_num = 7;
	}
	return place_num;
}

function search_province_in_festival(addr) {
	var place_num = select_google_place(addr);
	var storename = [];
	$.ajax({
		url : "get.place",
		data : {place_num},
		async : false,
		success : function(data) {
			$.each(data.places, function(i, f) {
				if (addr.indexOf(f.gp_province) == 0){
					var span1 = $("<span class='place_name'></span>").append(f.gp_storename);
					var span2 = $("<span class='place_star'></span>").append(f.gp_star);
					var div = $("<div></div>").append(span1,span2);
					$("#googlePlaceArea").append(div);
				}
			});
		}
	});
	return storename;
}

function search_addr_by_keyword(map, keyword) {
	// 장소 검색 객체를 생성합니다
	var ps = new daum.maps.services.Places();
	// 키워드로 장소를 검색합니다
	$.each(keyword, function(i, key) {
		var temp = key.gp_province + ' ' + key.gp_storename;
		ps.keywordSearch(temp, placesSearchCB);
	});

	// 키워드 검색 완료 시 호출되는 콜백함수 입니다
	function placesSearchCB(data, status, pagination) {
		if (status === daum.maps.services.Status.OK) {
			for (var i = 0; i < data.length; i++) {
				displayMarker(data[i]);
			}
		}
	}
	function displayMarker(place) {
		var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
		var imageSize = new daum.maps.Size(24, 35); 
		var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
	    var marker = new daum.maps.Marker({
	        map: map,
	        position: new daum.maps.LatLng(place.y, place.x), 
	    	image : markerImage
	    });
	    
	    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	    var iwContent = '<div style="padding:5px;">'+place.place_name+'</div>';

	    // 인포윈도우를 생성합니다
	    var infowindow = new daum.maps.InfoWindow({
	        content : iwContent
	    });

	    // 마커에 마우스오버 이벤트를 등록합니다
	    daum.maps.event.addListener(marker, 'mouseover', function() {
	      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
	        infowindow.open(map, marker);
	    });

	    // 마커에 마우스아웃 이벤트를 등록합니다
	    daum.maps.event.addListener(marker, 'mouseout', function() {
	        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
	        infowindow.close();
	    });
	}
}