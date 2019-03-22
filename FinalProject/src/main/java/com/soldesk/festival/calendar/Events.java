package com.soldesk.festival.calendar;

import java.util.List;

public class Events {
	private List<EventBean> events;
	
	public Events() {
		// TODO Auto-generated constructor stub
	}

	public Events(List<EventBean> events) {
		super();
		this.events = events;
	}

	public List<EventBean> getEvents() {
		return events;
	}

	public void setEvents(List<EventBean> events) {
		this.events = events;
	}
	
}
