package com.soldesk.festival.search;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchDAO {
	
	@Autowired
	private SqlSession ss;
	
	public Searchs getSelect(Search s) {
		try {
			SearchMapper sm = ss.getMapper(SearchMapper.class);
			List<Search> search = sm.searchFestival(s);
			Searchs s2 = new Searchs(search);
			return s2;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public Search getDetailFestival(Search s) {
		try {
			return ss.getMapper(SearchMapper.class).getDetailFestival(s);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
}
