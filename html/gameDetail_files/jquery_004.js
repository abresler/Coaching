/*
 * jquery.statrequest.js
 * nicholas ortenzio
 */

(function ($) {

	var AJAXTYPE = "GET";
	var DATATYPE = "JSON";
	window.NBAREQUESTCOUNT = 0;
	
	var dataseterize = function (resp, i, set) {
	
		if (!set) { 
			return;
		}

		resp.sets[set.name] = set;
		set.datatable = $.map(set.rowSet, zipTableData.bind(this, set.headers));
	};

	var zipTableData = function (headers, row, i) {

		var datarow = {};

		datarow["id"] = i;
		for (var y=0; y<headers.length; y+=1) {
			var c = headers[y];
			var v = row[y];

			/* remove this before 2013 season */
			v = (typeof v=="string") ? v.replace("Hornets", "Pelicans") : v;

			datarow[c] = v;
		}
		
		return datarow;
	};

	$.getStats = function (url, data, callback, error) {

		var formatStatResponse = function (resp) {
		
			if (!resp) {
				return callback();
			}
			
			if (!resp.resultSets && resp.resultSet) {
				if ($.isArray(resp.resultSet)) {
					resp.resultSets = resp.resultSet;
				} else {
					resp.resultSets = [resp.resultSet];
				}
			}

			resp.sets = {};
			resp.formatStatResponse = true;
			if(resp.resultSets.length)
				$.each(resp.resultSets, dataseterize.bind(this, resp));
			else	
				dataseterize.bind(resp.resultSets, resp);

			callback(resp);
		};

		var curry = function (resp) {
			NBAREQUESTCOUNT -= 1;
			formatStatResponse(resp);
		};

		var onError = function (e) {
			NBAREQUESTCOUNT -= 1;
			console.log(e)		
		};
		
		NBAREQUESTCOUNT += 1;
		
		return $.ajax({
			url: url,
			data: data,
			success: curry,
			error: onError,
			dataType: DATATYPE,
			type: AJAXTYPE
		});

	};
	
}(jQuery));