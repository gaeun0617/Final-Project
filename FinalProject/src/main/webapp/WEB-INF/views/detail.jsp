<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:if test="${sr != null}">
		<div>
			<div>
				<div>${sr.ge_title }</div>
			</div>
			<div>
				<img src="${sr.ge_image }">
			</div>
			<div>시작날짜:${sr.ge_start_date }</div>
			<div>종료날짜:${sr.ge_end_date }</div>
			<div>주소:${sr.ge_addr }</div>
			<div>
				<c:set var="splitTitle" value="${fn:split(sr.ge_title,' ')}" />
				<a href="https://www.instagram.com/explore/tags/${sr.}/">#</a>
			</div>
			<div>지도</div>
		</div>
	</c:if>
</body>
</html>