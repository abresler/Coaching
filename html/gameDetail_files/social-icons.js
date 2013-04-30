$(function () {

      $('#social-icons a').click(function(e){
            e.preventDefault();

            var new_href =  $(this).attr('href');
            //var get_href =  location.href + "&text=#NBAStats";
			var get_href =  location.href;
            get_href = escape(get_href);
			get_href += "&text=#NBAStats";
            new_href = new_href.replace('{URL}',get_href);
            window.open(new_href, 'Stats', 'resizable=yes,scrollbars=yes,height=300,width=600');
      });



});


