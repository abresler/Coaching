var $nbaNav = {
    
    /******* private fields *********/

    _target: 'nbaHeader',
    _onBodyDoneTimerId: null,


    /******* private methods ********/

    _onBodyDone: function() {
        $nbaNav._init();
    },
    _init: function(){
        var nav;
        if (document.getElementById(this._target)) {
            nav = document.getElementById(this._target);
        }
        else {
            nav = document.createElement('div');
            nav.id = this._target;
            var body = document.getElementsByTagName('body')[0];
            body.insertBefore(nav, body.childNodes[0]);
        }
        nav.innerHTML = this._getHTML();
        
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/plusone.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        
	    this._hookHovers();
        if (document.removeEventListener) {
            document.removeEventListener('DOMContentLoaded', this._onBodyDone, false);
        }
        if (this._onBodyDoneTimerId) {
            clearInterval(this._onBodyDoneTimerId);
        }
        if (this._onCssTimerId) {
            clearInterval(this._onCssTimerId);
        }
        this._setupSearchInput();
    },
    _hookHovers: function(){
        var sfEls = document.getElementById("nbaGlobalNav").getElementsByTagName("LI");
        for (var i = 0; i < sfEls.length; i++) {
            sfEls[i].onmouseover = function(){
                this.className = (this.className ? this.className + " " : "") + "nbaHover";
            }
            sfEls[i].onmouseout = function(){
                this.className = this.className.replace(/\s*?\bnbaHover\b/, "");
            }
        }
    },
    _getHTML: function(){
        var out = '';
        out += '<h1 class="nbaAssist">NBA.com, Official site of the National Basketball Association</h1><span class="nbaLogo"><a href="http://www.nba.com" title="NBA.com">Link to NBA.com</a></span>';
        out += '<script src="http://i.cdn.turner.com/nba/nba/.element/js/global/2.0/nbaGlobalNav.js" type="text/javascript"></script><div id="nbaGlobalNav"><ul>';
        for (var t = 0; t < this._nav.length; t++) {
            var dropLeft = (t<this._nav.length-2 ? "" : " nbaMenuLeft");
        	var tab = this._nav[t];
            var url = (tab.url.indexOf("http") == 0 ? "" : "http://www.nba.com") + tab.url;
            var nbacl = tab.nbacl;
             if (tab.items && tab.items.length > 0) {
                out += '<li class="' + nbacl + dropLeft +'"><a title="' + tab.id + '" href="' + url + '">'+ tab.id + '</a>';
                out += '<div class="nbaNavDropdown">'
                for (var col = 0; col < tab.items.length; col++) {
                    var node = tab.items[col];
out += '<div class="'+node.div+'">';
out += '<span class="nbaNavSubheading">'+node.subhead+'</span>';
out += '<ul>';
                for (var x in node.divisions) {
                    var division = node.divisions[x];
                    if(division!=null && division!=undefined){
	                    out += '<li><span class="nbaDivision">'+division.name+'</span>';
	                    out += '<ul>';
	                    for (var y in division.teams) {
	                            var team = division.teams[y];
	                            if(team!=null && team!=undefined){
	                            	out += '<li><a href="'+team["url"]+'" class="'+team["classVal"]+'">'+team["label"]+'</a></li>'
	                            }
	                        }
	                    out += '</ul>';
	                    out += '</li>';
                    }
                }
                for (x in node.subs) {
                    var subs = node.subs[x];
                    if(typeof(subs) == 'object' && subs.teams){
                    	for (y in subs.teams) {
                            var teamT = subs.teams[y];
                            if(teamT!=null && teamT!=undefined){
                            	out += '<li><a href="'+teamT.url+'" class="'+teamT.classVal+'" class="'+teamT.target+'">'+teamT.label+'</a></li>'
                            }
                        }
                    }    
                    
                }
out += '</ul>';
out += '</div>';
                }
                out += '</div>'; //close nbaNavDropdown

            } else if (tab.items && tab.items.length > 0) {
                out += '<li class="' + nbacl + ' child"><a title="' + tab.id + '" href="' + url + '">'+ tab.id + '</a>';
                out += '<div class="nbaNavDropdown"><ul>';
                for (var li = 0; li < tab.items.length; li++) {
                    if (tab.items[li].label) {
                        var url = (tab.items[li].url.indexOf("http") == 0 ? "" : "http://www.nba.com") + tab.items[li].url;
                        out += '<li><a href="' + url + '"' + (tab.items[li].style ? ' style="' + tab.items[li].style + '"' : '') + '>' + tab.items[li].label + '</a></li>';
                    }
                    else 
                        if (tab.items[li].items) {
                            var item = tab.items[li];
                            out += '<li><div class="' + (item.clazz || '') + '">';
                            for (var i = 0; i < item.items.length; i++) {
                                var url = (item.items[i].url.indexOf("http") == 0 ? "" : "http://www.nba.com") + item.items[i].url;
                                out += '<a href="' + url + '" class="' + (item.items[i].clazz || '') + '">' + item.items[i].label + '</a>';
                            }
                            out += (item.post || '') + '</div></li>';
                        }
                }
                out += '</ul></div></li>';
            } else {
            
                out += '<li class="' + nbacl + ' nochild"><a title="' + tab.id + '" href="' + url + '">'+ tab.id + '</a>';}
            
        }
        out += '</ul>'+'</div>';
        out += '<div id="nbaSearch"><div class="nbaSkin" style="background:url(http://i.cdn.turner.com/nba/nba/.element/img/3.0/sect/playoffs/2013/promoBar/lftClck2.png) no-repeat 100px 5px #000; width:100%;"></div><form action="http://www.nba.com/search" method="get"><!--[if IE]><label for="nbaSearchInput" id="nbaSearchInputLabel">Search NBA.com</label><![endif]--><input type="text" value="" name="text" id="nbaSearchInput" placeholder="Search NBA.com" /><button type="submit" class="nbaSubmit">Submit</button></form></div>';
		out +='<div class="nbaSocial"><div class="nbaLogin"><div class="nbaGlobal"><a href="http://www.nba.com/global" title="NBA Global">NBA Global</a></div><div class="nbaWNBA"><a href="http://www.wnba.com" title="WNBA">WNBA</a></div><div class="nbaDleague"><a href="http://www.nba.com/dleague" title="NBA D-League">NBA Dleague</a></div><div id="nbaChromeLogin"><div class="Action"><a target="_top" href="http://www.nba.com/allaccess/about.html">Get News & Offers</a></div>';
		out +='<div class="User"><a href="https://audience.nba.com/services/msib/flow/login?">Login</a> | </div></div></div>';
		out +='<div class="nbaFBLike"><!--[if !IE]><!--><iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com/nba&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21&amp;appId=164914533589201"></iframe><!--<![endif]--><!--[if IE]><iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com/nba&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21&amp;appId=164914533589201" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowtransparency="true" style="border:none; overflow:hidden;"></iframe><![endif]--></div>';
		out +='<div class="nbaTwitterFollow"><!--[if !IE]><!--><iframe src="//platform.twitter.com/widgets/follow_button.html?screen_name=NBA&amp;show_count=true"></iframe><!--<![endif]--><!--[if IE]><iframe src="//platform.twitter.com/widgets/follow_button.html?screen_name=NBA&amp;show_count=true" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowtransparency="true" style="border:none; overflow:hidden;"></iframe><![endif]--></div>';
		out +='<div class="nbaGooglePlus"><div class="g-plusone" data-size="medium" data-href="http://www.nba.com"></div></div></div>';
		out += '<nav id="nbaStoreNav"><ul><li class="nbaStore nbaMenuLeft"><a href="http://www.nba.com/global/storelinkhandler.html">Store</a><div class="nbaNavDropdown"><div class="nbaPrimary"><ul>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Jerseys">Jerseys</a></li>';		
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Mens">Mens</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Kids">Kids</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_NBA4Her">NBA4HER</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_CustomShop">Custom Shop</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Headwear">Headwear</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Basketballs">Basketballs</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_Footwear">Footwear</a></li>';
		out += '<li><a href="http://www.nba.com/global/storelinkhandler.html?cat=NBA_WhatsHot">Whats Hot</a></li>';
		out += '<li><a href="http://auctions.nba.com" target="_blank">Auctions</a></li>';
		out += '<li><a href="http://nbagameworn.com/" target="_blank">NBAGameworn.com</a></li>';
		out += '<li><a href="http://photostore.nba.com/home.aspx?sourceid=TopNav_Photos" target="_blank">Shop Photo Store</a></li>';
		out += '<li><a href="http://www.nba.com/nycstore">NYC Store</a></li></ul></div></div></li></ul></nav>';
		out += '<style>.nbaSubTitle {text-decoration:none !important; cursor:default;} #nbaStoreNav .nbaNavDropdown a {text-align:left;}</style>';
        return out;
    },
    
    updateSearchFormLabel: function(){
	    var label = document.getElementById("nbaSearchInputLabel");
	    var input = document.getElementById("nbaSearchInput");
	    var focus = (input == document.activeElement);
    	if(focus && input.value=='') {
    		if(navigator.appName == "Microsoft Internet Explorer") {
	    		label.style.display = 'none';
    		} else {
    			/* non IE browsers support the placeholder attribute */
    			input.placeholder = '';
    		}
	    } else if (!focus && input.value=='') {
	    	if(navigator.appName == "Microsoft Internet Explorer") {
	    		label.style.display = 'block';
	    	} else {
	    		/* non IE browsers support the placeholder attribute */
	    		input.placeholder = "Search NBA.com";
	    	}
	    }
    	return true;
    },
    _setupSearchInput: function(){
    	var input = document.getElementById("nbaSearchInput");
    	input.onfocus = function(){$nbaNav.updateSearchFormLabel();}
    	input.onblur = function(){$nbaNav.updateSearchFormLabel();}
    },
    

    /******** public fields *********/

    getCDN: function(){
        var server = window.location.hostname;
        var secure = window.location.protocol.match(/https/i);
        if (secure) {
            return 'https://s.cdn.turner.com/nba';
        } else {
            return 'http://z.cdn.turner.com/nba';
        }
    },
    img: function(src, alt, attributes){
        alt = typeof(alt) != 'undefined' ? alt : '';
        attributes = typeof(attributes) != 'undefined' ? attributes : '';
        return '<img src="' + this.getCDN() + src + '" alt="' + alt + '" ' + attributes + '/>';
    },
    
    init: function(){
        for (i = 0; i < document.styleSheets.length; i++) {
            var css = document.styleSheets[i];
        }
        if (!this._cssDone && document.createStyleSheet) {
            document.createStyleSheet(this.getCDN() + (window.location.protocol == 'https:'?'/tmpl_asset/static/nba-cms3-homepage/1274/css/pkg-min.css':'/tmpl_asset/static/nba-cms3-homepage/1274/css/pkg-min.css'));
        }
        else 
            if (!this._cssDone) {
                var ss = document.createElement('link');
                ss.rel = 'stylesheet';
                ss.href = this.getCDN() + (window.location.protocol == 'https:'?'/tmpl_asset/static/nba-cms3-homepage/1274/css/pkg-min.css':'/tmpl_asset/static/nba-cms3-homepage/1274/css/pkg-min.css');
                var head = document.getElementsByTagName('head')[0];
                head.insertBefore(ss, head.childNodes[0]);
            }
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', this._onBodyDone, false);
        }
        this._onBodyDoneTimerId = setInterval(function(){
            if (/loaded|complete/.test(document.readyState)) {
                $nbaNav._onBodyDone();
            }
        }, 50);
    },
    
    
    /******** navigation *********/
    
    _nav: [
    {
        id: "Tickets",
        url: "http://www.nba.com/tickets/tickets.html",
        nbacl: "nbaSingleton"
    }, {
       id: "Teams",
        url: "http://www.nba.com/teams",
        nbacl: "nbaTeams",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "Eastern Conference",
                        divisions : [
                            {
                                name : 'Atlantic',
                                teams : [
                                    {
                                        label : 'Boston Celtics',
                                        url : 'http://www.nba.com/celtics',
                                        classVal : 'nbaTeamBOS'
                                    },
                                    {
                                        label : 'Brooklyn Nets',
                                        url : 'http://www.nba.com/nets',
                                        classVal : 'nbaTeamBKN'
                                    },
                                    {
                                        label : 'New York Knicks',
                                        url : 'http://www.nba.com/knicks',
                                        classVal : 'nbaTeamNYK'
                                    },
                                    {
                                        label : 'Philadelphia 76ers',
                                        url : 'http://www.nba.com/sixers',
                                        classVal : 'nbaTeamPHI'
                                    },
                                    {
                                        label : 'Toronto Raptors',
                                        url : 'http://www.nba.com/raptors',
                                        classVal : 'nbaTeamTOR'
                                    }
                                ]
                            },
                            {
                                name : 'Central',
                                teams : [
                                    {
                                        label : 'Chicago Bulls',
                                        url : 'http://www.nba.com/bulls',
                                        classVal : 'nbaTeamCHI'
                                    },
                                    {
                                        label : 'Cleveland Cavaliers',
                                        url : 'http://www.nba.com/cavaliers',
                                        classVal : 'nbaTeamCLE'
                                    },
                                    {
                                        label : 'Detroit Pistons',
                                        url : 'http://www.nba.com/pistons',
                                        classVal : 'nbaTeamDET'
                                    },
                                    {
                                        label : 'Indiana Pacers',
                                        url : 'http://www.nba.com/pacers',
                                        classVal : 'nbaTeamIND'
                                    },
                                    {
                                        label : 'Milwaukee Bucks',
                                        url : 'http://www.nba.com/bucks',
                                        classVal : 'nbaTeamMIL'
                                    }
                                ]
                            },
                            {
                                name : 'Southeast',
                                teams : [
                                    {
                                        label : 'Atlanta Hawks',
                                        url : 'http://www.nba.com/hawks',
                                        classVal : 'nbaTeamATL'
                                    },
                                    {
                                        label : 'Charlotte Bobcats',
                                        url : 'http://www.nba.com/bobcats',
                                        classVal : 'nbaTeamCHA'
                                    },
                                    {
                                        label : 'Miami Heat',
                                        url : 'http://www.nba.com/heat',
                                        classVal : 'nbaTeamMIA'
                                    },
                                    {
                                        label : 'Orlando Magic',
                                        url : 'http://www.nba.com/magic',
                                        classVal : 'nbaTeamORL'
                                    },
                                    {
                                        label : 'Washington Wizards',
                                        url : 'http://www.nba.com/wizards',
                                        classVal : 'nbaTeamWAS'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "Western Conference",
                        divisions : [
                            {
                                name : 'Southwest',
                                teams : [
                                    {
                                        label : 'Dallas Mavericks',
                                        url : 'http://www.nba.com/mavericks',
                                        classVal : 'nbaTeamDAL'
                                    },
                                    {
                                        label : 'Houston Rockets',
                                        url : 'http://www.nba.com/rockets',
                                        classVal : 'nbaTeamHOU'
                                    },
                                    {
                                        label : 'Memphis Grizzlies',
                                        url : 'http://www.nba.com/grizzlies',
                                        classVal : 'nbaTeamMEM'
                                    },
                                    {
                                        label : 'New Orleans Pelicans',
                                        url : 'http://www.nba.com/pelicans',
                                        classVal : 'nbaTeamNOH'
                                    },
                                    {
                                        label : 'San Antonio Spurs',
                                        url : 'http://www.nba.com/spurs',
                                        classVal : 'nbaTeamSAS'
                                    }
                                ]
                            },
                            {
                                name : 'Northwest',
                                teams : [
                                    {
                                        label : 'Denver Nuggets',
                                        url : 'http://www.nba.com/nuggets',
                                        classVal : 'nbaTeamDEN'
                                    },
                                    {
                                        label : 'Minnesota Timberwolves',
                                        url : 'http://www.nba.com/timberwolves',
                                        classVal : 'nbaTeamMIN'
                                    },
                                    {
                                        label : 'Portland Trail Blazers',
                                        url : 'http://www.nba.com/blazers',
                                        classVal : 'nbaTeamPOR'
                                    },
                                    {
                                        label : 'Oklahoma City Thunder',
                                        url : 'http://www.nba.com/thunder',
                                        classVal : 'nbaTeamOKC'
                                    },
                                    {
                                        label : 'Utah Jazz',
                                        url : 'http://www.nba.com/jazz',
                                        classVal : 'nbaTeamUTA'
                                    }
                                ]
                            },
                            {
                                name : 'Pacific',
                                teams : [
                                    {
                                        label : 'Golden State Warriors',
                                        url : 'http://www.nba.com/warriors',
                                        classVal : 'nbaTeamGSW'
                                    },
                                    {
                                        label : 'Los Angeles Clippers',
                                        url : 'http://www.nba.com/clippers',
                                        classVal : 'nbaTeamLAC'
                                    },
                                    {
                                        label : 'Los Angeles Lakers',
                                        url : 'http://www.nba.com/lakers',
                                        classVal : 'nbaTeamLAL'
                                    },
                                    {
                                        label : 'Phoenix Suns',
                                        url : 'http://www.nba.com/suns',
                                        classVal : 'nbaTeamPHX'
                                    },
                                    {
                                        label : 'Sacramento Kings',
                                        url : 'http://www.nba.com/kings',
                                        classVal : 'nbaTeamSAC'
                                    }
                                ]
                            }
                        ]
                }
        ]
	}, {
        id: "Scores &amp; Schedules",
        url: "/gameline",
        nbacl: "nbaSingleton"
    }, {    
       id: "News",
        url: "http://www.nba.com/news",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'NBA Headlines',
                                        url : 'http://www.nba.com/news'
                                    },
                                    {
                                        label : 'Transactions',
                                        url : 'http://www.nba.com/news/transactions/transactions-2012-13/index.html'
                                    },
                                    {
                                        label : 'NBA.com Writers',
                                        url : 'http://www.nba.com/personalities'
                                    },
                                    {
                                        label : 'News Archive',
                                        url : 'http://www.nba.com/news/news_archive.html'
                                    },
                                    {
                                        label : 'RSS',
                                        url : 'http://www.nba.com/rss'
                                    },
                                    {
                                        label : 'History',
                                        url : 'http://www.nba.com/history'
                                    },
                                    {
                                        label : 'Daily Ref Assignments',
                                        url : 'http://www.nba.com/news/referee.html'
                                    },
                                    {
                                        label : 'Important Dates',
                                        url : 'http://www.nba.com/news/important-dates/index.html'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
									{
									    label : '2013 NBA Draft',
									    url : 'http://www.nba.com/draft'
									},
									{
                                        label : '2013 All-Star',
                                        url : 'http://www.nba.com/allstar'
                                    },
                                    {
                                    	label : '2013 Hall of Fame',
                                    	url : 'http://www.nba.com/halloffame'
                                    },
                                    {
                                        label : '2013 Playoffs',
                                        url : 'http://www.nba.com/playoffs/2013/index.html'
                                    }
                                    
                                    
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Blogs",
        url: "http://hangtime.blogs.nba.com",
        nbacl: "nbaPreventDefault",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Hang Time Blog',
                                        url : 'http://hangtime.blogs.nba.com',
										target: '_blank'
                                    },
                                    {
                                        label : 'Hang Time Podcast',
                                        url : 'http://hangtime.blogs.nba.com/category/podcast',
										target: '_blank'
                                    },
                                    {
                                        label : 'All Ball Blog',
                                        url : 'http://allball.blogs.nba.com',
										target: '_blank'
                                    },
                                    {
                                        label : 'Ten Before Tip',
                                        url : 'http://tbt.blogs.nba.com',
										target: '_blank'
                                    },
                                    {
                                        label : 'CharlesBarkley.com',
                                        url : 'http://charlesbarkley.com',
										target: '_blank'
                                    },
                                    {
                                        label : 'MikeFratello.com',
                                        url : 'http://mikefratello.com',
										target: '_blank'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "NBA.com Ladders",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Rookie Ladder',
                                        url : 'http://www.nba.com/rookie-ladder'
                                    },
                                    {
                                        label : 'Dunk Ladder',
                                        url : 'http://www.nba.com/dunk-ladder'
                                    },
                                    {
                                        label : 'Top Plays Ladder',
                                        url : 'http://www.nba.com/top-plays-ladder'
                                    },
                                    {
                                        label : 'Kia MVP Ladder',
                                        url : 'http://www.nba.com/mvp-ladder'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Video",
        url: "http://www.nba.com/video",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'All Videos',
                                        url : 'http://www.nba.com/video'
									},
                                    {
                                        label : 'Highlights',
                                        url : 'http://www.nba.com/video/highlights'
                                    },
                                    {
                                        label : 'Top Plays',
                                        url : 'http://www.nba.com/video/topplays'
                                    },
                                    {
                                        label : 'NBA TV',
                                        url : 'http://www.nba.com/video/nbatv'
                                    },
                                    {
                                        label : 'Editor&#39;s Picks',
                                        url : 'http://www.nba.com/video/editorspicks'
                                    },
                                    {
                                        label : 'TNT OT',
                                        url : 'http://www.nba.com/video/tntot'
                                    },
                                    {
                                        label : 'Video Rulebook',
                                        url : 'http://www.nba.com/videorulebook'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Fantasy',
                                        url : 'http://www.nba.com/video/nbatv/fantasy'
                                    },
                                    {
                                        label : 'NBA Rooks',
                                        url : 'http://www.nba.com/video/nbarooks'
                                    },
                                    {
                                        label : 'The Association',
                                        url : 'http://www.nba.com/theassociation'
                                    },
                                    {
                                        label : 'History',
                                        url : 'http://www.nba.com/video/history'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Players",
        url: "http://www.nba.com/players",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Players',
                                        url : 'http://www.nba.com/players'
									},
                                    {
                                        label : 'Coaches',
                                        url : 'http://www.nba.com/news/coaches/index.html'
                                    },
                                    {
                                        label : 'Team Rosters',
                                        url : 'http://www.nba.com/teams/teamIndividualLinks.html?title=Team%20Roster&amp;file=roster'
                                    },
                                    {
                                        label : 'NBA Rooks',
                                        url : 'http://www.nba.com/rooks'
                                    },
                                    {
                                    	label : 'Kia Performance Awards',
                                    	url : 'http://www.nba.com/awards'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Legends',
                                        url : 'http://www.nba.com/history/legends/legends-index/index.html'
                                    },
                                    {
                                        label : 'Historical Player Search',
                                        url : 'http://stats.nba.com/players.html#historic-players'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Standings",
        url: "http://www.nba.com/standings",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'By Division',
                                        url : 'http://www.nba.com/standings/team_record_comparison/conferenceNew_Std_Div.html'
									},
                                    {
                                        label : 'By Conference',
                                        url : 'http://www.nba.com/standings/team_record_comparison/conferenceNew_Std_Cnf.html'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Playoff Picture',
                                        url : 'http://www.nba.com/standings/playoff_picture.html'
                                    },
                                    {
                                    	label : 'Streaks &amp; Last 10',
                                    	url : 'http://www.nba.com/standings/team_record_comparison/conferenceNew_Stk_Cnf.html'
                                    },
                                    {
                                        label : 'Ahead &amp; Behind',
                                        url : 'http://www.nba.com/standings/team_record_comparison/conferenceNew_Ahd_Div.html'
                                    },
                                    {
                                        label : 'Margin &amp; Stats',
                                        url : 'http://www.nba.com/standings/team_record_comparison/conferenceNew_Mrg_Div.html'
                                    },
                                    {
                                        label : '2011-12 Standings',
                                        url : 'http://www.nba.com/standings/2011/team_record_comparison/conferenceNew_Std_Div.html'
                                    },
                                    {
                                        label : '2010-11 Standings',
                                        url : 'http://www.nba.com/standings/2010/team_record_comparison/conferenceNew_Std_Div.html'
                                    },
                                    {
                                        label : 'Season Recaps',
                                        url : 'http://www.nba.com/history/seasonreviews/season-recaps/index.html'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Stats",
        url: "http://stats.nba.com",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'NBA.com/Stats',
                                        url : 'http://stats.nba.com'
									},
									{
										label : 'Sortable Player Stats',
										url : 'http://stats.nba.com/leaguePlayerGeneral.html'
									},
                                    {
                                        label : 'Sortable Team Stats',
                                        url : 'http://stats.nba.com/leagueTeamGeneral.html'
                                    },
                                    {
                                        label : 'Category Leaders',
                                        url : 'http://stats.nba.com/leaders.html'
                                    },
                                    {
                                        label : 'Scoring Leaders',
                                        url : 'http://stats.nba.com/leadersGrid.html?PerMode=Totals&sortField=PTS&Season=2012-13&SeasonType=Regular%20Season&Scope=S&StatCategory=PTS'
                                    },
                                    {
                                        label : 'League Lineups',
                                        url : 'http://stats.nba.com/leagueLineups.html'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Every NBA Box Score (1946-Present)',
                                        url : 'http://stats.nba.com/scores.html'
                                    },
                                    {
                                        label : 'Complete Franchise History',
                                        url : 'http://stats.nba.com/history.html'
                                    },
                                    {
                                    	label : 'Shot Charts',
                                    	url : 'http://stats.nba.com/shotcharts.html'
                                    },
                                    {
                                        label : 'Stats Blog',
                                        url : 'http://hangtime.blogs.nba.com/category/nba-comstats'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "Mobile",
        url: "http://www.nba.com/mobile",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'NBA Mobile Products',
                                        url : 'http://www.nba.com/mobile'
									},
                                    {
                                        label : 'NBA Game Time Connected',
                                        url : 'http://www.nba.com/connected'
                                    },
                                    {
                                        label : 'LEAGUE PASS Mobile',
                                        url : 'http://www.nba.com/leaguepass/mobile'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Custom Covers &amp; Cases',
                                        url : 'http://www.coveroo.com/nba',
										target: "_blank"
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "TV",
        url: "http://www.nba.com/nbatv",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'National TV Schedule',
                                        url : 'http://www.nba.com/schedules/national_tv_schedule/index.html'
									},
                                    {
                                        label : 'NBA TV',
                                        url : 'http://www.nba.com/nbatv'
                                    },
                                    {
                                        label : 'NBA on TNT',
                                        url : 'http://www.nba.com/nbaontnt'
                                    },
                                    {
                                    	label : 'NBA on ESPN',
                                    	url : 'http://www.nba.com/schedules/national_tv_schedule/ESPN'
                                    },
                                    {
                                    	label : 'NBA on ABC',
                                    	url : 'http://www.nba.com/schedules/national_tv_schedule/ABC'
                                    },
                                    {
                                        label : 'International TV Schedule',
                                        url : 'http://www.nba.com/schedules/international_nba_tv_schedule.html'
                                    },
                                    {
                                        label : 'Canadian TV Schedule',
                                        url : 'http://www.nba.com/schedules/national_tv_schedule/canada'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'NBA Fan Night',
                                        url : 'http://www.nba.com/fannight'
                                    },
									{
                                        label : 'The Association',
                                        url : 'http://www.nba.com/the-association'
                                    },
                                    {
                                    	label : 'Open Court',
                                    	url : 'http://www.nba.com/opencourt'
                                    },
									{
                                        label : 'Inside the NBA',
                                        url : 'http://www.nba.com/video/Inside_the_NBA'
                                    },
									{
                                        label : 'TV Companion',
                                        url : 'http://www.nba.com/tvc/info.html'
                                    },
									{
                                        label : 'Connected TVs',
                                        url : 'http://www.nba.com/connected/index.html'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, {    
       id: "League Pass",
        url: "http://www.nba.com/leaguepass",
        nbacl: "",
        items: [
                    {       
                        div: "nbaPrimary",
                        subhead: "",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'LP for TV',
                                        url : 'http://www.nba.com/leaguepass/3pp'
									},
                                    {
                                        label : 'Activate LP for TV',
                                        url : 'http://www.nba.com/leaguepass/activate'
                                    },
                                    {
                                        label : 'LP Broadband',
                                        url : 'http://www.nba.com/leaguepass/broadband'
                                    },
                                    {
                                        label : 'LP Mobile',
                                        url : 'http://www.nba.com/leaguepass/mobile'
                                    },
                                    {
                                        label : 'International LP Broadband',
                                        url : 'http://watch.nba.com/nba/subscribe'
                                    },
                                    {
                                        label : 'LP Audio',
                                        url : 'http://www.nba.com/allaccess/watchListen.html'
                                    }
                                ]
                            }
                        ]
                },
                {
                        div: "nbaSecondary",
                        subhead: "More",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Help',
                                        url : 'http://www.nba.com/leaguepass/broadband/help.html'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }, 
//    {    
//       id: "Store",
//        url: "http://www.nba.com/global/storelinkhandler.html",
//        nbacl: "",
//        items: [
//                    {       
//                        div: "nbaPrimary",
//                        subhead: "",
//                        subs : [
//                            {
//                                teams : [
//                                    {
//                                        label : 'Jerseys',
//                                        url : 'http://store.nba.com/entry.point?entry=2482948&source=NBA_Jerseys'
//									},
//                                    {
//                                        label : 'Mens',
//                                        url : 'http://store.nba.com/entry.point?entry=2482948&source=NBA_Jerseys'
//                                    },
//                                    {
//                                        label : 'Kids',
//                                        url : 'http://store.nba.com/entry.point?entry=1400501&source=NBA_Kids'
//                                    },
//                                    {
//                                        label : 'NBA4HER',
//                                        url : 'http://store.nba.com/entry.point?entry=1400501&source=NBA_Kids'
//                                    },
//                                    {
//                                        label : 'Custom Shop',
//                                        url : 'http://store.nba.com/entry.point?entry=3358354&source=NBA_CustomShop'
//                                    },
//                                    {
//                                        label : 'Headwear',
//                                        url : 'http://store.nba.com/entry.point?entry=2132627&source=NBA_Headwear'
//                                    },
//                                    {
//                                        label : 'Basketballs',
//                                        url : 'http://store.nba.com/entry.point?entry=2132627&source=NBA_Headwear'
//                                    },
//                                    {
//                                        label : 'Footwear',
//                                        url : 'http://store.nba.com/entry.point?entry=2710536&source=NBA_Footwear'
//                                    },
//                                    {
//                                        label : 'What&#39;s Hot',
//                                        url : 'http://store.nba.com/entry.point?entry=2849973&source=NBA_WhatsHot'
//                                    },
//                                    {
//                                        label : 'Auctions',
//                                        url : 'http://auctions.nba.com',
//										target: '_blank'
//                                    },
//                                    {
//                                        label : 'NBAGameworn.com',
//                                        url : 'http://NBAGameworn.com'
//                                    },
//                                    {
//                                        label : 'Shop Photo Store',
//                                        url : 'http://www.photostore.nba.com/?sourceid=TopNav_Photos'
//                                    },
//                                    {
//                                        label : 'NYC Store',
//                                        url : 'http://www.nba.com/nycstore'
//                                    }
//                                ]
//                            }
//                        ]
//                }
//        ]
//    },
    {    
        id: "Fantasy",
         url: "http://www.nba.com/fantasy",
         nbacl: "",
         items: [
            {       
                div: "nbaPrimary",
                subhead: "",
                subs : [
                   {
                       teams : [
                           {
                        	   label : 'NBA.com/Yahoo! Sports Fantasy Basketball',
                        	   url : 'http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=5577949&PluID=0&ord=[timestamp]'
                           },
                           {
                        	   label : 'Fantasy Video',
                        	   url : 'http://www.nba.com/video/nbatv/fantasy'
                           },
                           {
                        	   label : 'Fantasy Blogs',
                        	   url : 'http://hangtime.blogs.nba.com/category/fantasy'
                           },
                           {
                        	   label : 'NBA Fantasy on Twitter',
                        	   url : 'https://twitter.com/nbafantasy'
                           },
						   {
                        	   label : 'Drive to the Finals',
                        	   url : 'http://www.nba.com/drive'
                           }
                       ]
                   }
               ]
            }
        ]
    },     
    {    
    	id: "Playoffs",
        url: "http://www.nba.com/playoffs/",
        nbacl: "nbaPreventDefault",
        items: [
                    {       
                    	div: "nbaPrimary",
                        subhead: "Western Conference",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Thunder vs. Rockets',
                                        url : 'http://www.nba.com/playoffs/2013/westseries1/'
                                    },
                                    {
                                        label : 'Spurs vs. Lakers',
                                        url : 'http://www.nba.com/playoffs/2013/westseries2/'
                                    },
                                    {
                                        label : 'Nuggets vs. Warriors',
                                        url : 'http://www.nba.com/playoffs/2013/westseries3/'
                                    },
                                    {
                                        label : 'Clippers vs. Grizzlies',
                                        url : 'http://www.nba.com/playoffs/2013/westseries4/'
                                    }
                                ]
                            }
                        ]
                    
                },
                {
                        div: "nbaPrimary",
                        subhead: "Eastern Conference",
                        subs : [
                            {
                                teams : [
                                    {
                                        label : 'Heat vs. Bucks',
                                        url : 'http://www.nba.com/playoffs/2013/eastseries1/'
                                    },
                                    {
                                        label : 'Knicks vs. Celtics',
                                        url : 'http://www.nba.com/playoffs/2013/eastseries2/'
                                    },
                                    {
                                        label : 'Pacers vs. Hawks',
                                        url : 'http://www.nba.com/playoffs/2013/eastseries3/'
                                    },
                                    {
                                        label : 'Nets vs. Bulls',
                                        url : 'http://www.nba.com/playoffs/2013/eastseries4/'
                                    }
                                ]
                            }
                        ]
                }
        ]
    }]  
}

$nbaNav.init();