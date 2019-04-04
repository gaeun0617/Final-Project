<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="resources/css/aroundFestival.css">
<script type="text/javascript" src="resources/js/aroundFestival.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div class="aroundWrapper">
		<div id="map"></div>
		<div class="aroundFestivalTable">
			<div id="tableTitle">
				<span>축제이름</span>
				<span>현재위치와의 거리</span>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		makeMap()
	</script>
</body>
</html>