$(function() {
     var images = ['sectionhdr_bg_general_sap1.png', 'sectionhdr_bg_general_sap2.png', 'sectionhdr_bg_general_sap3.png', 'sectionhdr_bg_general_sap4.png', 'sectionhdr_bg_general_sap5.png',
	'sectionhdr_bg_general_sap6.png','sectionhdr_bg_general_sap7.png','sectionhdr_bg_general_sap8.png','sectionhdr_bg_general_sap9.png','sectionhdr_bg_general_sap10.png',
	'sectionhdr_bg_general_sap10.png',];
	
	var $sitesection=$('#site-section');
	if($sitesection){

        if(IS_MOBILE){
    		$sitesection.css({'background': 'url(/media/header/1x/' + images[Math.floor(Math.random() * images.length)] + ')',
    						'background-repeat': 'no-repeat',
    						'background-position':'top right',
                            'background-size':'320px 50px'

    						});
        }else{
           $sitesection.css({'background': 'url(/media/header/' + images[Math.floor(Math.random() * images.length)] + ')',
    						'background-repeat': 'no-repeat',
    						'background-position':'top right'
    						});
        }
	}
});

//Hornets to Pelican Conversion
var hornetsToPelicans = function(items,chnageFrom,chnageTo,props){
	var identifier,identifierVal;
	//Process multiple items
	if(items.length > 0){
		//Change multiple properties
		if(props.length>1){
			identifier = props[0];
			identifierVal = chnageFrom[0];
			for(var count=0;count<items.length;count++){
				if(items[count][identifier] == identifierVal){
					for(var proCount = 0;proCount<props.length;proCount++){
						items[count][props[proCount]] = chnageTo[proCount];
					}
				}
			}
		}
		//Change one propertie
		else{
			identifier = props[0];
			identifierVal = chnageFrom;
			for(var count=0;count<items.length;count++){
				if(items[count][identifier] == identifierVal){
						items[count][identifier] = chnageTo;
				}
			}
		}
	}
	//Process one item
	else{
		//Change multiple properties
		if(props.length>1){
			identifier = props[0];
			identifierVal = chnageFrom[0];
			if(items[identifier] == identifierVal){
				for(var proCount = 0;proCount<props.length;proCount++){
					items[count][props[proCount]] = chnageTo[proCount];
				}
			}
		}
		//Change one propertie
		else{
			identifier = props[0];
			identifierVal = chnageFrom;
			if(items[identifier] == identifierVal){
				items[identifier] = chnageTo;
			}
		}
	}
};

