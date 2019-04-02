select * from GOV_EVENT order by ge_area_code;

select * from gov_event where ge_title like '%'||'서대문, 1919 그날의 함성!'||'%';

select * from GOV_EVENT where ge_start_date like '%'||'201904'||'%' and ge_end_date like '%'||'201904'||'%';

select * from gov_event where ge_title like '%'||'서대문, 1919 그날의 함성!'||'%';

select * from gov_event where ge_title like
		'%'||'페스티'||'%' or ge_addr like '%'||'null'||'%' order by ge_area_code;
