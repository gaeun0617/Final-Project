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
						var img = $("<img>").attr("src", img_url).css(
								"max-width", "100%");
						$("#imgArea").append(img);
						var overview = $(s).find("ge_overview").text();
						$("#overviewArea").html(overview);
						var start_date = $(s).find("ge_start_date").text();
						var start_date_span = $("<span></span>").text(
								start_date);
						var li_1 = $("<li>").append("<span>시작일</span>",
								start_date_span);
						var end_date = $(s).find("ge_end_date").text();
						var end_date_span = $("<span></span>").text(end_date);
						var li_2 = $("<li>").append("<span>종료일</span>",
								end_date_span);
						var addr = $(s).find("ge_addr").text();
						var addr_span = $("<span></span>").text(addr);
						var li_3 = $("<li>").append("<span>주소</span>",
								addr_span);
						$("#infoArea ul").append(li_1, li_2, li_3);

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
						storename = search_addr_in_festival(addr);
						search_addr_by_keyword(map, storename);
						make_festival_marker(map, latitude, longitude, addr);
					});
		}
	});
}

function make_festival_marker(map, latitude, longitude, addr) {
	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
		position : new daum.maps.LatLng(latitude, longitude),
		title : addr
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);
}

function search_addr_in_festival(addr) {
	var substring = [ "서울특별시", "경기도", "강원도", "충청남도", "충청북도", "전라남도", "전라북도",
			"경상남도", "경상북도", "인천광역시", "광주광역시", "부산광역시", "울산광역시", "대구광역시",
			"대전광역시", "제주특별자치도" ]
	// 가게 이름 넣을 배열 변수
	var storename = [];
	if (addr.indexOf(substring[0]) == 0) {
		$.ajax({
			url : "get.place1",
			async : false,
			success : function(data) {
				$.each(data.places, function(i, f) {
					storename.push(f);
				});
			}
		});
	}
	return storename;
}

function search_addr_by_keyword(map, keyword) {
	// 장소 검색 객체를 생성합니다
	var ps = new daum.maps.services.Places();
	// 키워드로 장소를 검색합니다
	$.each(keyword, function(i, key) {
		ps.keywordSearch(key, placesSearchCB);
	});

	// 키워드 검색 완료 시 호출되는 콜백함수 입니다
	function placesSearchCB(data, status, pagination) {
		if (status === daum.maps.services.Status.OK) {

			// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
			// LatLngBounds 객체에 좌표를 추가합니다
			var bounds = new daum.maps.LatLngBounds();

			for (var i = 0; i < data.length; i++) {
				displayMarker(data[i]);
				bounds.extend(new daum.maps.LatLng(data[i].y, data[i].x));
			}

			// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
			map.setBounds(bounds);
		}
	}
	// 지도에 마커를 표시하는 함수입니다
	function displayMarker(place) {

		// 마커를 생성하고 지도에 표시합니다
		var marker2 = new daum.maps.Marker({
			map : map,
			position : new daum.maps.LatLng(place.y, place.x)
		});
	}
}
