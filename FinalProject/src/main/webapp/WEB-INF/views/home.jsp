<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	$(function() {
		$('.bxslider').bxSlider({
			auto : true, // 자동으로 애니메이션 시작
			speed : 500, // 애니메이션 속도
			pause : 5000, // 애니메이션 유지 시간 (1000은 1초)
			mode : 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
			autoControls : false, // 시작 및 중지버튼 보여짐
			pager : true, // 페이지 표시 보여짐
			captions : false, // 이미지 위에 텍스트를 넣을 수 있음
		});
		var width = $(window).width();
		if(width < 780){
			$(".bxslider li img").css("width","500px").css("height","300px").css("margin","0 auto");
			$(".bx-viewport").css("height","100%");
		}else{
			$(".bxslider li img").css("width","1200px").css("height","550px").css("margin","0 auto");
			$(".bx-viewport").css("height","100%");			
		}
		$(".bxslider li img").click(function(){
			var title = $(this).attr("title");
			location.href = "detail.go?ge_title="+title;
		})
	});
</script>
</head>
<body>
	<div class="homeContentsArea">
		<div class="imageSlide">
			<ul class="bxslider">
				<li style="cursor: pointer;">
					<img src="resources/img/gg.jpg" title="이천쌀문화축제 ">
				</li>
				<li style="cursor: pointer;">
					<img src="resources/img/seoul.jpg" title="석촌호수">
				</li>
				<li style="cursor: pointer;">
					<img src="resources/img/gw.jpg" title="맹방유채꽃축제">
				</li>
			</ul>
		</div>
		<div class="mediaFrame">
			<h3 class="introduceTitle">이 주의 핫 페스티벌!</h3>
			<div class="mainVideoArea">
				<iframe height="180px" src="https://www.youtube.com/embed/f3LLSN80KQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>		
		</div>
	</div>
</body>
</html>