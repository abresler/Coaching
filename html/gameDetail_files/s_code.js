/* SiteCatalyst code version: H.20.3.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com */

/************ GLOBAL AUTOMATED DATA COLLECTED (ALWAYS EXECUTED WHEN PAGE LOADS) ****************/

/************************** GLOBAL FUNCTIONS *************************/

/* Set up some global hashes */

/* Save on file size when referencing the main window */
var w = window;

w.nbaOmInternalSites = [
	'nba.com',
	'turner.com',
	'wnba.com',
	'amwaycenter.com',
	'atlantahawkscheerleaders.com',
	'blazers.com',
	'blazers.teamworkonline.com',
	'blazersfanshop.com',
	'blog.lakers.com',
	'blog.suns.com',
	'blogs.bulls.com',
	'blogs.suns.com',
	'blogs.trailblazers.com',
	'bucks.com',
	'bucksmvp.com',
	'bullsconnect.com',
	'bullstv.com',
	'cavaliersteamshop.com',
	'cavfanatic.com',
	'evenue.net',
	'forthefans.rockets.com',
	'grizzliesonline.com',
	'hawksbasketblog.com',
	'heat.infopop.cc',
	'highlightfactory.com',
	'houstontoyotacenter.com',
	'iamatrailblazersfan.com',
	'iwantbenny.com',
	'kingsconnect.com',
	'knicksnet.com',
	'knicksnow.com',
	'lakersstore.com',
	'miamihoopsgear.com',
	'mvp.cavs.com',
	'my.clippers.com',
	'my.lakers.com',
	'mymavs.net',
	'nba.de',
	'orlandomagic.teamworkonline.com',
	'orlandomagicshop.com',
	'pacersarea55.com',
	'pacerselite.com',
	'pacersfoundation.com',
	'pacersmvp.com',
	'palacenet.com',
	'postingup.2dogs.com',
	'sponsor.suns.com',
	'suns.planetorange.net',
	'sunsdancers.com',
	'sunslockerroom.com',
	'ticketmaster.com',
	'ticketingcentral.com',
	'timberwolvespremium.com',
	'toyotacentertix.com',
	'usabasketball.com',
	'utahjazz.com',
	'utahjazz360.com',
	'utahjazzstore.com',
	'verizoncenter.com',
	'veritix.com',
	'washingtonwizardsblog.com',
	'whitehotheat.com',
	'wizardgirls.com',
	'wolvesdraft.com',
	'atlantadream.net',
	'chicagosky.net',
	'lynxbasketball.com',
	'nyliberty.com',
	'sasilverstars.com',
	'stormbasketball.com'
];

w.nbaOmSuiteEnvTypes = {
	prod: [
		'account',
		'audience',
		'court',
		'fantasy',
		'hoopedia',
		'it',
		'match',
		'my',
		'nba',
		'nbase',
		'premium',
		'shootout',
		'store',
		'taiwan',
		'widgets',
		'www'
	],
	dev: [
		'dev',
		'ref',
		'qa',
		'preview',
		'pt',
		'qai',
		'sp',
		'webdev',
		'staging'
	]
};

w.nbaOmTentPoles = {
	dleague:[
		'allstar',
		'draft',
		'finals'
	],
	nba:[
		'allstar',
		'asiachallenge',
		'awards',
		'dancebracket',
		'dancecontest',
		'decision',
		'draft',
		'europelive',
		'finals',
		'madness',
		'playoffs',
		'preview',
		'seasonpreview',
		'summerleague'
	],
	wnba:[
		'allstar',
		'draft',
		'finals'
	]
}

