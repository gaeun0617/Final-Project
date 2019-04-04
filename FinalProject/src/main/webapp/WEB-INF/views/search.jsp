<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	$(function(){
		$("#searchInput").keyup(function(e){
			var keyword = $("#searchInput").val();
			var submit = {};
			if($("#input_category").val() == 'key') {
				submit = {ge_title : keyword, ge_addr:'null'};
			}else if($("#input_category").val() == 'address') {
				submit = {ge_title:'null', ge_addr : keyword};
			}else if($("#input_category").val() == 'category') {
				submit = {ge_title:'null', ge_addr : 'null'};
			}
			$.ajax({
				url : "search.get",
				data : submit,
				success : function(data) {
					$(".searchResultTable").empty();
					$(data).find("search").each(function(i, search){
			  			var ge_title = $(search).find("ge_title").text();
						var ge_image = $(search).find("ge_image").text();
						var ge_image2 = $("<img>").attr("src", ge_image).css("width", "100px");
						var td1 = $("<td></td>").append(ge_image2);
						var td2 = $("<td></td>").text(ge_title);
						var tr1 = $("<tr class='result'></tr>").append(td1, td2);	
						$(".searchResultTable").prepend(tr1);
					});
					
					if (keyword.length == 0) {
						$(".searchResultTable").empty();	
					}
					
					$(".result").click(function() {
						var text = $(this).text();
						goDetail(text);
					});
					
					var win = $(window).width();
					$(".searchResultTable").css("width", win + "px").css("border-collapse","collapse");
				}
			});
		});
	});
</script>
</head>
<body>
	<div class="categoryArea">
		<select name="category" id="input_category">
			<option value='category'>-- 분류 --</option>
			<option id="op1" value="key">키워드</option>
			<option id="op2" value="address">지역</option>
		</select>
	</div>
	<div class='searchBar'>
		<table class="searchTableArea">
			<tr>
				<td align="center"><input id="searchInput" name="ge_title"
					placeholder="내용 입력" autocomplete="off"></td>
				<td align="center">
					<button id="searchBtn">
						<img src="resources/img/search.png" id="searchIcon" width="40px"
							height="40px">
					</button>
				</td>
			</tr>
		</table>
	</div>
	<div class="searchResultArea">
		<table class="searchResultTable"></table>
	</div>
</body>
</html>