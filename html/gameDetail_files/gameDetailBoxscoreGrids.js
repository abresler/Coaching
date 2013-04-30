//gameDetailBoxscoreGrids.js
var player_info = function(inValue, index, cell){
	var rowdata = this.grid.getItem(index);
	if(rowdata.PLAYER_ID && rowdata.PLAYER_ID != "") {
		var sp = (rowdata.START_POSITION != "") ? " - " + rowdata.START_POSITION : "";
		retVal = '<a href="/playerStats.html?PlayerID='+rowdata.PLAYER_ID+'">'+rowdata.PLAYER_NAME+ sp +'</a>';
	} else {
		retVal = rowdata.PLAYER_NAME;
	}
	return retVal;
};


// Grid Formatter Functions
//Current grid configuration to use in formatter function
var currentGridConfig = {
        "subCategory" : "Base",
        "PerMode" : "Totals",
        "PaceAdjust" : "N",
		"Rank" : "N",
};

//Current Page Status in String format to pass the information as a query String in ShotChart Link
var currentGridShotChartParams = "";


//Shot Chart Links
var toPercentageOneDecimal_shotChart = function(inValue, index, cell){
	var rank = currentGridConfig.Rank;
	//Get row data
	var rowdata = this.grid.getItem(index);
	
	//If vlaue is not a number or NULL Ignore the formatting
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		//On Ranking On Do not create Link to ShotChart	
		if(rank == "Y") { retVal = parseInt(inValue); }
		else if (rowdata.SeasonCalYear[0] >= 1996){
			var data = (inValue*100).toFixed(1)+"%";
			var SeasonType = ["Preseason","Regular Season","All Star","Playoffs"];
			var SeasonTypeItem = SeasonType[Number(rowdata.GAME_ID[0].charAt(2))-1];
			//var QString = "SeasonType="+SeasonType+"&Season="+Season+"&TeamID="+TeamID+"&PlayerID="+PlayerID+"&GameID="+GameID+"&ContextMeasure="+contextMeasure+"&ContextFilter=TEAM_GAME_LOCATION%3D'"+Location+"'";		
			var QString = "";		
			QString += "SeasonType=" + SeasonTypeItem; 
			if(rowdata.SeasonYear[0] != "") 		{ QString += "&Season=" + rowdata.SeasonYear[0]; }
			if(rowdata.TEAM_ID[0]) 		{ QString += "&TeamID=" + String(rowdata.TEAM_ID[0]); }
			if(rowdata.PLAYER_ID[0]) 		{ QString += "&PlayerID=" + String(rowdata.PLAYER_ID[0]); }
			if(cell.field != "") 			{ QString += "&ContextMeasure=" + cell.field; }
			if(rowdata.Location[0] != "") 		{ QString += "&ContextFilter=TEAM_GAME_LOCATION%3D'" + rowdata.Location[0] + "'"; }
			QString += "&"+currentGridShotChartParams;
			retVal = '<a rel="shotchart" style="text-decoration: none;" href="/shotchartPopup.html?'+QString+'">'+data+'</a>';
		}
		else{
			var retVal = (inValue*100).toFixed(1)+"%";
		}
	}
	return retVal;
};

//Shot Chart Links
var FGTMA_formatter_shotChart = function(inValue, index, cell){
	var data = inValue;
	//Get row data
	var rowdata = this.grid.getItem(index);
	
	//If value is a number or null value
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		data = parseInt(inValue);
		if (rowdata.SeasonCalYear[0] >= 1996){
			var SeasonType = ["Preseason","Regular Season","All Star","Playoffs"];
			//Get row data
			var rowdata = this.grid.getItem(index);
			var SeasonTypeItem = SeasonType[Number(rowdata.GAME_ID[0].charAt(2))-1];
			//var QString = "SeasonType="+SeasonType+"&Season="+Season+"&TeamID="+TeamID+"&PlayerID="+PlayerID+"&GameID="+GameID+"&ContextMeasure="+contextMeasure+"&ContextFilter=TEAM_GAME_LOCATION%3D'"+Location+"'";		
			var QString = "";		
			QString += "SeasonType=" + SeasonTypeItem; 
			if(rowdata.SeasonYear[0] != "") 		{ QString += "&Season=" + rowdata.SeasonYear[0]; }
			if(rowdata.TEAM_ID[0]) 		{ QString += "&TeamID=" + String(rowdata.TEAM_ID[0]); }
			if(rowdata.PLAYER_ID[0]) 		{ QString += "&PlayerID=" + String(rowdata.PLAYER_ID[0]); }
			if(cell.field != "") 			{ QString += "&ContextMeasure=" + cell.field; }
			if(rowdata.Location[0] != "") 		{ QString += "&ContextFilter=TEAM_GAME_LOCATION%3D'" + rowdata.Location[0] + "'"; }
			QString += "&"+currentGridShotChartParams;
			retVal = '<a rel="shotchart" style="text-decoration: none;" href="/shotchartPopup.html?'+QString+'">'+data+'</a>';
		}
		else{
			retVal = data;
		}
	}
	return retVal;

};