w.nbaOmSuites = {
	dleague: [
		{
			site: '66ers',
			suite: 'nbag-d-66ers',
			matchKeys: ['66ers','tulsa']
		},
		{
			site: 'armor',
			suite: 'nbag-d-armor',
			matchKeys: ['armor','springfield']
		},
		{
			site: 'bayhawks',
			suite: 'nbag-d-bayhawks',
			matchKeys: ['bayhawks','erie']
		},
		{
			site: 'bighorns',
			suite: 'nbag-d-bighorns',
			matchKeys: ['bighorns','reno']
		},
		{
			site: 'canton',
			suite: 'nbag-d-canton',
			matchKeys: ['canton']
		},
		{
			site: 'dfenders',
			suite: 'nbag-d-dfenders',
			matchKeys: ['dfenders','losangeles']
		},
		{
			site: 'energy',
			suite: 'nbag-d-energy',
			matchKeys: ['energy','iowa']
		},
		{
			site: 'flash',
			suite: 'nbag-d-flash',
			matchKeys: ['flash','utah']
		},
		{
			site: 'legends',
			suite: 'nbag-d-frisco',
			matchKeys: ['frisco', 'texas', 'legends']
		},
		{
			site: 'jam',
			suite: 'nbag-d-jam',
			matchKeys: ['jam','bakersfield']
		},
		{
			site: 'madants',
			suite: 'nbag-d-madants',
			matchKeys: ['madants','fortwayne']
		},
		{
			site: 'redclaws',
			suite: 'nbag-d-redclaws',
			matchKeys: ['redclaws','maine']
		},
		{
			site: 'skyforce',
			suite: 'nbag-d-skyforce',
			matchKeys: ['skyforce','siouxfalls']
		},
		{
			site: 'stampede',
			suite: 'nbag-d-stampede',
			matchKeys: ['stampede','idaho']
		},
		{
			site: 'thunderbirds',
			suite: 'nbag-d-thunderbirds',
			matchKeys: ['thunderbirds','albuquerque','newmexico']
		},
		{
			site: 'toros',
			suite: 'nbag-d-toros',
			matchKeys: ['toros','austin']
		},
		{
			site: 'vipers',
			suite: 'nbag-d-vipers',
			matchKeys: ['vipers','riograndevalley']
		},
		{
			site: 'warriors',
			suite: 'nbag-d-wizards',
			matchKeys: ['dwarriors','santacruz']
		}
	],
	international: [
		{
			site: 'international',
			suite: 'nbag-i-international',
			matchKeys: ['international']
		},
		{
			site: 'brasil',
			suite: 'nbag-i-brasil',
			matchKeys: ['brasil']
		},
		{
			site: 'canada',
			suite: 'nbag-i-canada',
			matchKeys: ['ca']
		},
		{
			site: 'espanol',
			suite: 'nbag-i-espanol',
			matchKeys: ['ar','es','mx','espanol','enebea']
		},
		{
			site: 'france',
			suite: 'nbag-i-france',
			matchKeys: ['france','fr']
		},
		{
			site: 'germany',
			suite: 'nbag-i-germany',
			matchKeys: ['de','germany']
		},
		{
			site: 'internationalleaguepass',
			suite: 'nbag-i-ilp',
			matchKeys: ['internationalleaguepass']
		},
		{
			site: 'italy',
			suite: 'nbag-i-italy',
			matchKeys: ['it']
		},
		{
			site: 'japan',
			suite: 'nbag-i-japan',
			matchKeys: ['jp','japan']
		},
		{
			site: 'mexico',
			suite: 'nbag-i-mexico',
			matchKeys: ['mexico']
		},
		{
			site: 'unitedkingdom',
			suite: 'nbag-i-uk',
			matchKeys: ['uk']
		},
		{
			site: 'africa',
			suite: 'nbag-i-africa',
			matchKeys: ['africa']
		},
		{
			site: 'india',
			suite: 'nbag-i-india',
			matchKeys: ['india']
		},
		{
			site: 'philippines',
			suite: 'nbag-i-philippines',
			matchKeys: ['philippines']
		}
	],
	league: [
		{
			site: 'dleague',
			suite: 'nbag-d-league',
			matchKeys: ['nba.com/dleague','www.d-league.com']
		},
		{
			site: 'nba',
			suite: 'nbag-n-league',
			matchKeys: ['www.nba.com','account-qai.nba.com','premium-qa.nba.com','aud-qai.nba.com','nba-preview.nba.com','nba-ref-preview.nba.com','nba-qa-preview.nba.com','nba-webdev-preview.nba.com','account.nba.com','audience.nba.com','court.nba.com','fantasy.nba.com','hoopedia.nba.com','match.nba.com','my.nba.com','nbase.nba.com','www.my.nba.com','widgets.nba.com','www.widgets.nba.com','premium.nba.com','shootout.nba.com','store.nba.com','nba.fb.turner.com','dev.nba.com','www.dev.staging.nba.com','www.ref.staging.nba.com']
		},
		{
			site: 'wnba',
			suite: 'nbag-w-league',
			matchKeys: ['www.wnba.com','my.wnba.com','www.my.wnba.com','account.wnba.com','audience.wnba.com','wnba.fb.turner.com']
		}
	],
	nba: [
		{
			site: '76ers',
			suite: 'nbag-n-76ers',
			matchKeys: ['76ers','sixers']
		},
		{
			site: 'blazers',
			suite: 'nbag-n-blazers',
			matchKeys: ['blazers']
		},
		{
			site: 'bobcats',
			suite: 'nbag-n-bobcats',
			matchKeys: ['bobcats']
		},
		{
			site: 'bucks',
			suite: 'nbag-n-bucks',
			matchKeys: ['bucks']
		},
		{
			site: 'bulls',
			suite: 'nbag-n-bulls',
			matchKeys: ['bulls']
		},
		{
			site: 'cavaliers',
			suite: 'nbag-n-cavaliers',
			matchKeys: ['cavaliers']
		},
		{
			site: 'celtics',
			suite: 'nbag-n-celtics',
			matchKeys: ['celtics']
		},
		{
			site: 'clippers',
			suite: 'nbag-n-clippers',
			matchKeys: ['clippers']
		},
		{
			site: 'grizzlies',
			suite: 'nbag-n-grizzlies',
			matchKeys: ['grizzlies']
		},
		{
			site: 'hawks',
			suite: 'nbag-n-hawks',
			matchKeys: ['hawks']
		},
		{
			site: 'heat',
			suite: 'nbag-n-heat',
			matchKeys: ['heat']
		},
		{
			site: 'hornets',
			suite: 'nbag-n-hornets',
			matchKeys: ['hornets']
		},
		{
			site: 'jazz',
			suite: 'nbag-n-jazz',
			matchKeys: ['jazz']
		},
		{
			site: 'kings',
			suite: 'nbag-n-kings',
			matchKeys: ['kings']
		},
		{
			site: 'knicks',
			suite: 'nbag-n-knicks',
			matchKeys: ['knicks']
		},
		{
			site: 'lakers',
			suite: 'nbag-n-lakers',
			matchKeys: ['lakers']
		},
		{
			site: 'magic',
			suite: 'nbag-n-magic',
			matchKeys: ['magic']
		},
		{
			site: 'mavericks',
			suite: 'nbag-n-mavericks',
			matchKeys: ['mavericks']
		},
		{
			site: 'nets',
			suite: 'nbag-n-nets',
			matchKeys: ['nets']
		},
		{
			site: 'nuggets',
			suite: 'nbag-n-nuggets',
			matchKeys: ['nuggets']
		},
		{
			site: 'pacers',
			suite: 'nbag-n-pacers',
			matchKeys: ['pacers']
		},
		{
			site: 'pelicans',
			suite: 'nbag-n-hornets',
			matchKeys: ['pelicans']
		},
		{
			site: 'pistons',
			suite: 'nbag-n-pistons',
			matchKeys: ['pistons']
		},
		{
			site: 'raptors',
			suite: 'nbag-n-raptors',
			matchKeys: ['raptors']
		},
		{
			site: 'rockets',
			suite: 'nbag-n-rockets',
			matchKeys: ['rockets']
		},
		{
			site: 'spurs',
			suite: 'nbag-n-spurs',
			matchKeys: ['spurs']
		},
		{
			site: 'suns',
			suite: 'nbag-n-suns',
			matchKeys: ['suns']
		},
		{
			site: 'thunder',
			suite: 'nbag-n-thunder',
			matchKeys: ['thunder']
		},
		{
			site: 'timberwolves',
			suite: 'nbag-n-timberwolves',
			matchKeys: ['timberwolves']
		},
		{
			site: 'warriors',
			suite: 'nbag-n-warriors',
			matchKeys: ['warriors']
		},
		{
			site: 'wizards',
			suite: 'nbag-n-wizards',
			matchKeys: ['wizards']
		}
	],
	other: [
		{
			site: 'default',
			suite: 'nbag-o-default',
			matchKeys: ['default']
		},
		{
			site: 'offsite',
			suite: 'nbag-o-offsite',
			matchKeys: ['www.scriptlink.org']
		}
	],
	partner: [
		{
			site: 'china',
			suite: 'nbag-p-china',
			matchKeys: ['nba.tom.com']
		},
		{
			site: 'hongkong',
			suite: 'nbag-p-hongkong',
			matchKeys: ['hk.nba.tom.com']
		},
		{
			site: 'india',
			suite: 'nbag-p-india',
			matchKeys: ['india.nba.com']
		},
		{
			site: 'philippines',
			suite: 'nbag-p-philippines',
			matchKeys: ['philippines.nba.com']
		},
		{
			site: 'taiwan',
			suite: 'nbag-p-taiwan',
			matchKeys: ['taiwan.nba.com']
		}
	],
	tickets: [
		{
			site: 'nbaticketing',
			suite: 'nbag-n-tickets',
			matchKeys: ['ticketmaster.com','ticketingcentral.com','veritix.com','evenue.net']
		}
	],
	wnba: [
		{
			site: 'dream',
			suite: 'nbag-w-dream',
			matchKeys: ['dream']
		},
		{
			site: 'fever',
			suite: 'nbag-w-fever',
			matchKeys: ['fever']
		},
		{
			site: 'lynx',
			suite: 'nbag-w-lynx',
			matchKeys: ['lynx']
		},
		{
			site: 'liberty',
			suite: 'nbag-w-liberty',
			matchKeys: ['liberty']
		},
		{
			site: 'mercury',
			suite: 'nbag-w-mercury',
			matchKeys: ['mercury']
		},
		{
			site: 'monarchs',
			suite: 'nbag-w-monarchs',
			matchKeys: ['monarchs']
		},
		{
			site: 'mystics',
			suite: 'nbag-w-mystics',
			matchKeys: ['mystics']
		},
		{
			site: 'shock',
			suite: 'nbag-w-shock',
			matchKeys: ['shock']
		},
		{
			site: 'silverstars',
			suite: 'nbag-w-silverstars',
			matchKeys: ['silverstars']
		},
		{
			site: 'sky',
			suite: 'nbag-w-sky',
			matchKeys: ['sky']
		},
		{
			site: 'sparks',
			suite: 'nbag-w-sparks',
			matchKeys: ['sparks']
		},
		{
			site: 'storm',
			suite: 'nbag-w-storm',
			matchKeys: ['storm']
		},
		{
			site: 'sun',
			suite: 'nbag-w-sun',
			matchKeys: ['sun']
		}
	]
};

