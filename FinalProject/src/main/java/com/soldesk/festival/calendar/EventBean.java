package com.soldesk.festival.calendar;

public class EventBean {
	private String ge_title = "";
	private String ge_start_date = "";
	private String ge_end_date = "";
	
	public EventBean() {
		// TODO Auto-generated constructor stub
	}
	public EventBean(String ge_title, String ge_start_date, String ge_end_date) {
		super();
		this.ge_title = ge_title;
		this.ge_start_date = ge_start_date;
		this.ge_end_date = ge_end_date;
	}
	public String getGe_title() {
		return ge_title;
	}
	public void setGe_title(String ge_title) {
		this.ge_title = ge_title;
	}
	public String getGe_start_date() {
		return ge_start_date;
	}
	public void setGe_start_date(String ge_start_date) {
		this.ge_start_date = ge_start_date;
	}
	public String getGe_end_date() {
		return ge_end_date;
	}
	public void setGe_end_date(String ge_end_date) {
		this.ge_end_date = ge_end_date;
	}
	
}
