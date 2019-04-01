package com.soldesk.festival.place;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GooglePlaceDAO {

	@Autowired
	private SqlSession ss;

	public GooglePlaces getGooglePlace1() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_1();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace2() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_2();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace3() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_3();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace4() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_4();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace5() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_5();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace6() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_6();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

	public GooglePlaces getGooglePlace7() {
		List<GooglePlace> place = ss.getMapper(PlaceMapper.class).searchPlace_7();
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}
}