/* Set up an object to do some preprocessing */
var nbaOmGlobals=new Object();

nbaOmGlobals.getSuite=function(currentSuite) {

	if (w.nbaOmSuiteEnv == 'dev') {
		return currentSuite + '-dev';
	} else {
		return currentSuite;
	}
}

nbaOmGlobals.parseQueryString=function(queryString) {

	if (queryString) {
		/* Set up a temp. object. */
		var tempQueryParams = {};

		/* Split into query string pairs. */
		var tempPairs = queryString.split('&');

		/* Split pair into individual elements.  */
		for (i=0; i < tempPairs.length; i++) {
			var pairValues = tempPairs[i].split("=");
			tempQueryParams[pairValues[0]] = pairValues[1];
		}

		return tempQueryParams;
	} else {
		return {};
	}
}

/* Check for a match and set some globals if found */
nbaOmGlobals.setSuite=function(matchValue,suiteType) {

	var currentSuite = w.nbaOmSuites[suiteType];
	for (var i=0;i < currentSuite.length;i++) {
		var matchKeys = currentSuite[i].matchKeys;
		for (var j=0;j < matchKeys.length;j++) {
			if (matchKeys[j] == matchValue) {
				w.nbaOmSuiteInfo.sites.unshift(currentSuite[i].site);
				w.nbaOmSuiteInfo.types.unshift(suiteType);
				w.nbaOmSuiteInfo.suites.unshift(this.getSuite(currentSuite[i].suite));
				switch (suiteType) {
					case 'dleague': case 'nba': case 'wnba':
						w.nbaOmSuiteInfo.currentTeam = currentSuite[i].site;
						w.nbaOmSuiteInfo.hiers[1] = 'teams';
						w.nbaOmSuiteInfo.hiers[2] = w.nbaOmSuiteInfo.currentTeam;
					break;
					case 'international':
						w.nbaOmSuiteInfo.hiers[0] = 'international';
						w.nbaOmSuiteInfo.hiers[1] = 'countries';
						if (!w.nbaOmSuiteInfo.hiers[2]) {
							w.nbaOmSuiteInfo.currentLeague = currentSuite[i].site;
							w.nbaOmSuiteInfo.hiers[2] = w.nbaOmSuiteInfo.currentLeague;
						}
					break;
					case 'league':
						w.nbaOmSuiteInfo.currentLeague = currentSuite[i].site;
						w.nbaOmSuiteInfo.hiers[0] = currentSuite[i].site;
						switch (currentSuite[i].site) {
							case 'dleague':
								w.nbaOmSuiteInfo.hiers[1] = 'd-league.com';
							break;
							case 'nba':
								w.nbaOmSuiteInfo.hiers[1] = 'nba.com';
							break;
							case 'wnba':
								w.nbaOmSuiteInfo.hiers[1] = 'wnba.com';
							break;
							default:
								w.nbaOmSuiteInfo.hiers[1] = (w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain);
						}
						w.nbaOmSuiteInfo.hiers[2] = (w.nbaOmSuiteInfo.hiers[1]);
					break;
					case 'tickets':
						w.nbaOmSuiteInfo.currentLeague = 'nba';
						w.nbaOmSuiteInfo.hiers[0] = w.nbaOmSuiteInfo.currentLeague;
						w.nbaOmSuiteInfo.hiers[1] = 'nba.com';
						w.nbaOmSuiteInfo.hiers[2] = (w.nbaOmSuiteInfo.hiers[1]);
					break;
					default:
						w.nbaOmSuiteInfo.currentLeague=w.nbaOmSecondDomain;
						w.nbaOmSuiteInfo.hiers[0] = w.nbaOmSuiteInfo.currentLeague;
						w.nbaOmSuiteInfo.hiers[1] = (w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain);
						w.nbaOmSuiteInfo.hiers[2] = (w.nbaOmSuiteInfo.hiers[1]);
				}
				return true;
			}
		}
	}
	return false;
}

