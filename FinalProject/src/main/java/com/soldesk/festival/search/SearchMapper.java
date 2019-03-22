package com.soldesk.festival.search;

import java.util.List;

public interface SearchMapper {
	public abstract List<Search> searchFestival(Search s);
	public abstract Search detailView(Search s);
}
