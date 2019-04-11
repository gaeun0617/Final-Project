package com.soldesk.festival.place;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GooglePlaceDAO {

	@Autowired
	private SqlSession ss;

	public GooglePlaces getGooglePlace(HttpServletRequest req) {
		int num = Integer.parseInt(req.getParameter("place_num"));
		List<GooglePlace> place = null;
		if (num == 1) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_1();
		} else if (num == 2) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_2();
		} else if (num == 3) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_3();
		} else if (num == 4) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_4();
		} else if (num == 5) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_3();
		} else if (num == 6) {
			place = ss.getMapper(PlaceMapper.class).searchPlace_3();
		} else {
			place = ss.getMapper(PlaceMapper.class).searchPlace_7();
		}
		GooglePlaces gp = new GooglePlaces(place);
		return gp;
	}

}