nbaOmGlobals.doGlobal=function() {

	/* Translate legacy globals to new globals
	 * (old $_om globals should no longer be used) */
	if(w.$_om_rsid){w.nbaOmAccountIds = w.$_om_rsid;}
	if(w.$_om_pageTitle){w.nbaOmPageTitle = w.$_om_pageTitle;}
	/* What should we do if the following two are set?  They will not fit into the new SDR. */
	if(w.$_om_section){w.nbaOmSection = w.$_om_section;}
	if(w.$_om_subsection){w.nbaOmSubsection = w.$_om_subsection;}
	if(w.$_om_site){w.nbaOmServer = w.$_om_site;}
	if(w.$_om_breadcrumb){w.nbaOmBreadcrumb = w.$_om_breadcrumb;}
	if(w.$_om_articleId){w.nbaOmArticleId = w.$_om_articleId;}
	if(w.$_om_galleryId){w.nbaOmGalleryId = w.$_om_galleryId;}
	if(w.$_om_pCode){w.nbaOmPCode = w.$_om_pCode;}
	if(w.$_om_flowName){w.nbaOmFlowName = w.$_om_flowName;}
	if(w.$_om_regTarget){w.nbaOmRegTarget = w.$_om_regTarget;}
	if(w.$_om_regTarget){w.nbaOmRegType = w.$_om_regTarget;}
	if(w.$_om_products){w.nbaOmProducts = w.$_om_products;}
	w.nbaOmSuiteInfo = {
			hiers: [],
			sites: [],
			types: [],
			suites: []
	};

	/* Get the current site. */
	w.nbaOmURI = w.location.href;

	/* HTTP or HTTPS Protocol */
	w.nbaOmProtocol = w.location.protocol;
	w.nbaOmSecure = (w.nbaOmProtocol == 'https:' ? true : false);

	/* Set the full domain. */
	w.nbaOmFullDomain = w.location.hostname;

	/* Break down the domain into its different levels */
	w.nbaOmDomains = w.nbaOmFullDomain.split('.');

	/* Split up domain levels.  Creating these to make the logic easier to follow, obviously could have just used the array */
	w.nbaOmTopDomain = w.nbaOmDomains[w.nbaOmDomains.length-1];
	w.nbaOmSecondDomain = w.nbaOmDomains[w.nbaOmDomains.length-2];
	w.nbaOmThirdDomain = (w.nbaOmDomains.length-3 >= 0 ? w.nbaOmDomains[w.nbaOmDomains.length-3] : null);
	w.nbaOmFourthDomain = (w.nbaOmDomains.length-4 >= 0 ? w.nbaOmDomains[w.nbaOmDomains.length-4] : null);
	w.nbaOmFiveDomain = (w.nbaOmDomains.length-5 >= 0 ? w.nbaOmDomains[w.nbaOmDomains.length-5] : null);

	/* Set the full path name. */
	w.nbaOmFullPath = w.location.pathname;	

	/* Split the folders */
	if (w.nbaOmFullPath.split('/').length == 1) {
		w.nbaOmFolders = [];
		w.nbaOmFileName = w.nbaOmFullPath; 
	} else {
		w.nbaOmFolders = w.nbaOmFullPath.match(/^(\/(.*))?$/)[2].split('/');
		w.nbaOmFileName = w.nbaOmFolders.pop();
	}

	/* Split up folders into levels.  Creating these to make the logic easier to follow, obviously could have just used the array */
	w.nbaOmFirstFolder = (w.nbaOmFolders.length >= 1 ? w.nbaOmFolders[0] : null);
	w.nbaOmSecondFolder = (w.nbaOmFolders.length >= 2 ? w.nbaOmFolders[1] : null);
	w.nbaOmThirdFolder = (w.nbaOmFolders.length >= 3 ? w.nbaOmFolders[2] : null);
	w.nbaOmFourthFolder = (w.nbaOmFolders.length >= 4 ? w.nbaOmFolders[3] : null);
	w.nbaOmFifthFolder = (w.nbaOmFolders.length >= 5 ? w.nbaOmFolders[4] : null);
	w.nbaOmSixthFolder = (w.nbaOmFolders.length >= 6 ? w.nbaOmFolders[5] : null);

	/* Parse the query string. */
	w.nbaOmQueryParams = this.parseQueryString(w.location.search.substring(1));

	/* Set the anchor. */
	w.nbaOmAnchor = w.location.hash.match(/(#(.*))?/)[2];

	/* Set the real environment */
	if (w.nbaOmThirdDomain) {
		w.nbaOmEnv = (w.nbaOmThirdDomain.search(/^(aud|wnba|nba)-\w*(-\w*)?$/) != -1 ? w.nbaOmThirdDomain.match(new RegExp("^\\w*-(" + w.nbaOmSuiteEnvTypes.dev.join('|') + ")" ))[1] : w.nbaOmThirdDomain.replace(new RegExp(w.nbaOmSuiteEnvTypes.prod.join('|')),'prod'));
	} else {
		w.nbaOmEnv = 'prod';
	}

	/* Set the suite environment since there are less possibilities (only "prod" and "dev") */
	w.nbaOmSuiteEnv = w.nbaOmEnv.replace(new RegExp(w.nbaOmSuiteEnvTypes.dev.join('|')),'dev');

	/* Might need to make logic more intelligent when dealing with a suite name that is already set. */

	/* Check Ticket Suites */
	if (this.setSuite(w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain,'tickets')) {

		if (w.nbaOmCurrentLeague) {
			w.nbaOmCurrentLeague=w.nbaOmCurrentLeague.toLowerCase();
			if(this.setSuite('www.'+w.nbaOmCurrentLeague+'.com','league')) {
				if (w.nbaOmCurrentTeam) {
					w.nbaOmCurrentTeam=w.nbaOmCurrentTeam.toLowerCase();
					this.setSuite(w.nbaOmCurrentTeam,w.nbaOmCurrentLeague.replace(/-/,''))
				}		
			}
		}
		w.nbaOmSuiteInfo.suites=w.nbaOmSuiteInfo.suites.reverse();

	/* Check the team 3rd party override */
	} else if (w.nbaOmCurrentTeam && w.nbaOmCurrentLeague) {

		w.nbaOmCurrentTeam=w.nbaOmCurrentTeam.toLowerCase();
		w.nbaOmCurrentLeague=w.nbaOmCurrentLeague.toLowerCase();

		if (this.setSuite(w.nbaOmCurrentTeam,w.nbaOmCurrentLeague.replace(/-/,''))) {
			/* If not a regular league, then it is an international site. */
			if(!this.setSuite('www.'+w.nbaOmCurrentLeague+'.com','league')) {
				this.setSuite('international','international');
			}
		}
		nbaOmChannelPrefix=w.nbaOmCurrentTeam;
		nbaOmTeamHier=nbaOmChannelPrefix;
		/* Primary call needs to be to the team, not the league. */
		w.nbaOmSuiteInfo.suites=w.nbaOmSuiteInfo.suites.reverse();

	/* Check if it is a league-level override */
	} else if (w.nbaOmCurrentLeague) {

		w.nbaOmCurrentLeague=w.nbaOmCurrentLeague.toLowerCase();
		this.setSuite('www.'+w.nbaOmCurrentLeague+'.com','league');

	/* Is this China, Hong Kong, or Taiwan */
	} else if (this.setSuite(w.nbaOmFullDomain,'partner')) {

	/* Is this D-League or OneSite WNBA (Has to be checked separately because it is a subset of the nba.com domain) */
	} else if (w.nbaOmFirstFolder && this.setSuite(w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain + '/' + w.nbaOmFirstFolder,'league')) {

		/* If there is a D-League team, then get the team. */
		if (w.nbaOmSecondFolder && this.setSuite(w.nbaOmSecondFolder,w.nbaOmSuiteInfo.sites[0])) {
			/* A team was found. */
		}

	/* Other Country Suites */
	} else if ((w.nbaOmSecondDomain == 'nba' && w.nbaOmTopDomain && this.setSuite(w.nbaOmTopDomain,'international')) || (w.nbaOmSecondDomain == 'nba' && w.nbaOmThirdDomain && this.setSuite(w.nbaOmThirdDomain,'international')) || (w.nbaOmSecondDomain == 'nba' && w.nbaOmFirstFolder && this.setSuite(w.nbaOmFirstFolder,'international')) || (w.nbaOmSecondDomain == 'nba' && w.nbaOmQueryParams.country && this.setSuite(w.nbaOmQueryParams.country,'international'))) {
		if (w.nbaOmSuiteInfo.sites[0] != 'internationalleaguepass') {
			this.setSuite('international','international');
			w.nbaOmSuiteInfo.suites=w.nbaOmSuiteInfo.suites.reverse();
		}
	/* Is this NBA or WNBA */
	} else if (this.setSuite(w.nbaOmFullDomain,'league')) {

		/* Check if there is a team. */
		if (w.nbaOmFirstFolder && this.setSuite(w.nbaOmFirstFolder,w.nbaOmSuiteInfo.sites[0])) {
			/* A team was found. */
		}

	/* Check "Other" Suites */
	} else if (this.setSuite(w.nbaOmFullDomain,'other')) {

	/* Default */
	} else {
		this.setSuite('default','other');
	}
	if (!w.nbaOmAccountIds) {w.nbaOmAccountIds = w.nbaOmSuiteInfo.suites.join(',');}

	if (!w.nbaOmEnableLinkFilters) {
		var numSites = w.nbaOmInternalSites.length;
		for (var i=0;i<numSites;i++) {
			if (w.nbaOmInternalSites[i] == w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain || w.nbaOmInternalSites[i] == w.nbaOmThirdDomain + '.' + w.nbaOmSecondDomain + '.' + w.nbaOmTopDomain) {
				w.nbaOmEnableLinkFilters = true;
				break;
			}
		}
	}

	//Set the external link filters
	if (w.nbaOmLinkFilters) {
		var tempFilters = w.nbaOmLinkFilters.split(',');
		var numFilters = tempFilters.length;
		var allFilters = [];
		for (var i=0;i<numFilters;i++) {
			if (tempFilters[i] != 'javascript:') {
				allFilters.push(tempFilters[i]);
			}
		}
		w.nbaOmLinkInternalFilters="javascript:,"+allFilters.join(',');
	} else {
		w.nbaOmLinkInternalFilters="javascript:,"+w.nbaOmInternalSites.join(',');
	}
	if (w.nbaOmAppendLinkFilters) {
		var tempAppendFilters = w.nbaOmAppendLinkFilters.split(',');
		var numAppendFilters = tempAppendFilters.length;
		var allAppendFilters = [];
		for (var i=0;i<numAppendFilters;i++) {
			if (tempAppendFilters[i] != 'javascript:') {
				allAppendFilters.push(tempAppendFilters[i]);
			}
		}
		w.nbaOmLinkInternalFilters+=","+allAppendFilters.join(',');
	}
}

/* Execute global data collection (used by call plug-ins and API) */
nbaOmGlobals.doGlobal();

var s_account=(w.nbaOmAccountIds ? w.nbaOmAccountIds : "nbag-o-default");

var s=s_gi(s_account);
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8";
/* Conversion Config */
s.currencyCode="USD";
/* Link Tracking Config */
s.trackDownloadLinks=true;

s.trackExternalLinks=(w.nbaOmEnableLinkFilters && w.nbaOmEnableLinkFilters === true?true:false);

s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters=w.nbaOmLinkInternalFilters;
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
if (w.nbaOmSuiteInfo.currentLeague=='wnba') {
	s.trackingServer="metrics.wnba.com";
	s.trackingServerSecure="smetrics.wnba.com";
} else {
	s.trackingServer="metrics.nba.com";
	s.trackingServerSecure="smetrics.nba.com";
}

/************ PLUG-IN AUTOMATED DATA COLLECTED (ONLY EXECUTED WHEN AN OMNITURE CALL IS SENT) ****************/

s.usePlugins=true;
s.doPlugins=function(s) {

	/* Special Properties */
	s.pageName=(w.nbaOmPageTitle ? w.nbaOmFullDomain + ':' + w.nbaOmPageTitle : w.nbaOmFullDomain + ':' + w.nbaOmFullPath);
	s.pageType=s.getErrorPage();
	s.channel=s.getChannel();
	s.server=s.getValue(w.nbaOmServer,w.nbaOmFullDomain);
	if(!s.pageType) {
		s.hier1=s.getHier(1);
		s.hier2=s.getHier(2);
		s.hier3=s.getHier(3);
		s.hier4=s.getHier(4);
		s.hier5=s.getHier(5);
	}

	/* Set the state and zip information */
	s.state = s.getValue(w.nbaOmState);
	s.zip = s.getValue(w.nbaOmZip);

	/* Set some user information (if available) */
	s.prop1=(s.getCookieValue('TSid')?s.getCookieValue('TSid').replace(/^G/,''):null);
	s.prop2=s.getUserData(1);
	s.prop3=s.getUserData(2);

	/* General Properties */
	s.prop7=s.getValue(s.pageName); /* Copy the page name, needed for certain reports. */
	s.prop8=(s.prop1 ? 'Registered' : 'Non-Registered');
	s.prop12=s.getValue(w.nbaOmQueryParams.text,w.nbaOmQueryParams.q);
	s.prop13=s.getValue(w.nbaOmCommunity1);
	if (document.compatMode) {
		s.prop15=(document.compatMode =='BackCompat' ? 'quirks|' : 'standards|');
	} else {
		s.prop15='unknown|';
	}
	s.prop15=(s.prop15+(navigator.appName?navigator.appName.toLowerCase()+'|':'unknown|')+s.pageName);
	s.prop16=s.getValue(w.nbaOmFantasy1);
	s.prop17=(w.nbaCurrHour?String(w.nbaCurrHour).replace(/^[0]+/g,''):'none'); /* Grabbing from variable set by SSI. */
	s.prop18=s.getValue(w.nbaOmQueryParams.ls,w.nbaOmLinkSource); /* Probably need to expand on this logic, sent David detailed e-mail on this.  Michael Greenberg also wanted to expand on this. */
	s.prop19=s.getValue(w.nbaOmTeamCustom1);
	s.prop20=s.getValue(w.nbaOmTeamCustom2);
	s.prop22=s.getValue(w.nbaOmChannelPrefix,s.channelPrefix)+':';
	s.prop23=s.channel+':';
	s.prop24=s.getValue(w.nbaOmHPT1);

	/* TicketMaster Values */
	s.prop41=s.getValue(w.nbaOmTktArtistName);
	s.prop42=s.getValue(w.nbaOmTktEventName);
	s.prop43=s.getValue(w.nbaOmTktDateTime);
	s.prop44=s.getValue(w.nbaOmTktVenueName);
	s.prop45=s.getValue(w.nbaOmTktVenueZip);
	s.prop46=s.getValue(w.nbaOmTktSalesDate);
	s.prop47=s.getValue(w.nbaOmTktConfirmationCode);

	/* Stats Custom Values */
	s.prop48=s.getValue(w.nbaOmStatsCustom1);
	s.prop49=s.getValue(w.nbaOmStatsCustom2);
	s.prop50=s.getValue(w.nbaOmStatsCustom3);

	/* Commerce Variables */
	if(!s.campaign){s.campaign=s.getValue(w.nbaOmQueryParams.cid);}
	if(!s.products){s.products=s.getValue(w.nbaOmProducts);}
	/* Set any page events */
	if(!s.events){s.events = s.getValue(w.nbaOmEvents);}

	//Add the main page level event
	//if (s.events && s.events.indexOf('event5') == -1) {
	if (s.events) {
		var pageEventFound = false;
		var allEvents = s.events.split(',');
		var eventCount = allEvents.length;
		for (var i = 0; i < eventCount; i++) {
			if (allEvents[i] == 'event5') {
				pageEventFound = true;
				break;
			}
		}
		if (pageEventFound === false) {
			allEvents.push('event5');
			s.events = allEvents.join(',');
		}
	} else {
		s.events = 'event5';
	}

	/* Send eVars if an event has been set. */
	if (s.events) {
		/* Set some user information (if available) */
		if(!s.eVar1){s.eVar1=s.prop1}
		if(!s.eVar2){s.eVar2=s.prop2}
		if(!s.eVar3){s.eVar3=s.prop3}

		/* Video Related */
		if(!s.eVar4){s.eVar4=s.prop4}
		if(!s.eVar5){s.eVar5=s.prop5}
		if(!s.eVar6){s.eVar6=s.prop6}
		if(!s.eVar7){s.eVar7=s.prop10}

		/* Purchase League Pass */
		if(!s.eVar8){s.eVar8=s.getValue(w.nbaOmQueryParams.pCode,w.nbaOmPCode,true)}

		if(!s.eVar9){s.eVar9=s.pageName}

		/* Set the flow name for "Begin Flow" or "Complete Flow" events */
		if (!s.eVar13 && s.checkEvents('event1,event2',s.events)) {
			s.eVar13=s.getValue(w.nbaOmFlowName,null,true);	
		}

		/* Set the registration target and registration type if the "Start Registration" or "End Registration" event was triggered */
		if (s.checkEvents('event9,event10',s.events)) {
			if(!s.eVar14){s.eVar14=s.getValue(w.nbaOmRegTarget,'All-Access',true)}
			if(!s.eVar16){s.eVar16=s.getValue(w.nbaOmRegType,null,true)}
		}

		/* Reserved Community and Fantasy */
		if(!s.eVar17){s.eVar17=s.prop13}
		if(!s.eVar18){s.eVar18=s.prop18}
		
		/* Homepage 1 or 3 or 6 pack */
		if(!s.eVar24){s.eVar24=s.prop24}

		/* Reserved for the League */
		if(!s.eVar34){s.eVar34=s.prop22}
		if(!s.eVar35){s.eVar35=s.prop23}

		/* TicketMaster Values */
		if(!s.eVar41){s.eVar41=s.prop41}
		if(!s.eVar42){s.eVar42=s.prop42}
		if(!s.eVar43){s.eVar43=s.prop43}
		if(!s.eVar44){s.eVar44=s.prop44}
		if(!s.eVar45){s.eVar45=s.prop45}
		if(!s.eVar46){s.eVar46=s.prop46}
		if(!s.eVar47){s.eVar47=s.prop47}
	}

	/* If the Heartbeat Beacon Override is set */
	if (w.nbaOmHeartbeat && !w.nbaOmHeartbeatInterval) {
		w.nbaOmHeartbeatInterval = w.setInterval(s.heartbeat(w.nbaOmHeartbeat),60000);
	}

	/* If we want to force the clearing of the heartbeat beacon */
	if (w.nbaOmHeartbeatClear && w.nbaOmHeartbeatClear === true && w.nbaOmHeartbeatInterval) {
		w.clearInterval(w.nbaOmHeartbeatInterval);
	}
}

/************************** PLUGINS SECTION *************************/

s.getChannel=function() {
	switch (w.nbaOmSuiteInfo.currentLeague) {
		case 'nba': case 'wnba':
			if (w.nbaOmSuiteInfo.currentTeam) {
				this.channelPrefix=w.nbaOmSuiteInfo.currentTeam;
				this.channelName=(w.nbaOmSecondFolder ? w.nbaOmSecondFolder : 'main');
			} else {
				this.channelPrefix=w.nbaOmSuiteInfo.currentLeague;
				if (w.nbaOmFirstFolder && w.nbaOmSecondFolder && w.nbaOmSecondFolder.toString().match(/^\d{4}$/) && this.checkValue(w.nbaOmFirstFolder,w.nbaOmTentPoles[w.nbaOmSuiteInfo.currentLeague])) {
					this.channelName=w.nbaOmFirstFolder+w.nbaOmSecondFolder;
				} else {
					this.channelName=(w.nbaOmFirstFolder ? w.nbaOmFirstFolder : 'main');
				}
			}
		break;
		case 'dleague':
			if (w.nbaOmSuiteInfo.currentTeam) {
				this.channelPrefix=w.nbaOmSuiteInfo.currentTeam;
				this.channelName=(w.nbaOmThirdFolder ? w.nbaOmThirdFolder : 'main');
			} else {
				this.channelPrefix=w.nbaOmSuiteInfo.currentLeague;
				if (w.nbaOmSecondFolder && w.nbaOmThirdFolder && w.nbaOmThirdFolder.toString().match(/^\d{4}$/) && this.checkValue(w.nbaOmSecondFolder,w.nbaOmTentPoles[w.nbaOmSuiteInfo.currentLeague])) {
					this.channelName=w.nbaOmSecondFolder+w.nbaOmThirdFolder;
				} else {
					this.channelName=(w.nbaOmSecondFolder ? w.nbaOmSecondFolder : 'main');
				}
			}
		break;
		default:
			this.channelPrefix=w.nbaOmSuiteInfo.currentLeague;
			this.channelName='main';
	}
	return (w.nbaOmChannelPrefix?w.nbaOmChannelPrefix:this.channelPrefix)+':'+(w.nbaOmChannel?w.nbaOmChannel:this.channelName);
}

s.checkValue=function(value,array) {
	var count=array.length;
	for (var i=0;i<count;i++) {
		if (value == array[i]) {
			return true;
		}
	}
	return false;
}

s.checkEvents=function(checkList,activeList) {
	if (activeList) {
		var checkEvents = checkList.split(',');
		var activeEvents = activeList.split(',');

		for (var i=0;i<checkEvents.length;i++) {
			for (var k=0;k<activeEvents.length;k++) {
				if (activeEvents[k] == checkEvents[i]) {
					return activeEvents[k];
				}
			}
		}
	} else {
		return false;
	}
}

s.getValue=function(preferred,fallback,event) {

	/* Leaving this in because it was in Jarrod's code, appears to clear out an event if s.events is not set.  Need to investigate this further. */
	if(event && !this.events){
		return null;
	}
	return preferred || fallback || null;
}

s.getHier=function(level) {

	switch (level) {
		case 1:
			w.nbaOmSuiteInfo.hiers[3] = (w.nbaOmChannel?w.nbaOmChannel:this.channelName);
			/* Check to see if this video is being loaded via JavaScript, if so, use the JavaScript variable for the hierarchy. */
			if (w.nbaOmCurrentVideo && w.nbaOmCurrentVideo.search(/^\/video/) == -1) {
				var splitVideoPath = w.nbaOmCurrentVideo.split('/');
				if (splitVideoPath[0]) {
					w.nbaOmFirstVideoFolder = splitVideoPath[0];
				}
				if (splitVideoPath[1]) {
					w.nbaOmSecondVideoFolder = splitVideoPath[1];
				}
				if (splitVideoPath[2]) {
					w.nbaOmThirdVideoFolder = splitVideoPath[2];
				}
				if (splitVideoPath[3]) {
					w.nbaOmFourthVideoFolder = splitVideoPath[3];
				}
			} else if (w.nbaOmCurrentVideo && w.nbaOmCurrentVideo.search(/^\/video/) != -1) {
				var splitVideoPath = w.nbaOmCurrentVideo.split('/');
				if (splitVideoPath[2]) {
					w.nbaOmFirstVideoFolder = splitVideoPath[2];
				}
				if (splitVideoPath[3]) {
					w.nbaOmSecondVideoFolder = splitVideoPath[3];
				}
				if (splitVideoPath[4]) {
					w.nbaOmThirdVideoFolder = splitVideoPath[4];
				}
				if (splitVideoPath[5]) {
					w.nbaOmFourthVideoFolder = splitVideoPath[5];
				}
			} else if (w.nbaOmSuiteInfo.currentLeague == 'nba' && w.nbaOmFirstFolder && w.nbaOmFirstFolder == 'video' && w.nbaOmSecondFolder) {
				if (w.nbaOmSecondFolder) {
					w.nbaOmFirstVideoFolder = w.nbaOmSecondFolder;
				}
				if (w.nbaOmThirdFolder) {
					w.nbaOmSecondVideoFolder = w.nbaOmThirdFolder;
				}
				if (w.nbaOmFourthFolder) {
					w.nbaOmThirdVideoFolder = w.nbaOmFourthFolder;
				}
				if (w.nbaOmFifthFolder) {
					w.nbaOmFourthVideoFolder = w.nbaOmFifthFolder;
				}
			}
			if (w.nbaOmFirstVideoFolder) {
				w.nbaOmSuiteInfo.hiers[4] = w.nbaOmFirstVideoFolder;
				switch(w.nbaOmFirstVideoFolder) {
					case 'channels': case 'games': case 'teams':
						if (w.nbaOmSecondVideoFolder) {
							w.nbaOmSuiteInfo.hiers[5] = w.nbaOmSecondVideoFolder; 
						}
						if (w.nbaOmThirdVideoFolder) {
							w.nbaOmSuiteInfo.hiers[6] = w.nbaOmThirdVideoFolder; 
						}
						if (w.nbaOmFourthVideoFolder) {
							w.nbaOmSuiteInfo.hiers[7] = w.nbaOmFourthVideoFolder; 
						}
					break;
					case 'partners':
						if (w.nbaOmSecondVideoFolder) {
							w.nbaOmSuiteInfo.hiers[5] = w.nbaOmSecondVideoFolder; 
						}
						if (w.nbaOmThirdVideoFolder) {
							w.nbaOmSuiteInfo.hiers[6] = w.nbaOmThirdVideoFolder; 
						}
					break;
					//case 'archive': case 'featured': case 'general': case 'players':
						if (w.nbaOmSecondVideoFolder) {
							w.nbaOmSuiteInfo.hiers[5] = w.nbaOmSecondVideoFolder; 
						}
					//break;
				}
			}
			if (w.nbaOmHier) {
				w.nbaOmFullHier = w.nbaOmHier;
			} else if (w.nbaOmTeamHier) {
				w.nbaOmFullHier = w.nbaOmCurrentLeague+'|teams|'+w.nbaOmTeamHier;
			} else {
				w.nbaOmFullHier = w.nbaOmSuiteInfo.hiers.join('|');
			}
			if (w.nbaOmAppendHier) {
				w.nbaOmFullHier = w.nbaOmFullHier + '|' + w.nbaOmAppendHier;
			}
			/* Make sure to remove any extra whitespace */
			w.nbaOmFullHier = w.nbaOmFullHier.match(/^\s*(.*?)\s*$/)[1].replace(/\|\s*/g,'|').replace(/\s*\|/g,'|').toLowerCase();
			var start=0,finish=255;
		break;
		case 2:
			var start=255,finish=510;
		break;
		case 3:
			var start= 510,finish=765;
		break;
		case 4:
			var start=765,finish=1020;
		break;
		case 5:
			var start=1020,finish=1275;
		break;
		default:
			var start=0,finish=0;
	}

	return w.nbaOmFullHier.substring(start,finish) || null;
}

/* Need to confirm the actual name of the error page. 
 * Also need to confirm the errorPage value. */
s.getErrorPage=function() {
	return (w.nbaOm404Page == true ? 'errorPage' : null);
}

/* Taken from 1.0 s_code, slightly modified */
s.getCookieValue=function(c) {
	var cc=document.cookie,a=cc.split('; ');
	for (var i=0;i<a.length;i++){
		var k=a[i].split('=')[0]||null,v=a[i].split('=')[1]||null;
		if (k&&k==c) {return v;}
	}
	return null;
}

/* Taken from 1.0, slightly modified
 * First value is the array index number, second is an optional cookie name */
s.getUserData=function(n,cn) {
	var s=this,c=s.getCookieValue(cn||'AA-Member');
	if (c) {var u=unescape(c).split('|');
	if (u.length>n) {return u[n];}}
	return null;
}

s.heartbeat=function(siteSection) {
	return function() {
		s.linkTrackVars="events,eVar9,products";
		s.linkTrackEvents="event21";
		s.events="event21";
		s.products=";;;;event21=60";
		s.tl(this,"o",w.nbaOmSuiteInfo.currentLeague+"|heartbeat|"+siteSection);
		s.linkTrackVars="";
		s.linkTrackEvents="";
		s.events="";
		s.products="";
	}
}

/* Configure Modules and Plugins */

s.loadModule("Media");
s.Media.autoTrack=false;
s.Media.trackWhilePlaying=false;
s.Media.trackVars="None";
s.Media.trackEvents="None";

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="nbagroup";
s.dc="112";

/****************************** MODULES *****************************/
/* Module: Media */
s.m_Media_c="var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',"
+"x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0"
+";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m"
+"=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va"
+"r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,"
+"v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x="
+"=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a"
+"pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts"
+";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w"
+".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?"
+"m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m"
+".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i"
+".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p"
+"e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t"
+"){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',"
+"f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n"
+"ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc"
+"h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){"
+"p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n="
+"=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex"
+"t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui"
+"ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l"
+"=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&"
+"o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='"
+"RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!="
+"o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o."
+"'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+"
+"'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i"
+"sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
s.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s"
+".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func"
+"tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO"
+"f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(c=='AUTO"
+"'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';"
+"else y+=escape(c)}x=y}else{x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1)."
+"toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')):x};s.pt=function(x,d,f,a){var s=th"
+"is,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a"
+".indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0}"
+";s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(wd){var s=this,c=''+s_gi,a=c.indexOf(\"{\"),b=c.lastIndexOf(\"}\"),m;c=s_fe(a>0&&b>0?c.substring(a+1,b):0);if"
+"(wd&&wd.document&&c){wd.setTimeout('function s_sv(o,n,k){var v=o[k],i;if(v){if(typeof(v)==\"string\"||typeof(v)==\"number\")n[k]=v;else if (typeof(v)==\"array\"){n[k]=new Array;for(i=0;i<v.length;i"
+"++)s_sv(v,n[k],i)}else if (typeof(v)==\"object\"){n[k]=new Object;for(i in v)s_sv(v,n[k],i)}}}function s_si(t){var wd=window,s,i,j,c,a,b;wd.s_gi=new Function(\"un\",\"pg\",\"ss\",\"'+c+'\");wd.s=s_"
+"gi(\"'+s.oun+'\");s=wd.s;s.sa(\"'+s.un+'\");s.tfs=wd;s.pt(s.vl_g,\",\",\"vo1\",t);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3=\\'\\';if(t.m_l&&t.m_nl)for(i=0;i<"
+"t.m_nl.length;i++){n=t.m_nl[i];if(n){m=t[n];c=t[\"m_\"+n];if(m&&c){c=\"\"+c;if(c.indexOf(\"function\")>=0){a=c.indexOf(\"{\");b=c.lastIndexOf(\"}\");c=a>0&&b>0?c.substring(a+1,b):0;s[\"m_\"+n+\"_c"
+"\"]=c;if(m._e)s.loadModule(n);if(s[n])for(j=0;j<m._l.length;j++)s_sv(m,s[n],m._l[j])}}}}}var e,o,t;try{o=window.opener;if(o&&o.s_gi){t=o.s_gi(\"'+s.un+'\");if(t)s_si(t)}}catch(e){}',1)}};s.c_d='';s"
+".c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?par"
+"seInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ap"
+"e(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd("
+"),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie="
+"k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._"
+"in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x"
+".b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r"
+"');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfso"
+"e=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this"
+",p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet("
+"'gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s"
+"=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBu"
+"fferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorN"
+"amespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){i"
+"f(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.20.3/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if"
+"(s.isie&&!s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if"
+"(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]"
+"=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+u"
+"n+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;wh"
+"ile(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';re"
+"turn s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=t"
+"his,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://"
+"')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i"
+"=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.link"
+"TrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s"
+".va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='"
+"';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)"
+"}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if("
+"!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPe"
+"riods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='"
+"campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browse"
+"rWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')"
+"q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.to"
+"LowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'"
+"';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLower"
+"Case();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))re"
+"turn 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['"
+"+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t"
+"()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o"
+".protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i"
+"<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if(t=='INPUT'&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if("
+"!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript"
+"')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if(o.src&&t=='IMAGE')n=o.src"
+";if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s.epa(t.substring(e+1))"
+":''};s.rq=function(un){var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.ep"
+"a(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sq"
+"q=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?'"
+",':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s"
+"_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s"
+"_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s"
+".bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_"
+"'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t"
+"&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0}"
+";s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l."
+"toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.ou"
+"n+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i"
+")s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_"
+"t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.t"
+"oUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d"
+"(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl"
+"=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).in"
+"dexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+"
+"1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){"
+"var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElem"
+"ent){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o."
+"i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e"
+"',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f"
+"2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)"
+"g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a"
+"[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;"
+"s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,','"
+",'vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floo"
+"r(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMin"
+"utes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta='',q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',"
+"c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>"
+"=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}"
+"}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugin"
+"s}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function"
+"('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default"
+"#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.c"
+"olorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt("
+"s.vl_g,',','vo1',vo)}if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}"
+"if((vo&&vo._t)||!s.m_m('d')){s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY')"
+"{o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".t"
+"l(\")>=0)return ''}ta=n?o.target:1;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+"
+"(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objec"
+"tID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if("
+"trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq(s.un)),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',v"
+"b);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests("
+")}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_"
+"gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName"
+"){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Op"
+"era '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFl"
+"oat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if"
+"(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrati"
+"onServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvide"
+"r,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,p"
+"ev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',track"
+"ingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccount"
+"Match,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_ref"
+"errer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}
