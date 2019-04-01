package com.soldesk.festival.place;

public class GooglePlace {
	private String gp_province;
	private String gp_storename;
	private String gp_star;
	
	public GooglePlace() {
		// TODO Auto-generated constructor stub
	}

	public GooglePlace(String gp_province, String gp_storename, String gp_star) {
		super();
		this.gp_province = gp_province;
		this.gp_storename = gp_storename;
		this.gp_star = gp_star;
	}

	public String getGp_province() {
		return gp_province;
	}

	public void setGp_province(String gp_province) {
		this.gp_province = gp_province;
	}

	public String getGp_storename() {
		return gp_storename;
	}

	public void setGp_storename(String gp_storename) {
		this.gp_storename = gp_storename;
	}

	public String getGp_star() {
		return gp_star;
	}

	public void setGp_star(String gp_star) {
		this.gp_star = gp_star;
	}
	
}
