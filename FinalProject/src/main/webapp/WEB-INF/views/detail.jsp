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
			<ul></ul>
		</div>
		<div id='titleArea_2'>지도</div>
		<div id='map' style="width: 500px; height: 300px;"></div>
		<div id='googlePlaceArea' >
			<table id="place_info" style="border: 1px;">
				<tr>
					<td>지역</td>
					<td>가게명</td>
					<td>별점</td>
				</tr>
			</table>
		</div>
	</div>
	<script type="text/javascript">
		get_details();
	</script>
</body>
</html>