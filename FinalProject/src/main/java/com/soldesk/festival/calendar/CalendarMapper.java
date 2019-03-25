package com.soldesk.festival.calendar;

import java.util.List;

public interface CalendarMapper {
	public abstract List<EventBean> getEvent(EventBean eb);
	public abstract List<EventBean> getAroundEvent(EventBean eb);
}
