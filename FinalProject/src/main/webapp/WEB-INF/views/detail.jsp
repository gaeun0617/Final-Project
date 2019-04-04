<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="detail_info">
		<div id='titleArea_1'></div>
		<div id='imgArea'></div>
		<div id='overviewArea'></div>
		<div id='infoArea'>
			<div id="info">
				<ul></ul>
			</div>
		</div>
		<div id='titleArea_2'></div>
		<div id='map' style="width: 100%; height: 300px;"></div>
		<div id='googlePlaceArea'>
			<div>
				<span class="place_name">이름</span><span class="place_star">별점</span>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		get_details();
	</script>
</body>
</html>