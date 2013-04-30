/*
 * /js/pages/gamedetails.js
 */
var qp;

$(function () {


	var options = {
		init : false,
		feed : {
			boxscore : "/stats/boxscore",
			playbyplay : "/stats/playbyplay"
		},
		params : {
			boxscore : {
				GameID: "",
				RangeType: 0,
				StartPeriod: 0,
				EndPeriod: 0,
				StartRange: 0,
				EndRange: 0
			},
			playbyplay : {
				GameID : "",
				StartPeriod: 0,
				EndPeriod: 0
			}
		},
		eventScrubber : {
			startRange : 0,
			endRange : 0
		},
		dom : {
			$results : $('#stat-table-section .span6')
		},
		teams : {}
	};

	var templates = {
		lineScore : [
			'	<thead>',
			'		<tr>',
			'			<th class="team"></th>',
			'			<th class="prd q1">1</th>',
			'			<th class="prd q2">2</th>',
			'			<th class="prd q3">3</th>',
			'			<th class="prd q4">4</th>',
			'			<th class="prd q5 ot1   ${hidePeriod(5)}">OT</th>',
			'			<th class="prd q6 ot2   ${hidePeriod(6)}">2OT</th>',
			'			<th class="prd q7 ot3   ${hidePeriod(7)}">3OT</th>',
			'			<th class="prd q8 ot4   ${hidePeriod(8)}">4OT</th>',
			'			<th class="prd q9 ot5   ${hidePeriod(9)}">5OT</th>',
			'			<th class="prd q10 ot6  ${hidePeriod(10)}">6OT</th>',
			'			<th class="prd q11 ot7  ${hidePeriod(11)}">7OT</th>',
			'			<th class="prd q12 ot8  ${hidePeriod(12)}">8OT</th>',
			'			<th class="prd q13 ot9  ${hidePeriod(13)}">9OT</th>',
			'			<th class="prd q14 ot10 ${hidePeriod(14)}">10OT</th>',
			'			<th class="total">T</th>',
			'		</tr>',
			'	</thead>',
			'	<tbody>',
			'		<tr class="vtm">',
			'{{if AllStarFlag == "true"}}' +
			'			<td class="team"><a href="/teamProfile.html?TeamID=${teams.vtm.TEAM_ID}&SeasonType=All Star"><div class="logo ${teams.vtm.TEAM_ABBREVIATION} sm">${teams.vtm.TEAM_ABBREVIATION}</div></a>${teams.vtm.TEAM_ABBREVIATION}<br>${teams.vtm.linescore.TWL}</td>',
            '{{else}}' +
			'			<td class="team"><a href="/teamProfile.html?TeamID=${teams.vtm.TEAM_ID}"><div class="logo ${teams.vtm.TEAM_ABBREVIATION} sm">${teams.vtm.TEAM_ABBREVIATION}</div></a>${teams.vtm.TEAM_ABBREVIATION}<br>${teams.vtm.linescore.TWL}</td>',
            '{{/if}}' +			
			'			<td class="prd q1">${teams.vtm.linescore.PTS_QTR1}</td>',
			'			<td class="prd q2">${teams.vtm.linescore.PTS_QTR2}</td>',
			'			<td class="prd q3">${teams.vtm.linescore.PTS_QTR3}</td>',
			'			<td class="prd q4">${teams.vtm.linescore.PTS_QTR4}</td>',
			'			<td class="prd q5 ot1   ${hidePeriod(5)} ">${teams.vtm.linescore.PTS_OT1}</td>',
			'			<td class="prd q6 ot2   ${hidePeriod(6)} ">${teams.vtm.linescore.PTS_OT2}</td>',
			'			<td class="prd q7 ot3   ${hidePeriod(7)} ">${teams.vtm.linescore.PTS_OT3}</td>',
			'			<td class="prd q8 ot4   ${hidePeriod(8)} ">${teams.vtm.linescore.PTS_OT4}</td>',
			'			<td class="prd q9 ot5   ${hidePeriod(9)} ">${teams.vtm.linescore.PTS_OT5}</td>',
			'			<td class="prd q10 ot6  ${hidePeriod(10)}">${teams.vtm.linescore.PTS_OT6}</td>',
			'			<td class="prd q11 ot7  ${hidePeriod(11)}">${teams.vtm.linescore.PTS_OT7}</td>',
			'			<td class="prd q12 ot8  ${hidePeriod(12)}">${teams.vtm.linescore.PTS_OT8}</td>',
			'			<td class="prd q13 ot9  ${hidePeriod(13)}">${teams.vtm.linescore.PTS_OT9}</td>',
			'			<td class="prd q14 ot10 ${hidePeriod(14)}">${teams.vtm.linescore.PTS_OT10}</td>',
			'			<td class="total">${teams.vtm.PTS}</td>',
			'		</tr>',
			'		<tr class="htm">',
			'{{if AllStarFlag == "true"}}' +
			'			<td class="team"><a href="/teamProfile.teams.html?TeamID=${teams.htm.TEAM_ID}&SeasonType=All Star"><div class="logo ${teams.htm.TEAM_ABBREVIATION} sm">${teams.htm.TEAM_ABBREVIATION}</div></a>${teams.htm.TEAM_ABBREVIATION}<br>${teams.htm.linescore.TWL}</td>',
            '{{else}}' +
			'			<td class="team"><a href="/teamProfile.teams.html?TeamID=${teams.htm.TEAM_ID}"><div class="logo ${teams.htm.TEAM_ABBREVIATION} sm">${teams.htm.TEAM_ABBREVIATION}</div></a>${teams.htm.TEAM_ABBREVIATION}<br>${teams.htm.linescore.TWL}</td>',
            '{{/if}}' +			
			'			<td class="prd q1">${teams.htm.linescore.PTS_QTR1}</td>',
			'			<td class="prd q2">${teams.htm.linescore.PTS_QTR2}</td>',
			'			<td class="prd q3">${teams.htm.linescore.PTS_QTR3}</td>',
			'			<td class="prd q4">${teams.htm.linescore.PTS_QTR4}</td>',
			'			<td class="prd q5 ot1   ${hidePeriod(5)} ">${teams.htm.linescore.PTS_OT1}</td>',
			'			<td class="prd q6 ot2   ${hidePeriod(6)} ">${teams.htm.linescore.PTS_OT2}</td>',
			'			<td class="prd q7 ot3   ${hidePeriod(7)} ">${teams.htm.linescore.PTS_OT3}</td>',
			'			<td class="prd q8 ot4   ${hidePeriod(8)} ">${teams.htm.linescore.PTS_OT4}</td>',
			'			<td class="prd q9 ot5   ${hidePeriod(9)} ">${teams.htm.linescore.PTS_OT5}</td>',
			'			<td class="prd q10 ot6  ${hidePeriod(10)}">${teams.htm.linescore.PTS_OT6}</td>',
			'			<td class="prd q11 ot7  ${hidePeriod(11)}">${teams.htm.linescore.PTS_OT7}</td>',
			'			<td class="prd q12 ot8  ${hidePeriod(12)}">${teams.htm.linescore.PTS_OT8}</td>',
			'			<td class="prd q13 ot9  ${hidePeriod(13)}">${teams.htm.linescore.PTS_OT9}</td>',
			'			<td class="prd q14 ot10 ${hidePeriod(14)}">${teams.htm.linescore.PTS_OT10}</td>',
			'			<td class="total">${teams.htm.PTS}</td>',
			'		</tr>',
			'	</tbody>'
		].join(""),
		teamLeaders : [
			'	<tr class="leader-row">',
			'		<td class="stat">${CAT}</td>',
			'		<td class="player-name">${PLAYER_NAME}</td>',
			'		<td class="cat">${VALUE}</td>',
			'	</tr>'
		].join(""),
		playByPlay : [
			'<div class="period-shortcuts">',
			'	<ul class="buttonset">',
			'		{{each periods}}',
			'		<li><a class="period-link ui-button" href="#p_${key}">Q${key}</a></li>',
			'		{{/each}}',
			'	</ul>',
			'</div>',
			'{{each periods}}',
			'<a class="jump" id="p_${key}" href="#matchup-header">Jump to top</a>',
			'<table class="period-table">',
			'	<thead>',
			'		<tr>',
			'			<th>${htm.city} ${htm.name}</th>',
			'			<th></th>',
			'			<th>${vtm.city} ${vtm.name}</th>',
			'		</tr>',
			'	</thead>',
			'	<tbody>',
			'		{{each value}}',
			'			{{if NEUTRALDESCRIPTION}} ',
			'			<tr class="{{if SCORE}}sp{{/if}}">',
			'				<td colspan="3" class="neutral">${PCTIMESTRING} - ${NEUTRALDESCRIPTION}</td>',
			'			</tr>',
			'			{{/if}}',
			'			{{if HOMEDESCRIPTION}}',
			'			<tr class="{{if SCORE}}sp{{/if}}">',
			'				<td class="htm">${HOMEDESCRIPTION}</td>',
			'				<td class="gametime"><div>${PCTIMESTRING}</div>{{if SCORE}}<div class="score">[ ${SCORE} ]</div>{{/if}}</td>',
			'				<td class="vtm"></td>',
			'			</tr>',
			'			{{/if}}',
			'			{{if VISITORDESCRIPTION}}',
			'			<tr class="{{if SCORE}}sp{{/if}}">',
			'				<td class="htm"></td>',
			'				<td class="gametime"><div>${PCTIMESTRING}</div>{{if SCORE}}<div class="score">[ ${SCORE} ]</div>{{/if}}</td>',
			'				<td class="vtm">${VISITORDESCRIPTION}</td>',
			'			</tr>',
			'			{{/if}}',
			'		{{/each}}',
			'	</tbody>',
			'</table>',
			'{{/each}}'
		].join(""),
		mobilePlayByPlay : [
			'<div class="period-shortcuts">',
			'	<ul class="buttonset">',
			'		{{each periods}}',
			'		<li><a class="period-link ui-button" href="#p_${key}">Q${key}</a></li>',
			'		{{/each}}',
			'	</ul>',
			'</div>',
			'{{each periods}}',
			'<a class="jump" id="p_${key}" href="#matchup-header">Jump to top</a>',
			'<div class="period-table">',
			'{{each value}}',
			'	{{if NEUTRALDESCRIPTION}}',
			'	<div class="pbpitem neutral">',
			'		<div class="time">${PCTIMESTRING}</div>',			
			'		{{if SCORE}}<div class="score">[ ${SCORE} ]</div>{{/if}}',
			'		<div class="description">${NEUTRALDESCRIPTION}</div>',
			'	</div>',
			'	{{/if}}',
			'	{{if HOMEDESCRIPTION}}',
			'	<div class="pbpitem home">',
			'		<div class="time">${PCTIMESTRING}</div>',			
			'		{{if SCORE}}<div class="score">[ ${SCORE} ]</div>{{/if}}',
			'		<div class="description">${HOMEDESCRIPTION}</div>',
			'	</div>',
			'	{{/if}}',
			'	{{if VISITORDESCRIPTION}}',
			'	<div class="pbpitem away">',
			'		<div class="time">${PCTIMESTRING}</div>',
			'		{{if SCORE}}<div class="score">[ ${SCORE} ]</div>{{/if}}',
			'		<div class="description">${VISITORDESCRIPTION}</div>',
			'	</div>',
			'	{{/if}}',						
			'{{/each}}',
			'</div>',
			'{{/each}}'
		].join(""),
		scrubberDropdownItem : [
			'<li>',
			'<a href="#" value="${decimalTime}">',
				'<div class="time">Q${PERIOD} : ${PCTIMESTRING} </div>',
				'{{if SCORE}}<div class="score"> [${SCORE}] </div>{{/if}}',
				'{{if NEUTRALDESCRIPTION}}<div class="description"> ${NEUTRALDESCRIPTION} </div>{{/if}}',
				'{{if HOMEDESCRIPTION}}<div class="description"> ${HOMEDESCRIPTION} </div>{{/if}}',
				'{{if VISITORDESCRIPTION}}<div class="description"> ${VISITORDESCRIPTION} </div>{{/if}}',								
			'</a>',
			'</li>'
		].join("")
	};

	var DATA;


	/*** DOM ELEMENTS ***/
	
	$eventAlpha = $("#boxscore-scrubber-detail .event.alpha");
	$eventOmega = $("#boxscore-scrubber-detail .event.omega");	



	/*** GAME DETAILS STAT REQUEST ***/

	var initStatRequest = function () {

		if (!options.init) {
			return;
		}

		//Destroy grid
		for(var count=0;count<gameDetailBoxscoreStat.currentGrids.activeGrids.length;count++){
			destroyGrid(gameDetailBoxscoreStat.currentGrids.activeGrids[count]);
		}
		gameDetailBoxscoreStat.currentGrids.activeGrids = [];
		gameDetailBoxscoreStat.currentGrids.loadedGrids = [];
		
		//Hide all the swipe indicator
		$(".swipeNav").hide();

		// show loader
		$('.loader').show();

		// AJAX request
		$.getStats(options.feed.boxscore, options.params.boxscore, onStatRequestCallback);
	};

	var onStatRequestCallback = function (resp) {

		if (!resp) {
			return;
		}

		// redirect if warehouse data is not available
		var gs = resp.sets.GameSummary.datatable[0];
		if (gs.WH_STATUS==0) {
			document.location = "http://www.nba.com/games/" + gs.GAMECODE + "/gameinfo.html";
		}
		
		// parse boxscore data
		var data = parseBoxscoreData(resp);
		DATA = data;

		// request play by play
		initPlaybyplayRequest();
		
		// hide loader
		$('.loader').hide();

		// ROHIT - call dojo stuff here
		//Set the title of the team
		$("#homeTeamTitle").html(data.teams.htm.TEAM_CITY + " " + data.teams.htm.TEAM_NAME);
		$("#visitTeamTitle").html(data.teams.vtm.TEAM_CITY + " " + data.teams.vtm.TEAM_NAME);
	
		//Call Grid functions
		initGameDetailBoxscoreGrids(data,options);
		
		var gameSeason = parseInt(data.game.SEASON, 10);

		// render template for each data set
		renderMatchupHeader(data);
		renderGameWinner(data);
 		renderGameHeader(data);
		renderScoreboard(data);
		renderLastMeetingInfo(data);
		renderMiscGameDetails(data);
		//renderCurrentSeriesInfo(data);
		renderOfficials(data);
		renderMainGameDetailsForTeam("vtm", data.teams.vtm, gameSeason);
		renderMainGameDetailsForTeam("htm", data.teams.htm, gameSeason);
		renderTimeFilterButtons(data);
		renderBoxscoreScrubber(data);
		
		if (gameSeason < 1996) {
			$("#stat-filter-section").hide();
		}
		
		//Scroll page to top
		$('html, body').animate({ scrollTop: 0 }, 0);		
	};



	/*** BOXSCORE REQUEST ***/

	var initBoxscoreStatRequest = function () {
		if (!options.init) {
			return;
		}

		//Destroy grid
		for(var count=0;count<gameDetailBoxscoreStat.currentGrids.activeGrids.length;count++){
			destroyGrid(gameDetailBoxscoreStat.currentGrids.activeGrids[count]);
		}
		gameDetailBoxscoreStat.currentGrids.activeGrids = [];
		gameDetailBoxscoreStat.currentGrids.loadedGrids = [];
		
		//Hide all the swipe indicator
		$(".dojoSliderContainer").hide();

		// show loader
		$('.loader').show();

		// AJAX request
		$.getStats(options.feed.boxscore, options.params.boxscore, onBoxscoreStatRequestCallback);
	};

	var onBoxscoreStatRequestCallback = function (resp) {

		if (!resp) {
			return;
		}

		// parse boxscore data
		var data = parseBoxscoreData(resp);
		
		// hide loader
		$('.loader').hide();
		
		// ROHIT - call dojo stuff here
		initGameDetailBoxscoreGrids(data,options);
	};

	
	
	
	
	/*** PLAY BY PLAY REQUEST ***/

	var initPlaybyplayRequest = function () {
		if (!options.init) {
			return;
		}

		// AJAX request
		$.getStats(options.feed.playbyplay, options.params.playbyplay, onPlaybyplayCallback);
	};

	var onPlaybyplayCallback = function (resp) {
		if (!resp) {
			return;
		}

		var pbp = resp.sets.PlayByPlay.datatable;
		var periods = parsePlayByPlayData(pbp);

		renderPlayByPlayTable({vtm: options.teams.vtm, htm: options.teams.htm, items:pbp, periods:periods});
		renderPlayByPlayEventDropdowns(pbp);
	};






	/*** PARSING ***/

	var parseBoxscoreData = function (resp) {
		var data = {};

		data.game = resp.sets.GameSummary.datatable[0];
		data.gameinfo = resp.sets.GameInfo.datatable[0];
		data.officials = resp.sets.Officials.datatable;
		data.series = resp.sets.SeasonSeries.datatable[0];
		data.lastMeeting = resp.sets.LastMeeting.datatable[0];
		data.teams = {};

		data.game.VISITOR_TEAM_ID += "";
		data.game.HOME_TEAM_ID += "";

		data.hidePeriod = function(period) {
			return (data.game.LIVE_PERIOD < period) ? "inactive" : "";
		}

		data.teams.vtm = parseTeamDetails(data.game.VISITOR_TEAM_ID, resp, 'vtm');
		data.teams.htm = parseTeamDetails(data.game.HOME_TEAM_ID, resp, 'htm');
		
		//take out east and west from team city for all star team.
		
		if(qp.SeasonType=='All Star'){
			data.teams.vtm.TEAM_CITY=data.teams.vtm.TEAM_CITY.replace('East','').replace('West','');
			data.teams.htm.TEAM_CITY=data.teams.htm.TEAM_CITY.replace('East','').replace('West','');
		}
		
		return data;
	};

	var parseTeamDetails = function (teamID, resp, team) {

		var teamObj = $.grep(resp.sets.TeamStats.datatable, function (n) { return (n.TEAM_ID == teamID); })[0];

		teamObj.leaders = [];
		teamObj.gameStats = $.grep(resp.sets.TeamStats.datatable, function (n) { return (n.TEAM_ID == teamID); })[0];
		teamObj.linescore = $.grep(resp.sets.LineScore.datatable, function (n) { return (n.TEAM_ID == teamID); })[0];
		teamObj.inactive = $.grep(resp.sets.InactivePlayers.datatable, function (n) { return (n.TEAM_ID == teamID); });
		teamObj.playerStats = $.grep(resp.sets.PlayerStats.datatable, function (n) { return (n.TEAM_ID == teamID); });
		teamObj.otherStats = $.grep(resp.sets.PlayerStats.datatable, function (n) { return (n.TEAM_ID == teamID); });
		
		teamObj.linescore.TWL = (teamObj.linescore.TEAM_WINS_LOSSES=="0-0") ? "" : "(" + teamObj.linescore.TEAM_WINS_LOSSES + ")";
		
		
		//take out east and west from team city for all star team.
		
		if(qp.SeasonType=='All Star'){
			teamObj.TEAM_CITY=teamObj.TEAM_CITY.replace('East','').replace('West','');
			
		}	
		
		options.teams[team] = {
			abbr:teamObj.TEAM_ABBREVIATION,
			city:teamObj.TEAM_CITY,
			id:teamObj.TEAM_ID,
			name:teamObj.TEAM_NAME
		};
		return teamObj;
	};

	var parseLeadersForTeamAndStat = function (team, cat) {
		//THIS APPROACH DOES NOT WORK BECAUSE IT MESSES WITH THE SORT FOR THE BOXSCORE PLAYERS, and results in the wrong person (i.e. not the high for the game) - jled
		var ldr = team.playerStats.sort( function(a, b) { return (a[cat]<= b[cat]); })[0];
		var obj = {
			CAT : cat,
			PLAYER_NAME: ldr.PLAYER_NAME,
			VALUE: ldr[cat]
		};
		team.leaders.push(obj);
	};

	var parsePlayByPlayData = function (pbp) {

		$.each(pbp, function (i, n) {
			n.decimalTime = toDecimalTime(n.PERIOD, n.PCTIMESTRING); 
		})

		var periods = _.map(_.pairs(_.groupBy(pbp, function(n) {return n.PERIOD})), function(n) { return {key:n[0], value:n[1]}; });
		return periods;
	};

	var parseScrubberTime = function (time) {
		var maxReg = 28800;
		var period, min, pmin, sec, psec, ptime;
		
		if (time<=maxReg) {
			period = Math.max(1, Math.ceil(time/7200));
			ptime = period * 7200 - time;
			
			min = (ptime / 600);
			pmin = Math.floor(min);
			sec = Math.floor((min - pmin) * 60);
		} 


		if (time > maxReg) {
			var overtime = time - 28800;
			period = Math.max(1, Math.ceil(overtime/3000)) + 4;
			ptime = ((period-4) * 3000) - overtime;

			min = (ptime / 600);
			pmin = Math.floor(min);
			sec = Math.floor((min - pmin) * 60);
		}
				
		if (period==0 && min==0) {
			period = 1;
			min = 12;
		}
		
		if (period > DATA.game.LIVE_PERIOD) {
			period = DATA.game.LIVE_PERIOD;
			pmin = 0;
			sec = 0;
		}

		var time = pmin + ":" + $.padZero(sec); 
		
        return {period:period,  time:time};		
	};

	var toDecimalTime = function (period, timeString) { 
		var ts = timeString.split(":");
		
		var min = parseInt(ts[0]);
		var sec = parseInt(ts[1]);
		var maxReg = 28800;
		var time = 0;
		
		if (period<=4) {
			time = ((period-1) * 7200) + (7200 - (min * 600 + sec * 10))
		} else {
			var ots = period - 4;
			time = ((ots-1) * 3000) + (3000 - (min * 600 + sec * 10))
			time += maxReg;
		}
	
		return time;
	};


	/*** VIEW METHODS ***/

	var renderMatchupHeader = function (data) {
		var $elm = $('#matchup-header');

		var v = data.teams.vtm;
		var h = data.teams.htm;
		
		
		var gcd = data.game.GAMECODE.substr(0,8);
		var d = gcd.substr(6,2);
		var m = gcd.substr(4,2);
		var y = gcd.substr(0,4);
		var gamedate = m + "/" + d + "/" + y;

		var txt = (IS_MOBILE) ?  
			  v.TEAM_ABBREVIATION + " @ " + h.TEAM_ABBREVIATION + " - " + dateFormat(gamedate, "mm/dd/yyyy")	
			: v.TEAM_CITY + " " + v.TEAM_NAME + " @ " + h.TEAM_CITY + " " + h.TEAM_NAME + " - " + dateFormat(gamedate, "dddd, mmmm dS, yyyy")
		$elm.text(txt);
	};

	var renderGameHeader = function (data) {
		var $elm = $("#main-details > .scoreboard");
		$elm.find('.game-status').text(data.game.GAME_STATUS_TEXT);
		$elm.find('.highlights').attr("href", "http://www.nba.com/games/" + data.game.GAMECODE + "/gameinfo.html#nbaVideoPlayer");
		$elm.find('.story').attr("href", "http://www.nba.com/games/" + data.game.GAMECODE + "/gameinfo.html#nbaGIlive");
		$elm.find('.tvc').attr("href", "http://www.nba.com/tvc/index.html?gamecode=" + data.game.GAMECODE);
	};

	var renderScoreboard = function (data) {
		var $elm = $("#main-details table.line-score");
		
		//All Star
		if( data.teams.htm.TEAM_ABBREVIATION == "EST" ||
			data.teams.htm.TEAM_ABBREVIATION == "WST" ||
			data.teams.htm.TEAM_ABBREVIATION == "SHQ" ||
			data.teams.htm.TEAM_ABBREVIATION == "CHK" 
		){ data.AllStarFlag = "true"; }
		else{data.AllStarFlag = "false"; }
		
		//Temporary Hornet to Pelican Conversion
		var props = ["TEAM_ABBREVIATION"];
		var chnageFrom = "NOH";
		var chnageTo = 	"NOP";
		window.hornetsToPelicans(data.teams.htm,chnageFrom,chnageTo,props);
		window.hornetsToPelicans(data.teams.vtm,chnageFrom,chnageTo,props);
		
		$.tmpl("lineScore", data).appendTo($elm);
	};

	var renderCurrentSeriesInfo = function (data) {
		/* THE BELOW DOES NOT WORK FOR PLAYOFF SERIES AND NEEDS TO BE REWORKED PHASE 2
		var $elm = $("#main-details .current-series");

		var series = data.series;
		var lmstr = "";

		if (series.SERIES_LEADER == 'Tied') {
			lmstr = "Series Tied  (" + series.HOME_TEAM_LOSSES + " - " + series.HOME_TEAM_WINS + ")";
		} else {
			lmstr = series.SERIES_LEADER + " leads (" + series.HOME_TEAM_LOSSES + " - " + series.HOME_TEAM_WINS + ")";
		}

		$elm.text(lmstr);
		*/
	};

	var renderLastMeetingInfo = function (data) {
		var $elm = $("#main-details > .scoreboard");

		var lm = data.lastMeeting;
		if (!lm) { return; }

		var lmstr = "Last Meeting: " + lm.LAST_GAME_VISITOR_TEAM_CITY + " " + lm.LAST_GAME_VISITOR_TEAM_POINTS + " - " + lm.LAST_GAME_HOME_TEAM_CITY + " " + lm.LAST_GAME_HOME_TEAM_POINTS;
		$elm.find('.last-meeting').text(lmstr);
	};

	var renderMainGameDetailsForTeam = function (team, ds, gameSesason) {
		var $elm = $("#main-details > .team." + team);


		
		var season = $.yearToSeason(gameSesason);
		
		//Common for Allstar and other SeasonType
		$elm.find('.logo').addClass(ds.TEAM_ABBREVIATION);
		$elm.find('.score').text(ds.PTS);
		
		var $leaders = $.tmpl('teamLeaders', ds.leaders);
		$elm.find('.team-leaders').append($leaders);
		//Allstar Games
		if(	ds.TEAM_ABBREVIATION == "EST" || 
			ds.TEAM_ABBREVIATION == "WST" ||
			ds.TEAM_ABBREVIATION == "SHQ" || 
			ds.TEAM_ABBREVIATION == "CHK" ){
			$elm.find('.team-link').attr('href', '/teamProfile.html?TeamID=' + ds.TEAM_ID + "&SeasonType=All Star");
			var $ul = $elm.find('.other-links');
			$('<li></li>').append($('<a></a>').attr('href', '/teamGameLogs.html?TeamID=' + ds.TEAM_ID + '&Season=' + season + "&SeasonType=All Star").text('Team Game Logs')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamProfile.html?TeamID=' + ds.TEAM_ID + '&Season=' + season + "&SeasonType=All Star").text('Team Profile')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamYoYStats.html?TeamID=' + ds.TEAM_ID + '&Season=' + season + "&SeasonType=All Star").text('Team History')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamShotchart.html?TeamID=' + ds.TEAM_ID + '&Season=' + season + "&SeasonType=All Star").text('Team Shot Charts')).appendTo($ul);
		}
		//Other SeasonType
		else{
			$elm.find('.team-link').attr('href', '/teamProfile.html?TeamID=' + ds.TEAM_ID);
			var $ul = $elm.find('.other-links');
			$('<li></li>').append($('<a></a>').attr('href', '/teamGameLogs.html?TeamID=' + ds.TEAM_ID + '&Season=' + season).text('Team Game Logs')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamProfile.html?TeamID=' + ds.TEAM_ID + '&Season=' + season).text('Team Profile')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamSeasons.html?TeamID=' + ds.TEAM_ID + '&Season=' + season).text('Team History')).appendTo($ul);
			$('<li></li>').append($('<a></a>').attr('href', '/teamShotchart.html?TeamID=' + ds.TEAM_ID + '&Season=' + season).text('Team Shot Charts')).appendTo($ul);
		}

		//Data not availabe before 2007 from backend	
		//if (gameSesason < 1996) {
		if (gameSesason < 2007) {
			$elm.find('.lineups').hide();
		} else {
			if(qp.SeasonType!=undefined && qp.Season!=undefined ){
			$elm.find('.lineups a').attr('href', '/teamLineups.html?LeagueID=00&GameID=' + ds.GAME_ID + '&TeamID=' + ds.TEAM_ID +'&SeasonType=' + qp.SeasonType + '&Season=' + qp.Season);
			}
			else{
			$elm.find('.lineups a').attr('href', '/teamLineups.html?LeagueID=00&GameID=' + ds.GAME_ID + '&TeamID=' + ds.TEAM_ID);

			}
		}
	};

	var renderMiscGameDetails = function (data) {
		$("#main-details .attendance").text("Attendance: " + data.gameinfo.ATTENDANCE);
		$("#main-details .gamelength").text("Game Length: " + data.gameinfo.GAME_TIME);	
	};
	
	var renderOfficials = function (data) {
		var $ul = $("#main-details .officials ul");
		$.each(data.officials, function (i, n) {
			$("<li></li>").text("#" + n.JERSEY_NUM + " - " + n.FIRST_NAME + " "  + n.LAST_NAME).appendTo($ul);
		});
	};
	
	var renderPlayByPlayTable = function (data) {
		if (IS_MOBILE) {
			$.tmpl("mobilePlayByPlay", data).appendTo("#playbyplay");
		} else {
			$.tmpl("playByPlay", data).appendTo("#playbyplay");
		}
	};

	var renderGameWinner = function (data) {
		var $vtm = $("#main-details > .team.vtm");
		var $htm = $("#main-details > .team.htm");

		if (data.teams.htm.PTS > data.teams.vtm.PTS) {
			$vtm.removeClass("win");
			$htm.addClass("win");
		} else if (data.teams.htm.PTS < data.teams.vtm.PTS){
			$htm.removeClass("win");
			$vtm.addClass("win");
		}
	};

	var renderTimeFilterButtons = function (data) {
		// get num periods
		var periods = data.game.LIVE_PERIOD;

		if (periods <= 4) {
			return;
		}

		// calc # of ot periods
		var ots = periods - 4;

		// select buttons for ot periods
		$('#stat-filter-section li.otg').show();
		$('#stat-filter-section li.ot').slice(0,ots).show();
	};

	var renderBoxscoreScrubber = function (data) {
		var numPeriods = data.game.LIVE_PERIOD;
		var max;
		
		if (numPeriods <= 4) {
			max = 7200 * numPeriods;
		} else {
			var numOT = numPeriods - 4;
			max = 28880 + (3000 * numOT);
		}
		
		// todo draw period markers
		
		$("#slider-range").slider({
		  range: true,
		  min: 0,
		  max: max,
		  values: [0, max],
		  slide: onScrubberChange,
		  stop: onScrubberStop,
		  step : 100
		});
		
		
		var alpha = parseScrubberTime(0);
		var omega = parseScrubberTime(max);
		$eventAlpha.text(alpha.period + "Q - " + alpha.time);
		$eventOmega.text(omega.period + "Q - " + omega.time);
	};
	
	var renderPlayByPlayEventDropdowns = function (pbp) {
		var html = $.tmpl("scrubberDropdownItem", pbp);

		var $alpha = $("#event-alpha");
		var $omega = $("#event-omega");

		$alpha.find('ul').append(html.clone()).find('li').first().find('a').addClass("selected");
		$omega.find('ul').append(html.clone()).find('li').last().find('a').addClass("selected");

		$alpha.droplist({onChange: onEventAlphaDropdownChange});
		$omega.droplist({onChange: onEventOmegaDropdownChange});		
	};
	

	/*** DOM EVENTS ***/

	var onTimeFilterClick = function (e) {
		e.preventDefault();
		e.stopPropagation();

		var $fs = $('#stat-filter-section');

		if ( $fs.hasClass('opened') ) {
			$fs.removeClass('opened').addClass('closed');
		} else {
			$fs.removeClass('closed').addClass('opened');
		}
	};

	var onRangeSelectClick = function (e) {
		e.preventDefault();
		e.stopPropagation();

		$('#stat-filter-section .range-select').removeClass('ui-active');
		var $this = $(this).addClass('ui-active');

		var from = $this.attr('from');
		var to = $this.attr('to');

		options.params.boxscore.RangeType = 2;
		options.params.boxscore.StartRange = from;
		options.params.boxscore.EndRange = to;

		initBoxscoreStatRequest();
	};

	var onScrubberChange = function (e, ui) {
		var alpha = parseScrubberTime(ui.values[0]);
		var omega = parseScrubberTime(ui.values[1]);
		
		$eventAlpha.text(alpha.period + "Q - " + alpha.time);
		$eventOmega.text(omega.period + "Q - " + omega.time);
	};

	var onScrubberStop = function (e, ui) {
		var s = ui.values[0];
		var e = ui.values[1];

		var alpha = parseScrubberTime(s);
		var omega = parseScrubberTime(e);
		
		$eventAlpha.text(alpha.period + "Q - " + alpha.time);
		$eventOmega.text(omega.period + "Q - " + omega.time);

		options.params.boxscore.RangeType = 2;
		options.params.boxscore.StartRange = s;
		options.params.boxscore.EndRange = e;

		initBoxscoreStatRequest();
	};

	var onEventAlphaDropdownChange = function (value, text) {
		options.eventScrubber.startRange = value;
	};

	var onEventOmegaDropdownChange = function (value, text) {
		options.eventScrubber.endRange = value;
	};

	var onEventUpdateClick = function (e) {
		e.preventDefault();

		options.params.boxscore.RangeType = 2;


		var start = $("#event-alpha").find("> a").attr("value");
		var end = $("#event-omega").find("> a").attr("value");

		var start = parseInt(start, 10);
		var end = parseInt(end, 10);

		if (start > end) {
			var t = start;
			start = end;
			end = t;
		}

		options.params.boxscore.StartRange = start;
		options.params.boxscore.EndRange = end;

		initBoxscoreStatRequest();
	};


	/*** INIT ***/

	var init = (function () {

		// get query string parameters
		qp = $.getQueryParameters();

		// if gameid is not provided, redirect to scores.html
		if (!qp || (!qp.GameID)) {
			document.location = "/scores.html";
		}

		// extend default options with ones provided in URL
		options.params.boxscore = $.extend(options.params.boxscore, qp);
		options.params.playbyplay = $.extend(options.params.playbyplay, qp);

		// init tabs
		var defaultIndex = (document.location.hash=="#playbyplay") ? 1 : 0;
		$("ul.nav-main").tabs("div.content-main > div", { initialIndex: defaultIndex });

		// init time filter showey thingy
		$('#time-filter').click(onTimeFilterClick);

		// init time filter buttons
		$('#stat-filter-section .range-select').click(onRangeSelectClick);

		// compile templates
		$.each(templates, function(k,v){
			$.template(k, v);
		})

		// init event handler for event scrubber
		$("#event-range-update").click(onEventUpdateClick);
		
		//On resize window
		var _semaphorRS = null;
			dojo.connect(window,"resize",function(){
			 if (_semaphorRS != null) clearTimeout(_semaphorRS);
			 _semaphorRS = setTimeout(resize_grid, 500);
		});

		//First time from PlayByPlay to BoxScore	
		//Redraw the grids on firsdt time disaply of boxscore	
		$("ul.nav-main li.boxscore").one("click",resize_grid);

		// finished init - allow requests
		options.init = true;

		// make request for boxscore
		initStatRequest();

	}());

});