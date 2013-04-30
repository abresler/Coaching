/******Helper Functions ********/
var getStringFromArrOrObject = function(obj){
	if(typeof (obj) != "string"){
		return obj[0];
	}
	else{
		return obj;
	}
};

var makeQueryStringFromObject = function(QueryObject, ignoreSeason){
	var qString = [];
	$.each(QueryObject, function(key, value) {
		if(value != null && value != ""){
			if(key == ignoreSeason){
				qString.push(key + "=" + "ignore");
			}
			else{
				qString.push(key + "=" + encodeURIComponent(value));
			}
		}
	});
	return qString.join("&");
};
/******Helper Functions ********/
/*** Formatter function based on PerMode and Pace Adjust ***/
//Convert number to percentage		XXX.XX%
var toPercentageOneDecimal = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		var retVal = (inValue*100).toFixed(1)+"%";

		var rank = window.currentGridConfig.Rank;
		var perMode = window.currentGridConfig.PerMode;
		if(perMode == "PerPossession") { retVal = inValue.toFixed(3); }
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
	return retVal;
};

//Convert to Integer number
var toInteger = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
	    retVal = parseInt(inValue);
	}
	return retVal;
};


//Convert to One decimal place
var toOneDecimalPlaces = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		var retVal = (inValue).toFixed(1);
		var rank = window.currentGridConfig.Rank;
		var perMode = window.currentGridConfig.PerMode;
		if(perMode == "PerPossession") { retVal = inValue.toFixed(3); }
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
	return retVal;
};

//Convert to Two decimal place
var toTwoDecimalPlaces = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		var retVal = (inValue).toFixed(2);
		var rank = window.currentGridConfig.Rank;
		var perMode = window.currentGridConfig.PerMode;
		if(perMode == "PerPossession") { retVal = inValue.toFixed(3); }
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
    return retVal;
};

//Convert to Two decimal place
var toThreeDecimalPlaces = function(inValue, index, cell){

	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
		var retVal = (inValue).toFixed(3);
		var rank = window.currentGridConfig.Rank;
		var perMode = window.currentGridConfig.PerMode;
		if(perMode == "PerPossession") { retVal = inValue.toFixed(3); }
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
    return retVal;
};



//Use these three variable to find the possible format of each field
//var subCat = window.currentGridConfig.subCategory;
//var perMode = window.currentGridConfig.PerMode;
//var paceAdjust = window.currentGridConfig.PaceAdjust;
//var rank = window.currentGridConfig.Rank;


//MIN field formatter function
//Whole integer number XXXX
//"Totals","PerMinute","Per36","Per40","Per48",
//One decimal place number XXX.X
//"PerGame","MinutesPer","Per100Plays","Per100Possessions"
//Three decimal place number X.XXX
//"PerPossession","PerPlay"
var MIN_formatter = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
        var perMode = window.currentGridConfig.PerMode;
		var retVal = inValue;
		switch(perMode){
			case "Totals":
			case "PerMinute":
			case "Per36" :
			case "Per40" :
			case "Per48" :
			case "MinutesPer":			
				retVal = parseInt(inValue);
				break;
			case "PerGame":
			case "Per100Plays" :
			case "Per100Possessions" :
				retVal = (inValue).toFixed(1);
				break;
			case "PerPossession": 			
			case "PerPlay":
				retVal = inValue.toFixed(3);
				break;
			default:
				break;
		}
		var rank = window.currentGridConfig.Rank;
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
	return retVal;
};


//PCT field formatter function
//On Ranking ON mode PCT is whole number					XXXX
//In rest of the cases PCT is three decimal point number    X.XXX
var PCT_formatter = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
        var rank = window.currentGridConfig.Rank;
		var retVal = inValue;
		if(rank == "N"){ retVal = (inValue).toFixed(3); }
		else{ retVal = parseInt(inValue); }
	}
	return retVal;
};



