update gov_event set ge_addr='부산광역시 해운대구 송정동' where ge_title='송정 정월대보름축제 2019';
select * from GOV_EVENT order by ge_area_code;

select * from gov_event where ge_title like '%'||'서대문, 1919 그날의 함성!'||'%';

select * from GOV_EVENT where ge_addr like '%'||'서울특별시 중구'||'%' or ge_start_date like '%'||'201903'||'%' and ge_end_date like '%'||'201903'||'%';

select * from gov_event where ge_title like '%'||'서대문, 1919 그날의 함성!'||'%';

select * from gov_event where ge_title like
		'%'||'페스티'||'%' or ge_addr like '%'||'null'||'%' order by ge_area_code;
select * from GOV_EVENT where ge_start_date like '%'||'201904'||'%' and ge_end_date like '%'||'201904'||'%';

select * from gov_event where ge_title like '%'||'서대문, 1919 그날의 함성!'||'%';

select * from google_place_1;