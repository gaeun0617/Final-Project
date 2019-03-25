/**
 * 
 */

function makeMap(){
	
	var locPosition;
	var object;
	
//HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
	if (navigator.geolocation) {
		
		// GeoLocation을 이용해서 접속 위치를 얻어옵니다
		navigator.geolocation.getCurrentPosition(function(position) {
			
			var lat = position.coords.latitude, // 위도
			lon = position.coords.longitude; // 경도
			
			locPosition = new daum.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
			object = showLocate(locPosition);
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
			level: 3 //지도의 레벨(확대, 축소 정도)
	};
	
	var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
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
    	console.log(result[0]);
    	var locate = result[0].region_1depth_name+' '+result[0].region_2depth_name;
    	var d = new Date();
    	var year = d.getFullYear();
    	var m = d.getMonth() + 1;
    	if(m < 10){
    		m = '0'+m;
    	}
    	var currency_date = year+m;
    	console.log(locate);
    	$.ajax({
    		url:'get.aroundEvent',
    		data:{ge_addr:locate, ge_start_date:currency_date, ge_end_date:currency_date},
    		type:'post',
    		success:function(data){
    			console.log(data);
    		}
    	});
    }    
}
   