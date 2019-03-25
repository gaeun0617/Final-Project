package com.soldesk.festival;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.soldesk.festival.calendar.CalendarDAO;
import com.soldesk.festival.calendar.EventBean;
import com.soldesk.festival.calendar.Events;
import com.soldesk.festival.search.Search;
import com.soldesk.festival.search.SearchDAO;
import com.soldesk.festival.search.Searchs;
 
@Controller
public class HomeController {
	
	@Autowired
	private SearchDAO sDAO;
	@Autowired
	private CalendarDAO cDAO;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		req.setAttribute("contentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/index.do", method = RequestMethod.GET)
	public String goHome(HttpServletRequest req) {
		req.setAttribute("contentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/search.go", method = RequestMethod.GET)
	public String goSearch(Search s, HttpServletRequest req) {
		req.setAttribute("contentPage", "search.jsp");
		return "index";
	}
	@RequestMapping(value = "/search.get", method = RequestMethod.GET,
			produces = "application/xml; charset=utf-8")
	public @ResponseBody Searchs goSearch(Search s) {
		return sDAO.getSelect(s);
	}
	
	@RequestMapping(value = "/detail.get", method = RequestMethod.GET,
			produces = "application/json; charset=utf-8")
	public @ResponseBody Search goDetailFestival(Search s) {
		return sDAO.getDetailFestival(s);
	}
	
	@RequestMapping(value = "/detail.go", method = RequestMethod.GET)
	public String goDetail(Search s, HttpServletRequest req) {
		req.setAttribute("contentPage", "detail.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/get.calendar", method = RequestMethod.GET)
	public String getCalendar(HttpServletRequest req) {
		req.setAttribute("contentPage", "calendar.jsp");
		return "index";
	}
	
	@RequestMapping(value="/get.Event", method=RequestMethod.POST, produces="application/json; charset=utf-8")
	public @ResponseBody Events getEventJson(EventBean eb){
		return cDAO.getEvent(eb);
	}
}

