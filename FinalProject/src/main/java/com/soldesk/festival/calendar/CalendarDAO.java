package com.soldesk.festival.calendar;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalendarDAO {
	@Autowired
	private SqlSession ss;
	
	public Events getEvent(EventBean eb){
		CalendarMapper cm = ss.getMapper(CalendarMapper.class);
		return new Events(cm.getEvent(eb));
	}
}