/*** Grid Configuration ***/
var gameDetailBoxscoreStat = {
		"mainCategory" : {
			"default": {"total": 2, "items": ["Home","Visit"]}
		},
		"dataParts": ["htm","vtm"],
		"subCategory" : {
			"default" :  ["MIN","FGM","FGA","FG_PCT","FG3M","FG3A","FG3_PCT","FTM","FTA","FT_PCT","OREB","DREB","REB","AST","TO","STL","BLK","PF","PTS","PLUS_MINUS"]
		},
		"currentGrids" :{
			"category" : "default",
			"subCategory" : "default",
			"activeGrids" : [],
			"loadedGrids" : [],
			"response": {}
		},
		"layoutConfig": {
			"Home" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '155px', styles: 'text-align: left; padding-left:7px;', formatter: player_info},
			"Visit" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '155px', styles: 'text-align: left; padding-left:7px;', formatter: player_info},
			
			"MIN": 		{width: '40px', datatype: "string", styles: 'text-align: center;'},
			"FGM": 		{width: '40px', formatter: FGTMA_formatter_shotChart},
			"FGA": 		{width: '40px', formatter: FGTMA_formatter_shotChart},
			"FG_PCT": 	{width: '45px', formatter: toPercentageOneDecimal_shotChart},
			"FG3M": 	{width: '40px', formatter: FGTMA_formatter_shotChart},
			"FG3A": 	{width: '40px', formatter: FGTMA_formatter_shotChart},
			"FG3_PCT": 	{width: '45px', formatter: toPercentageOneDecimal_shotChart},
			"FTM": 		{width: '40px', formatter: window.toInteger},
			"FTA": 		{width: '40px', formatter: window.toInteger},
			"FT_PCT": 	{width: '45px'},
			"OREB": 	{width: '45px', formatter: window.toInteger},
			"DREB": 	{width: '45px', formatter: window.toInteger},
			"REB": 		{width: '45px', formatter: window.toInteger},
			"AST": 		{width: '40px', formatter: window.toInteger},
			"TO": 		{width: '40px', formatter: window.toInteger},
			"STL": 		{width: '40px', formatter: window.toInteger},
			"BLK": 		{width: '40px', formatter: window.toInteger},
			"PF": 		{width: '40px', formatter: window.toInteger},
			"PTS": 		{width: '40px', formatter: window.toInteger},
			"PLUS_MINUS": {width: '40px', formatter: window.toInteger}
		},
		"layoutConfig_safari": {
			"Home" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '122px', styles: 'text-align: left; padding-left:3px;', formatter: player_info},
			"Visit" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '122px', styles: 'text-align: left; padding-left:3px;', formatter: player_info},
			
			"MIN": 		{width: '44px', datatype: "string", styles: 'text-align: center;'},
			"FGM": 		{width: '44px', formatter: FGTMA_formatter_shotChart},
			"FGA": 		{width: '44px', formatter: FGTMA_formatter_shotChart},
			"FG_PCT": 	{width: '49px', formatter: toPercentageOneDecimal_shotChart},
			"FG3M": 	{width: '44px', formatter: FGTMA_formatter_shotChart},
			"FG3A": 	{width: '44px', formatter: FGTMA_formatter_shotChart},
			"FG3_PCT": 	{width: '49px', formatter: toPercentageOneDecimal_shotChart},
			"FTM": 		{width: '44px', formatter: window.toInteger},
			"FTA": 		{width: '44px', formatter: window.toInteger},
			"FT_PCT": 	{width: '49px'},
			"OREB": 	{width: '49px', formatter: window.toInteger},
			"DREB": 	{width: '49px', formatter: window.toInteger},
			"REB": 		{width: '49px', formatter: window.toInteger},
			"AST": 		{width: '49px', formatter: window.toInteger},
			"TO": 		{width: '49px', formatter: window.toInteger},
			"STL": 		{width: '49px', formatter: window.toInteger},
			"BLK": 		{width: '44px', formatter: window.toInteger},
			"PF": 		{width: '44px', formatter: window.toInteger},
			"PTS": 		{width: '44px', formatter: window.toInteger},
			"PLUS_MINUS": {width: '44px', formatter: window.toInteger}
		},
		"layoutConfig_Mobile": {
			"Home" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '100px', styles: 'text-align: left; padding-left:3px;', formatter: player_info},
			"Visit" : {name: 'Players', field: 'PLAYER_ID', datatype:"string", width: '100px', styles: 'text-align: left; padding-left:3px;', formatter: player_info},
			
			"MIN": 		{width: '50px', datatype: "string", styles: 'text-align: center;'},
			"FGM": 		{width: '50px', formatter: FGTMA_formatter_shotChart},
			"FGA": 		{width: '50px', formatter: FGTMA_formatter_shotChart},
			"FG_PCT": 	{width: '50px', formatter: toPercentageOneDecimal_shotChart},
			"FG3M": 	{width: '50px', formatter: FGTMA_formatter_shotChart},
			"FG3A": 	{width: '50px', formatter: FGTMA_formatter_shotChart},
			"FG3_PCT": 	{width: '50px', formatter: toPercentageOneDecimal_shotChart},
			"FTM": 		{width: '50px', formatter: window.toInteger},
			"FTA": 		{width: '50px', formatter: window.toInteger},
			"FT_PCT": 	{width: '50px'},
			"OREB": 	{width: '50px', formatter: window.toInteger},
			"DREB": 	{width: '50px', formatter: window.toInteger},
			"REB": 		{width: '50px', formatter: window.toInteger},
			"AST": 		{width: '50px', formatter: window.toInteger},
			"TO": 		{width: '50px', formatter: window.toInteger},
			"STL": 		{width: '50px', formatter: window.toInteger},
			"BLK": 		{width: '50px', formatter: window.toInteger},
			"PF": 		{width: '50px', formatter: window.toInteger},
			"PTS": 		{width: '50px', formatter: window.toInteger},
			"PLUS_MINUS": {width: '50px', formatter: window.toInteger, styles: 'text-align: left; padding-left: 30px !important;', headerStyles: 'padding-left: 20px !important;'}
		}
};
/*** Grid Configuration ***/

