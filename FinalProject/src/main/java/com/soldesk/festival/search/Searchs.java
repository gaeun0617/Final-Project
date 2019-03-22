package com.soldesk.festival.search;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Searchs {
	private List<Search> search;
	
	public Searchs() {
		// TODO Auto-generated constructor stub
	}

	public Searchs(List<Search> search) {
		super();
		this.search = search;
	}
	
	public List<Search> getSearch() {
		return search;
	}
	@XmlElement
	public void setSearch(List<Search> search) {
		this.search = search;
	}

}
