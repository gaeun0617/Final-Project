package com.soldesk.festival.place;

import java.util.List;

public class GooglePlaces {
	private List<GooglePlace> places;
	
	public GooglePlaces() {
		// TODO Auto-generated constructor stub
	}

	public GooglePlaces(List<GooglePlace> places) {
		super();
		this.places = places;
	}

	public List<GooglePlace> getPlaces() {
		return places;
	}

	public void setPlaces(List<GooglePlace> places) {
		this.places = places;
	}
	
}