/*** Grid Methods ***/
//Resize all current active grids
var resize_grid = function(){
	var gridCount = 0;
	var currentGrids = gameDetailBoxscoreStat.currentGrids.activeGrids;
	for(gridCount=0; gridCount<currentGrids.length; gridCount++){
	 var grid = dijit.byId(currentGrids[gridCount]);
		if(grid){
		 grid.resize();
		 grid.update();
		}
	}
};

//Standard function to init grid
//Pass the required parameters to init a Dojo Grid
var initGrid = function(gridId,store,layout,gridContainerId, mergeRows){
		//If Grid exist destriy first		
		var grid = dijit.byId(gridId);
		if(grid) grid.destroy();
		
		//Merged rows
		//Need to add this information in grid for comment field instead of displaying Blank Rows
		var pluginMerge = {};
		if(mergeRows.length > 0){
			var mergedCells = [];
			for(var count=0;count<mergeRows.length;count++){
				if(IS_MOBILE)
					mergedCells.push({row: mergeRows[count], start: 1, end: 20, major: 20});
				else
					mergedCells.push({row: mergeRows[count], start: 1, end: 20, major: 1});
			}
			pluginMerge = {
				cellMerge: {
					mergedCells: mergedCells
				}
			};		
		}
		
		var grid = new dojox.grid.EnhancedGrid({
			id: gridId,
			store: store,
			structure: layout,
			rowSelector: '0px',
			autoWidth: false,
			autoHeight: true,
			plugins: pluginMerge
		}, document.createElement('div'));
		
		//append the new grid to the div
		dojo.byId(gridContainerId).appendChild(grid.domNode);

		//Call startup() to render the grid
		grid.startup();
		
		grid.canSort = function(index) {  
			if(index == 1) return false;
			return true;
		};
		
		grid.sort = function() {  
			//Get the column number for sort operation
			var targetColumn = Math.abs(grid.sortInfo) - 2;
			
			//Original Dojo Sort function content End
			var order = grid.getSortAsc();
			
			//Custom Sort function Start
			var num1 = 0;
			var num2 = 0;

			grid._by_idx.sort(dojo.hitch(grid, function (item1, item2) {
				var lastItem = grid.store._arrayOfAllItems.length-1;
				var col = gameDetailBoxscoreStat.subCategory["default"][targetColumn];
				
				num1 = item1.item[col][0];
				num2 = item2.item[col][0];
				
				//Descending Sort Order
				if (order) {
					//Sort MIN data 
					if(targetColumn == 0){
						num1 = Number(String(num1).replace(":", "."));
						num2 = Number(String(num2).replace(":", "."));
					}
					
					//If one of the number is null or Nan
					if((num1 == null && num2 != null) || (isNaN(num1))){ num2 = 1; num1 = 0; }
					if((num2 == null && num1 != null) || (isNaN(num2))){ num1 = 1; num2 = 0; }
					//Do not consider total row column data in sort	
					if(item1.idty == lastItem){	num1 = 0; num2 = 1;}
					if(item2.idty == lastItem){	num2 = 0; num1 = 1;}

					return (num1 == num2 ? 0 : (num1 < num2 ? 1 : -1));
				}
				//Ascending Sort Order
				else {
					//Sort MIN data 
					if(targetColumn == 0){
						num1 = Number(String(num1).replace(":", "."));
						num2 = Number(String(num2).replace(":", "."));
					}
					
					if((num1 == null && num2 != null) || (isNaN(num1))){ num2 = 0; num1 = 1; }
					if((num2 == null && num1 != null) || (isNaN(num2))){ num1 = 0; num2 = 1; }
					//Do not consider total row column data in sort	
					if(item1.idty == lastItem){	num1 = 1; num2 = 0;}
					if(item2.idty == lastItem){	num2 = 1; num1 = 0;}
					
					return (num1 == num2 ? 0 : (num1 < num2 ? -1 : 1));
				}
			}));

			//Update the sorted data to grid
			grid.updateRows(0, grid._by_idx.length);
			//Custom Sort function End
		};
		
		//Loaded Grids
		gameDetailBoxscoreStat.currentGrids.loadedGrids.push(gridId);
};