//FGM, FGA, FG3M, FG3A, FTM, FTA  field formatter function
//OREB,DREB,REB,AST,TOV,STL,BLK,BLKA,PF,PFD,PTS,PLUS_MINUS field formatter function
//Total Pace Adjust Off whole integer 									XXXX
//Total Pace Adjust On one decimal point value							XXX.X
//Minutes Per mode Pace Adjust Off two decimal point value				XXX.XX
//Minutes Per mode Pace Adjust On one decimal point value				XXX.X
//In rest of the cases one decimal point value							XXX.X
var FGTMA_formatter = function(inValue, index, cell){

	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{
        var perMode = window.currentGridConfig.PerMode;
		var paceAdjust = window.currentGridConfig.PaceAdjust;

		var retVal = inValue;
		switch(perMode){
			case "Totals":
				if(paceAdjust == "Y") retVal = (inValue).toFixed(1);
				else  retVal = parseInt(inValue);
				break;
			case "PerMinute":
				if(paceAdjust == "N") retVal = (inValue).toFixed(2);
				else retVal = (inValue).toFixed(2);
				break;
			case "PerPossession": 			
				retVal = inValue.toFixed(3);
				break;
			case "PerPlay": 			
				retVal = inValue.toFixed(3);
				break;
			default:
				retVal = (inValue).toFixed(1);
				break;
		}

		var rank = window.currentGridConfig.Rank;
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
	return retVal;
};


//For MISC MeasureType
//"PTS_OFF_TOV","PTS_2ND_CHANCE","PTS_FB","PTS_PAINT","OPP_PTS_OFF_TOV","OPP_PTS_2ND_CHANCE","OPP_PTS_FB","OPP_PTS_PAINT" fields
//Total whole integer 													XXXX
//Minutes Per mode														XXX.XX
//In rest of the cases one decimal point value							XXX.X
var MISC_formatter = function(inValue, index, cell){
	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{

        var perMode = window.currentGridConfig.PerMode;
		var retVal = inValue;
		switch(perMode){
			case "Totals":
				retVal = parseInt(inValue);
				break;
			case "PerMinute":
				retVal = (inValue).toFixed(2);
				break;
			case "PerPossession": 			
				retVal = inValue.toFixed(3);
				break;
			case "PerPlay": 			
				retVal = inValue.toFixed(3);
				break;
			default:
				retVal = (inValue).toFixed(1);
				break;
		}

		var rank = window.currentGridConfig.Rank;
		if(rank == "Y") { retVal = parseInt(inValue); }
	}
	return retVal;
};


//Formatter function for Team Roster Stats page
//Totals mode whole ineteger number		XXXXX
//All other combination 				XXX.X
var teamRosterStats_formatter = function(inValue, index, cell){

	if(isNaN(inValue) || inValue == null){
		retVal = inValue;
	}
	else{

        var perMode = window.currentGridConfig.PerMode;
		var retVal = inValue;
		switch(perMode){
			case "Totals":
				retVal = parseInt(inValue);
				break;
			default:
				retVal = (inValue).toFixed(1);
				break;
		}
	}
	return retVal;
};



/**** Disable or Enable Radio or Select *****/
//Enable Radio button	
var enableRadio = function(name){
	var elements = document.getElementsByName(name);
	for(var count =0; count<elements.length; count++){ elements[count].disabled = false; }
	//$('[name="' + name + '"]').parent().css("color","#000000");
};

//Disable Radio button
var disableRadio = function(name){
	var elements = document.getElementsByName(name);
	for(var count =0; count<elements.length; count++){ elements[count].disabled = true; }
	//$('[name="' + name + '"]').parent().css("color","#dcdcdc");
};

//Enable Select
var enableSelect = function(id){
	document.getElementById(id).disabled = false;
	//$("#"+id).parent().css("color","#000000");
};

//Disable Select
var disableSelect = function(id){
	document.getElementById(id).disabled = true;
	//$("#"+id).parent().css("color","#dcdcdc");
};

var setPerModeTotals = function(){
	document.getElementById("PerMode").selectedIndex = 0;
};


//Team Stats Page
//Enable or Disable some of the options based on Split value and Measure value
var setStatusTeamStatsBasedonMeasureAndSplit = function(measure, split){
	//Default Display -- Enable all
	$("#measureType ul").css("visibility","visible");
	$('.perMode').uidropdown('enable');
	//window.enableRadio("PaceAdjust");
	//window.enableRadio("Rank");
	enableRadio("PlusMinus");
	

	//Split level enable and disable things
	if(split){
		if(split == "splitsShooting"){
			//Hide  ID: 	measureType
			$("#measureType ul").css("visibility","hidden");
			//Disable  Form : stat-filters
			$('.perMode').uidropdown('disable');
			//window.disableRadio("PaceAdjust");
			//window.disableRadio("Rank");
			disableRadio("PlusMinus");
		}
	}

	//Measure level enable and disable things
	if(measure == "Advanced" || measure == "Four Factors" || measure == "Scoring"){
		//Disable 	ID: 	PerMode,
		$('.perMode').uidropdown('disable');
		//Disable 	Name:	PaceAdjust PlusMinus
		//window.disableRadio("PaceAdjust");
		disableRadio("PlusMinus");
	}

	//window.disableRadio("PaceAdjust");
	//window.disableRadio("Rank");
};


//Team Stats Page
//Enable or Disable some of the options based on Split value and Measure value
var setStatusPlayerStatsBasedonMeasureAndSplit = function(measure, split){
	//Default Display -- Enable all
	$("#measureType ul").css("visibility","visible");
	$('.perMode').uidropdown('enable');
	//window.enableRadio("PaceAdjust");
	//window.enableRadio("Rank");
	enableRadio("PlusMinus");
	

	//Split level enable and disable things
	if(split){
		if(split == "splitsShooting"){
			//Hide  ID: 	measureType
			$("#measureType ul").css("visibility","hidden");
			//Disable  Form : stat-filters
			$('.perMode').uidropdown('disable');
			//window.disableRadio("PaceAdjust");
			//window.disableRadio("Rank");
			disableRadio("PlusMinus");
		}
	}

	//Measure level enable and disable things
	if(measure == "Advanced" || measure == "Usage" || measure == "Scoring"){
		//Disable 	ID: 	PerMode,
		$('.perMode').uidropdown('disable');
		//Disable 	Name:	PaceAdjust PlusMinus
		//window.disableRadio("PaceAdjust");
		disableRadio("PlusMinus");
	}

	//window.disableRadio("PaceAdjust");
	//window.disableRadio("Rank");
};



/**** Disable or Enable Radio or Select *****/


/******Filter Functionality for Grid Start******/
//Common function
//E 	==
//NE	!=
//G		>
//GE	>=	
//L		<
//LE	<=
//Apply filter on this row with the filter Object
var filterData = function(row,filter){
	var retVal = true;
	var count= 0;
	for(count=0;count<filter.length;count++){
		var field = filter[count].field;
		var relation = filter[count].relation;
		var value = Number(filter[count].value);
		
		//Check for the field avialable or not
		if(row[field]){
			switch(relation){
				case "E":
					if (!(row[field] == value))
						retVal = false;
					break;
				case "NE":
					if (!(row[field] != value))
						retVal = false;
					break;
				case "G":
					if (!(row[field] > value))
						retVal = false;
					break;
				case "GE":
					if (!(row[field] >= value))
						retVal = false;
					break;
				case "L":
					if (!(row[field] < value))
						retVal = false;
					break;
				case "LE":
					if (!(row[field] <= value))
						retVal = false;
					break;
				default:
					break;
			}
		}
				
		if(retVal == false)
		break;
	}
	return retVal;
};

//Convert Filter String to Object
var makeFilterObject = function(filterStr){
	var filterObj = [];
	var filterColumns = filterStr.split("**");
	var filterCount = 0;
	
	for(filterCount=0;filterCount<filterColumns.length;filterCount++){
		var filterColumn = filterColumns[filterCount].split("*");
		//It must contain field name, filter relation and filter vaule
		if(filterColumn.length >= 3){
			var newFilterColumn = { field: filterColumn[0], relation: filterColumn[1], value: filterColumn[2]};
			filterObj.push(newFilterColumn);	
		}
	}
	return filterObj;
};
/******Filter Functionality for Grid End ******/


/****** Sort Information in URL ********/
//Find a column nhum ber from layout to set the sort order and sort field
var sortFieldCalculation = function(layout, sortField, sortOrder){
	var sortInfo = 0;
	//If Sort Filed info not available
	if(sortField == ""){
		sortInfo = 0;
	}
	//Find the Column index from Name
	else{
		var index = 0;
		var foundFlag = false;
		var countLayout;
		var countCells;
		for(countLayout=0;countLayout<layout.length;countLayout++){
			var cells = layout[countLayout].cells;
			for(countCells=0;countCells<cells.length;countCells++){
				var cell = cells[countCells];
				if(cell){
					if(cell.field == sortField){
						foundFlag = true;
						//Get the index from search
						sortInfo = index + 1;
						break;
					}
					//Count Index from first column so need to increase here
					index++;
				}	
			}
			
			//Found the column
			if(foundFlag) break;
		}
	}
	
	//Add sign for Sort Order
	if(sortInfo > 0){
		if(sortOrder == "" || sortOrder == "DES"){
			sortInfo = sortInfo * 1;
		}
		else{
			sortInfo = sortInfo * -1;
		}
	}
	
	return sortInfo;
};


//Find a column nhum ber from layout to set the sort order and sort field
var setSortInfoInURL = function(layout, sortInfo){

	var sortOrder = "";
	var sortField = "";

	//Sorting information is not available
	if(sortInfo == 0) return;

	//Add sign for Sort Order
	if(sortInfo > 0){ 
		sortOrder = "DES";
	}
	else{
		sortOrder = "ASC";
		sortInfo = sortInfo * -1;
	}

	var index = 1;
	var foundColumn = "";
	var foundFlag = false;
	var countLayout;
	var countCells;
	for(countLayout=0;countLayout<layout.length;countLayout++){
		var cells = layout[countLayout].cells;
		for(countCells=0;countCells<cells.length;countCells++){
			var cell = cells[countCells];
			if(cell){
				if(index == sortInfo){
					foundFlag = true;
					foundColumn = cell.field;
					break;
				}
				//Count Index from first column so need to increase here
				index++;
			}
		}
		//Found the column
		if(foundFlag) break;
	}
	sortField = foundColumn;
	
	//Set this information in URL
	if(window.url){
		window.url.modUrl("sortField",sortField);
		window.url.modUrl("sortOrder",sortOrder);
	}
	else{
		$.setURL({"sortField":sortField,"sortOrder":sortOrder});
	}
	return {"sortField":sortField,"sortOrder":sortOrder};
};

/****** Sort Information in URL ********/


/**** Slider Functions for Mobile ****/
//Init Slider of respective Grid
var sliderInit = function(gridId,containerId){
	var grid = dijit.byId(gridId);
	var scroller = grid.views.views[grid.views.views.length - 1].scrollboxNode;
	var scrollWidth = 0;
	var clientWidth = 0;
	//Calculate the max scroll value from possible value
	if(scroller.clientWidth){ clientWidth = scroller.clientWidth; }
	if(scroller.offsetWidth){ clientWidth = scroller.offsetWidth; }
	if(scroller.offsetWidth){ scrollWidth = scroller.scrollWidth; }
	var maxScroll = scrollWidth - clientWidth;
	
	if(maxScroll > 0){
		var sliderID = containerId+"Slider";
		var sliderContainerID = containerId+"DojoSlider";
		$("#"+sliderContainerID).show();
		
		var dojoSlide = dijit.byId(sliderID);
		if(dojoSlide){
			dojoSlide.max = maxScroll;
			dojoSlide.onChange = function(newValue){
				scroller.scrollLeft = newValue;
			};

			var _semaphorRS = null;
			dojo.connect( scroller, 'scroll', function(event){
				if(event){
					//Set this value in slider
					if(event.target.scrollLeft){
						if (_semaphorRS != null) clearTimeout(_semaphorRS);
						_semaphorRS = setTimeout(function() { scrollGrid(sliderID,event.target.scrollLeft); } , 300);
					}
				}
			});
		}
	}
};

//Slide Dojo Slider on Grid Slide
var scrollGrid = function(sliderID,scrollLeft){
	var dojoSlide = dijit.byId(sliderID);
	dojoSlide._setValueAttr(scrollLeft);
};
/**** Slider Functions for Mobile ****/

/********** Pagination Deep Linking *******/
var EnablePaginationDeepLinking = function(gridId){
	$("#" + gridId + " .dojoxGridPaginatorStep").click(function(e){
		
		var stepper = $("#" + gridId + " .dojoxGridActived");
		if(stepper.length > 1){
			var pageNo = Number(stepper[0].innerHTML);
			if(pageNo > 0){
				if(window.url)
					window.url.modUrl("pageNo",pageNo);	
				else
					$.setURL("pageNo",pageNo);
			}	
		}
		else{
			var pageNo = Number(stepper.innerHTML);
			if(pageNo > 0){
				if(window.url)
					window.url.modUrl("pageNo",pageNo);	
				else
					$.setURL("pageNo",pageNo);
			}	
		}
		dijit.byId(gridId).pageNoChanged(pageNo);
	});
	
	$("#" + gridId + " .dojoxGridActivedSwitch").click(function(e){
			var rowsPerPage = Number(e.target.innerHTML);
			if(rowsPerPage > 0)	
			if(window.url)
				window.url.modUrl("rowsPerPage",rowsPerPage);
			else	
				$.setURL("rowsPerPage",rowsPerPage);
			dijit.byId(gridId).rowsPerPageChanged(rowsPerPage);
	});
	$("#" + gridId + " .dojoxGridInactiveSwitch").click(function(e){
			var rowsPerPage = Number(e.target.innerHTML);
			if(rowsPerPage > 0)	
			if(window.url)
				window.url.modUrl("rowsPerPage",rowsPerPage);	
			else	
				$.setURL("rowsPerPage",rowsPerPage);
			dijit.byId(gridId).rowsPerPageChanged(rowsPerPage);
	});
};
/********** Pagination Deep Linking *******/



var masterLayoutConfig =  {
	"GP": {name: 'GP', field: 'GP', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"GS": {name: 'GS', field: 'GS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"W": {name: 'W', field: 'W', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"L": {name: 'L', field: 'L', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"W_PCT": {name: 'Win%', field: 'W_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toThreeDecimalPlaces},
	
	"MIN": {name: 'MIN', field: 'MIN', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: MIN_formatter},
	"FGM": {name: 'FGM', field: 'FGM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FGA": {name: 'FGA', field: 'FGA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FG_PCT": {name: 'FG%', field: 'FG_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"FG3M": {name: '3FGM', field: 'FG3M', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FG3A": {name: '3FGA', field: 'FG3A', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FG3_PCT": {name: '3FG%', field: 'FG3_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"FTM": {name: 'FTM', field: 'FTM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FTA": {name: 'FTA', field: 'FTA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"FT_PCT": {name: 'FT%', field: 'FT_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"OREB": {name: 'OREB', field: 'OREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"DREB": {name: 'DREB', field: 'DREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"REB": {name: 'REB', field: 'REB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"AST": {name: 'AST', field: 'AST', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"TOV": {name: 'TO', field: 'TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"TO": {name: 'TO', field: 'TO', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"STL": {name: 'STL', field: 'STL', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"BLK": {name: 'BLK', field: 'BLK', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"BLKA": {name: 'BLKA', field: 'BLKA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"DD2": {name: 'DD2', field: 'DD2', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toInteger},
	"TD3": {name: 'TD3', field: 'TD3', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toInteger},
	"PF": {name: 'PF', field: 'PF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"PFD": {name: 'PFD', field: 'PFD', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"PTS": {name: 'PTS', field: 'PTS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},
	"PLUS_MINUS": {name: '+/-', field: 'PLUS_MINUS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: FGTMA_formatter},


	"OFF_RATING": {name: 'OffRtg', field: 'OFF_RATING', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"DEF_RATING": {name: 'DefRtg', field: 'DEF_RATING', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"NET_RATING": {name: 'NetRtg', field: 'NET_RATING', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"AST_PCT": {name: 'AST%', field: 'AST_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"AST_TO": {name: 'AST/TO', field: 'AST_TO', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toTwoDecimalPlaces},
	"AST_RATIO": {name: 'AST Ratio', field: 'AST_RATIO', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"OREB_PCT": {name: 'OREB%', field: 'OREB_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"DREB_PCT": {name: 'DREB%', field: 'DREB_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"REB_PCT": {name: 'REB%', field: 'REB_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"TM_TOV_PCT": {name: 'TO Ratio', field: 'TM_TOV_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"EFG_PCT": {name: 'eFG%', field: 'EFG_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"TS_PCT": {name: 'TS%', field: 'TS_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"USG_PCT": {name: 'USG%', field: 'USG_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	"PACE": {name: 'PACE', field: 'PACE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toTwoDecimalPlaces},
	"PIE": {name: 'PIE', field: 'PIE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toPercentageOneDecimal, specialFilter: true},
	
	"FTA_RATE": {name: 'FTA Rate', field: 'FTA_RATE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toThreeDecimalPlaces},
	"OPP_EFG_PCT": {name: 'Opp eFG%', field: 'OPP_EFG_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"OPP_FTA_RATE": {name: 'Opp FTA Rate', field: 'OPP_FTA_RATE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toThreeDecimalPlaces},
	"OPP_TOV_PCT": {name: 'Opp TO Ratio', field: 'OPP_TOV_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"OPP_OREB_PCT": {name: 'Opp OREB%', field: 'OPP_OREB_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},

	"PTS_OFF_TOV": {name: 'PTS OFF TO', field: 'PTS_OFF_TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"PTS_2ND_CHANCE": {name: '2nd PTS', field: 'PTS_2ND_CHANCE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"PTS_FB": {name: 'FBPs', field: 'PTS_FB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"PTS_PAINT": {name: 'PITP', field: 'PTS_PAINT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"OPP_PTS_OFF_TOV": {name: 'Opp PTS OFF TO', field: 'OPP_PTS_OFF_TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"OPP_PTS_2ND_CHANCE": {name: 'Opp 2nd PTS', field: 'OPP_PTS_2ND_CHANCE', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"OPP_PTS_FB": {name: 'Opp FBPs', field: 'OPP_PTS_FB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  MISC_formatter},
	"OPP_PTS_PAINT": {name: 'Opp PITP', field: 'OPP_PTS_PAINT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, noresize: true, formatter:  MISC_formatter},

	"PCT_FGA_2PT": {name: '%FGA (2PT)', field: 'PCT_FGA_2PT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FGA_3PT": {name: '%FGA (3PT)', field: 'PCT_FGA_3PT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_2PT": {name: '%PTS (2PT)', field: 'PCT_PTS_2PT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_2PT_MR": {name: '%PTS (2PT-MR)', field: 'PCT_PTS_2PT_MR', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_3PT": {name: '%PTS (3PT)', field: 'PCT_PTS_3PT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_FB": {name: '%PTS (FBPs)', field: 'PCT_PTS_FB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_FT": {name: '%PTS (FT)', field: 'PCT_PTS_FT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_OFF_TOV": {name: '%PTS (OffTO)', field: 'PCT_PTS_OFF_TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS_PAINT": {name: '%PTS (PITP)', field: 'PCT_PTS_PAINT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_AST_2PM": {name: '2FGM (%AST)', field: 'PCT_AST_2PM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_UAST_2PM": {name: '2FGM (%UAST)', field: 'PCT_UAST_2PM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_AST_3PM": {name: '3FGM (%AST)', field: 'PCT_AST_3PM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_UAST_3PM": {name: '3FGM (%UAST)', field: 'PCT_UAST_3PM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_AST_FGM": {name: 'FGM (%AST)', field: 'PCT_AST_FGM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_UAST_FGM": {name: 'FGM (%UAST)', field: 'PCT_UAST_FGM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	
	"OPP_FGM": {name: 'Opp FGM', field: 'OPP_FGM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FGA": {name: 'Opp FGA', field: 'OPP_FGA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FG_PCT": {name: 'Opp FG%', field: 'OPP_FG_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"OPP_FG3M": {name: 'Opp 3FGM', field: 'OPP_FG3M', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FG3A": {name: 'Opp 3FGA', field: 'OPP_FG3A', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FG3_PCT": {name: 'Opp 3FG%', field: 'OPP_FG3_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"OPP_FTM": {name: 'Opp FTM', field: 'OPP_FTM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FTA": {name: 'Opp FTA', field: 'OPP_FTA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_FT_PCT": {name: 'Opp FT%', field: 'OPP_FT_PCT', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"OPP_OREB": {name: 'Opp OREB', field: 'OPP_OREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_DREB": {name: 'Opp DREB', field: 'OPP_DREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_REB": {name: 'Opp REB', field: 'OPP_REB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_AST": {name: 'Opp AST', field: 'OPP_AST', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_TOV": {name: 'Opp TO', field: 'OPP_TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_STL": {name: 'Opp STL', field: 'OPP_STL', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_BLK": {name: 'Opp BLK', field: 'OPP_BLK', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_BLKA": {name: 'Opp BLKA', field: 'OPP_BLKA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_PF": {name: 'Opp PF', field: 'OPP_PF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_PFD": {name: 'Opp PFD', field: 'OPP_PFD', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_PTS": {name: 'Opp PTS', field: 'OPP_PTS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},
	"OPP_PLUS_MINUS": {name: '+/-', field: 'PLUS_MINUS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  FGTMA_formatter},

	"PCT_DREB": {name: '%DREB', field: 'PCT_DREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FG3A": {name: '%3FGA', field: 'PCT_FG3A', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FG3M": {name: '%3FGM', field: 'PCT_FG3M', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FGA": {name: '%FGA', field: 'PCT_FGA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FGM": {name: '%FGM', field: 'PCT_FGM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FTA": {name: '%FTA', field: 'PCT_FTA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_FTM": {name: '%FTM', field: 'PCT_FTM', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_OREB": {name: '%OREB', field: 'PCT_OREB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PF": {name: '%PF', field: 'PCT_PF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PFD": {name: '%PFD', field: 'PCT_PFD', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_PTS": {name: '%PTS', field: 'PCT_PTS', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_REB": {name: '%REB', field: 'PCT_REB', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_STL": {name: '%STL', field: 'PCT_STL', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_TOV": {name: '%TO', field: 'PCT_TOV', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_AST": {name: '%AST', field: 'PCT_AST', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_BLK": {name: '%BLK', field: 'PCT_BLK', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},
	"PCT_BLKA": {name: '%BLKA', field: 'PCT_BLKA', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter:  toPercentageOneDecimal, specialFilter: true},

	"GP-ON": {name: 'GS ON', field: 'GP-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"MIN-ON": {name: 'MIN ON', field: 'MIN-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"PLUS_MINUS-ON": {name: '+/- ON', field: 'PLUS_MINUS-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"OFF_RATING-ON": {name: 'OffRtg ON', field: 'OFF_RATING-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"DEF_RATING-ON": {name: 'DefRtg ON', field: 'DEF_RATING-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"NET_RATING-ON": {name: 'NetRtg ON', field: 'NET_RATING-ON', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},

	"GP-OFF": {name: 'GS OFF', field: 'GP-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true},
	"MIN-OFF": {name: 'MIN OFF', field: 'MIN-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"PLUS_MINUS-OFF": {name: '+/- OFF', field: 'PLUS_MINUS-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"OFF_RATING-OFF": {name: 'OffRtg OFF', field: 'OFF_RATING-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"DEF_RATING-OFF": {name: 'DefRtg OFF', field: 'DEF_RATING-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces},
	"NET_RATING-OFF": {name: 'NetRtg OFF', field: 'NET_RATING-OFF', datatype:"number", styles: 'text-align: right;', headerStyles: 'text-align: center;', sortDesc: true, noresize: true, formatter: toOneDecimalPlaces}
};
