var map;

function makeMap(){
	
	var locPosition = undefined;
	var object = undefined;
	
//HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
	if (navigator.geolocation) {
		
		// GeoLocation을 이용해서 접속 위치를 얻어옵니다
		navigator.geolocation.getCurrentPosition(function(position) {
			
			var lat = position.coords.latitude, // 위도
			lon = position.coords.longitude; // 경도
			locPosition = new daum.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
			object = showLocate(locPosition);
			var markerPosition  = new daum.maps.LatLng(lat, lon); 

			// 마커를 생성합니다
			var marker = new daum.maps.Marker({
			    position: markerPosition,
			    title: "내 위치"
			});

			// 마커가 지도 위에 표시되도록 설정합니다
			marker.setMap(map);
			var location = searchAddrFromCoords(object.g, object.m.getCenter(), displayCenterInfo);
		});
		
	}
	else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
		
		locPosition = new daum.maps.LatLng(33.450701, 126.570667);
		object = showLocate(locPosition);
		searchAddrFromCoords(object.g, locPosition);
	}
}
function showLocate(locPosition){
	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
			center: locPosition, //지도의 중심좌표.
			level: 6 //지도의 레벨(확대, 축소 정도)
	};
	
	map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
	
	var geocoder = new daum.maps.services.Geocoder();
	var reobject = {m:map, g:geocoder};
	
	return reobject;
}

function searchAddrFromCoords(geocoder, coords, callback) {	
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
}

function displayCenterInfo(result, status) {
    if (status === daum.maps.services.Status.OK) {
    	var locate = result[0].region_1depth_name;
    	//+' '+result[0].region_2depth_name;

    	var d = new Date();
    	var year = d.getFullYear();
    	var m = d.getMonth() + 1;
    	var dd = d.getDate();
    	if(m < 10){
    		m = '0'+m;
    	}
    	if(dd < 10){
    		dd = '0'+dd;
    	}
    	//var currency_date = 20190406;
    	var currency_date = year+m+dd;
    	var currency_month = year+m;
    	var festivalPosition = [new daum.maps.LatLng(result[0].y, result[0].x)];
    	$.ajax({
    		url:'get.aroundEvent',
    		data:{ge_start_date:currency_month},
    		type:'post',
    		success:function(data){
    			if(data.events.length != 0){
    				//ge_map_x, ge_map_y
    				var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    				var tempLocate;
    				var festivalLoc;
    				var tempDate;
    				for(var i = 0; i < data.events.length; i++){
    					tempLocate = data.events[i].ge_addr.split(" ");
    					festivalLoc = tempLocate[0];
    					//+" "+tempLocate[1];
    					tempDate = data.events[i].ge_start_date;
    					
    					if(festivalLoc == locate && tempDate == currency_date){
    						var imageSize = new daum.maps.Size(24, 35); 
    						var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
    						
    						var markerPosition  = new daum.maps.LatLng(data.events[i].ge_map_y, data.events[i].ge_map_x);
    						var marker = new daum.maps.Marker({
    							map:map,
    							position: markerPosition,
    							title: data.events[i].ge_title,
    							image : markerImage
    						});
    						
    						festivalPosition.push(new daum.maps.LatLng(data.events[i].ge_map_y, data.events[i].ge_map_x));
    						var polyline = new daum.maps.Polyline({
    							map: map,
    							path: festivalPosition,
    							strokeOpacity:0
    						});
    						var distance = Math.round(polyline.getLength());
    						makeTable(data.events[i], distance);
    					}
    				}			
    			}
    		}
    	});
    }    
}
function makeTable(festival, distance){
	var title = $("<div class='aroundTitle'></div>").text(festival.ge_title);
	title.click(function() {
		goDetail(festival.ge_title);
	});
	var distance = $("<div class='aroundDistance'></div>").text("거리 : "+distance+"m");
	var aroundFestivals = $("<div class='aroundFestivals'></div>").append(title, distance);
	$(".aroundFestivalTable").append(aroundFestivals);
}

function click_table(){
	$(document).on("click touchend", ".aroundFestivals", function(e){
		e.stopPropagation();
		var td = $(this);
		var title = td.children(".aroundTitle").text();
		goDetail(title);
	});
}

   