//Destroy the grid
var destroyGrid = function(gridId){
	var grid = dijit.byId(gridId);
	if(grid) grid.destroy();
};

//Calculate the layout to create a Grid
//Pass the Category and SubCategory of the Stat Tab configuration
var calcLayout = function( subCat, view){

	var browserPrefix = "";	
	if(dojo.has("chrome") || dojo.has("ff") || dojo.has("mozilla")){
	}
	else if(dojo.has("webkit")){
		browserPrefix = "_safari";
	}
	else if(dojo.has("ie")){
		browserPrefix = "";
	}
	else{
	}
	
	if(IS_MOBILE){
		browserPrefix = "_Mobile";
	}
	
	//Do not scroll First coulmn
	var noScrollCells = [];
	//Scroll all other columns
	var scrollCells = [];

	var layoutConfig = "layoutConfig" + browserPrefix;
	if(gameDetailBoxscoreStat[layoutConfig][view+"_"+subCat])
		noScrollCells.push( gameDetailBoxscoreStat[layoutConfig][view+"_"+subCat] );
	else
		noScrollCells.push( gameDetailBoxscoreStat[layoutConfig][view] );
	
	var commonColumns;
	if(gameDetailBoxscoreStat.subCategory[subCat+"_"+view])
		commonColumns = gameDetailBoxscoreStat.subCategory[subCat+"_"+view];
	else
		commonColumns = gameDetailBoxscoreStat.subCategory[subCat];
		
	var colCount;
	for(colCount=0; colCount<commonColumns.length;colCount++){
		scrollCells.push(dojo.mixin(window.masterLayoutConfig[commonColumns[colCount]], gameDetailBoxscoreStat[layoutConfig][commonColumns[colCount]]));
	}

	var layout = [{
		noscroll: true,
		cells: noScrollCells
	},
	{
		cells: scrollCells
	}];
	
    return layout;
};

