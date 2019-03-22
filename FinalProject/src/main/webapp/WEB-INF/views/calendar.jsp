<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/js/calendar.js"></script>
</head>
<body>
	<div class="calendarWrapper">
		<div id="calendar">
			<div class="current">
				<span id="date"></span>
			</div>
			<div id="dates"></div>
		</div>
	</div>
	<div id="dialog_field">
		<div id="dialog_header">
			<h2>날짜 선택</h2>
		</div>
		<div id="dialog_body">
			<span id="want_year">
				<select id="select_want_year">
				</select>
			</span>
			<span id="want_month">
				<select id="select_want_month">
				</select>
			</span>
		</div>
		<div id="dialog_footer">
			<span id="ok_btn_inDialog">확인</span>
			<span id="cancel_btn_inDialog">취소</span>
		</div>
	</div>

</body>
</html>