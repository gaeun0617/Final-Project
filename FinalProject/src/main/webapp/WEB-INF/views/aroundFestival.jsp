<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/aroundFestival.css">
<script type="text/javascript" src="resources/js/aroundFestival.js"></script>
<title>Insert title here</title>
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=af027ae344faba2343cf42cebbdc4728&libraries=services"></script>
</head>
<body>
	<div class="aroundWrapper">
		<div id="map"></div>
		<div class="aroundFestivalTable"></div>
	</div>
	<script type="text/javascript">
		makeMap();
		click_table();
	</script>
</body>
</html>