//Update the store of a particular Grid
//Pass the Grid ID and new data
var updateGridStore = function(gridId,store){
	var grid = dijit.byId(gridId);
	//Update data store
	if(grid) grid.setStore(store);
};


//Init All Grids
var initGameDetailBoxscoreGrids = function(resp,options){

		//Save the current parameter for ShotChart link information
		currentGridShotChartParams = window.makeQueryStringFromObject(options.params.boxscore);

		//Category
		var cat = "default";
		var subCat = "default";
		//Possible combination for selected category and subcategory
		var perMainCat = gameDetailBoxscoreStat.mainCategory[cat];
		var SeasonCalYear = parseInt(resp.game.SEASON);
		var SeasonYear = $.yearToSeason(parseInt(resp.game.SEASON));
	
		var contCount;
		//Create or Display required grid container for selected category and subCategory
		for(contCount=0;contCount<perMainCat.total;contCount++){
			//Grid Container ID
			var containerId = "gameDetailBoxscore" + perMainCat.items[contCount] + "GridContainer";
			//Grid ID
			var gridId = "gameDetailBoxscore" + perMainCat.items[contCount] + "Grid";
			//Store data for the grid
			var store ;	
			
			//set up data store
			var data = { identifier: 'id', label: 'id',	items: [] };
			var teamIdentifier = gameDetailBoxscoreStat.dataParts[contCount];
			var teamData = resp.teams[teamIdentifier];
			var	data_list = teamData.playerStats;
			var rows = data_list.length;
			var teamGameLocation = (teamIdentifier == "htm" ? "Home" : "Road");
			var sortFlag = true;
			var mergeRows = [];
			
			for(var i=0; i<rows; i++){
				if(data_list[i].COMMENT != ""){
					mergeRows.push(i);
					sortFlag = false;
					data_list[i].MIN = data_list[i].COMMENT;
					data_list[i].PLUS_MINUS = data_list[i].COMMENT;
				}
					
				data.items.push(dojo.mixin(data_list[i],
					{ 	id: i, 
						"Location": teamGameLocation,
						"SeasonYear": SeasonYear,
						"SeasonCalYear": SeasonCalYear,
						"IncludeInSort": sortFlag
					}));
			}
			//Push total row in the data			
			data.items.push({"id": i, 
				"PLAYER_NAME": "Totals",
				"GAME_ID": teamData.GAME_ID,
				"TEAM_ID": teamData.TEAM_ID,
				"SeasonYear": SeasonYear,
				"SeasonCalYear": SeasonCalYear,
				"PLAYER_ID": "",
				"COMMENT": "",
				"IncludeInSort": false,
				"Location": teamGameLocation,
				"MIN": parseInt(Number(String(teamData.MIN).replace(":", "."))),
				"FGM": teamData.FGM,"FGA": teamData.FGA,"FG_PCT": teamData.FG_PCT,"FG3M": teamData.FG3M,
				"FG3A": teamData.FG3A,"FG3_PCT": teamData.FG3_PCT,"FTM": teamData.FTM,"FTA": teamData.FTA,"FT_PCT": teamData.FT_PCT,
				"OREB": teamData.OREB,"DREB": teamData.DREB,"REB": teamData.REB,"AST": teamData.AST,"TO": teamData.TO,
				"STL": teamData.STL,"BLK": teamData.BLK,"PF": teamData.PF,"PTS": teamData.PTS,"PLUS_MINUS": teamData.PLUS_MINUS});
			var store = new dojo.data.ItemFileWriteStore({data: data});	
			
			//Create layout and grid first time
			if(document.getElementById(gridId) == null){
				//Create layout for each grid if required 
				var layout = calcLayout( subCat, perMainCat.items[contCount]);
				
				//Create a dojo Grid
				initGrid(gridId,store,layout,containerId, mergeRows);
				
				if(IS_MOBILE){
					window.sliderInit(gridId,containerId);
				}	
			}
			//Update the grid store
			else{
				updateGridStore(gridId,store);
			}
			
			gameDetailBoxscoreStat.currentGrids.activeGrids.push(gridId);
		}
};
/*** Grid Methods ***/
