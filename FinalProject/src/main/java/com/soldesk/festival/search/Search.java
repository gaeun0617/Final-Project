package com.soldesk.festival.search;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Search {
	private String ge_title;
	private String ge_start_date;
	private String ge_end_date;
	private String ge_addr;
	private String ge_image;
	private String ge_map_x;
	private String ge_map_y;
	private String ge_overview;
	
	public Search() {
		// TODO Auto-generated constructor stub
	}

	public Search(String ge_title, String ge_start_date, String ge_end_date, String ge_addr, String ge_image,
			String ge_map_x, String ge_map_y, String ge_overview) {
		super();
		this.ge_title = ge_title;
		this.ge_start_date = ge_start_date;
		this.ge_end_date = ge_end_date;
		this.ge_addr = ge_addr;
		this.ge_image = ge_image;
		this.ge_map_x = ge_map_x;
		this.ge_map_y = ge_map_y;
		this.ge_overview = ge_overview;
	}

	public String getGe_map_x() {
		return ge_map_x;
	}
	
	@XmlElement
	public void setGe_map_x(String ge_map_x) {
		this.ge_map_x = ge_map_x;
	}

	public String getGe_map_y() {
		return ge_map_y;
	}
	
	@XmlElement
	public void setGe_map_y(String ge_map_y) {
		this.ge_map_y = ge_map_y;
	}

	public String getGe_overview() {
		return ge_overview;
	}
	
	@XmlElement
	public void setGe_overview(String ge_overview) {
		this.ge_overview = ge_overview;
	}

	public String getGe_title() {
		return ge_title;
	}
	
	@XmlElement
	public void setGe_title(String ge_title) {
		this.ge_title = ge_title;
	}

	public String getGe_start_date() {
		return ge_start_date;
	}
	@XmlElement
	public void setGe_start_date(String ge_start_date) {
		this.ge_start_date = ge_start_date;
	}

	public String getGe_end_date() {
		return ge_end_date;
	}
	@XmlElement
	public void setGe_end_date(String ge_end_date) {
		this.ge_end_date = ge_end_date;
	}

	public String getGe_addr() {
		return ge_addr;
	}
	@XmlElement
	public void setGe_addr(String ge_addr) {
		this.ge_addr = ge_addr;
	}

	public String getGe_image() {
		return ge_image;
	}
	@XmlElement
	public void setGe_image(String ge_image) {
		this.ge_image = ge_image;
	}

}
