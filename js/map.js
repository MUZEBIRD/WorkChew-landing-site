			var map;
				var markers = [];

    function initMap() {
        
						
            var mapOptions = {
                zoom: 14,
                center: new google.maps.LatLng(38.931684, -77.028009),
                gestureHandling: 'cooperative'
            };
            map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);
    
    
            var locations = [
                ['<div class="infodiv">  <a href="https://www.redrockscolheights.com" target="_blank"><img class="infoimg" src="images/redrockscolumbia/redrocksc.jpeg">  <div style="margin-left:30px; padding-left:60px;"><p style="text-align:center;font-size:14px;font-weight:500;">Red Rocks Columbia Heights <br> <span style="font-weight:300;font-size:12px;"> 1036 Park Rd, NW Washington, DC 20010</span></p> </div></a> </div>', 38.931684, -77.028009, 'orangemarker.png'],
				['<div class="infodiv"> <a href="http://www.redrockshstreet.com" target="_blank"><img class="infoimg" src="images/redrocksh/redrocksh.jpg">  <div style="margin-left:30px; padding-left:60px;"><p style="text-align:center;font-size:14px;font-weight:500;">Red Rocks H St <br> <span style="font-weight:300;font-size:12px;"> 1348 H Street, Northeast Washington, DC 20002</span></p>  </div></a>  </div>', 38.900444, -76.986669, 'orangemarker.png'],
				['<div class="infodiv"><a href="http://halfsmoke.com/" target="_blank"> <img class="infoimg" src="images/halfsmoke/halfsmoke.jpg">  <div style="margin-left:30px; padding-left:65px;"> <p style="text-align:center;font-size:14px;font-weight:500;">HalfSmoke<br> <span style="font-weight:300;font-size:12px;"> 651 Florida Avenue NW, Washington, DC 20001</span></p>  </div></a> </div>', 38.916339, -77.02167700000001, 'orangemarker.png'],
				['<div class="infodiv"> <a href="http://www.shawstavern.com/" target="_blank"><img class="infoimg" src="images/shaws/shaws4.jpg">  <div style="margin-left:30px; padding-left:65px;"><p style="text-align:center;font-size:14px;font-weight:500;">Shaw\'s Tavern<br> <span style="font-weight:300;font-size:12px;">520 Florida Ave NW, Washington, DC 20001</span></p> </div> </a> </div>', 38.915118, -77.01965100000001, 'orangemarker.png'],
				['<div class="infodiv">  <a href="http://redstableva.com" target="_blank"><img class="infoimg" src="images/reds/reds22.jpg"> <div style="margin-left:30px; padding-left:65px;"><p style="text-align:center;font-size:14px;font-weight:500;">Red\'s Table<br> <span style="font-weight:300;font-size:12px;">11150 South Lakes Dr, Reston, VA 20191</span></p> </div> </a> </div>', 38.938949, -77.33077700000001, 'orangemarker.png'],
				['<div class="infodiv">  <a href="http://www.osteriamorini.com/washington-dc/" target="_blank"><img class="infoimg" src="images/morini/morini2.jpg"> <div style="margin-left:30px; padding-left:65px;"><p style="text-align:center;font-size:14px;font-weight:500;">Osteria Morini<br> <span style="font-weight:300;font-size:12px;">301 Water St SE, Washington, DC 20003</span></p> </div> </a> </div>', 38.8734, -77.00149999999996, 'orangemarker.png'],
				['<div class="infodiv">  <a href="https://www.coladashop.com/" target="_blank"><img class="infoimg" src="images/colada/colada3.jpg"> <div style="margin-left:30px; padding-left:65px;"><p style="text-align:center;font-size:14px;font-weight:500;">Colada Shop<br> <span style="font-weight:300;font-size:12px;">21430 Epicerie Plaza, Sterling, VA 20164</span></p> </div> </a> </div>', 39.023512, -77.39477099999999, 'orangemarker.png']
			
		    ];
        
    
            var marker, i;
            var infowindow = new google.maps.InfoWindow();
    
    
            google.maps.event.addListener(map, 'click', function() {
                infowindow.close();
            });
    
    
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: locations[i][3]
                });
    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
        
                markers.push(marker);
            }
												
												for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: locations[i][3]
                });
    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
						var markerlat = marker.getPosition().lat();
						var markerlng = marker.getPosition().lng();
			
																			
                                        
					if (markerlat == locations[0][1] && markerlng == locations[0][2]) {
                        document.querySelector('#RedRocksColumbia').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol1();
 
					}
					
					if (markerlat == locations[1][1] && markerlng == locations[1][2]) {
						document.querySelector('#RedRocksHSt').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol2();
 
					}
					
					if (markerlat == locations[2][1] && markerlng == locations[2][2]) {
						document.querySelector('#HalfSmoke').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol3();
 
					}
					
					if (markerlat == locations[3][1] && markerlng == locations[3][2]) {
						document.querySelector('#Shaws').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol4();
 
					}
					
					if (markerlat == locations[4][1] && markerlng == locations[4][2]) {
						document.querySelector('#RedsTable').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol5();
 
					}
					
					if (markerlat == locations[5][1] && markerlng == locations[5][2]) {
						document.querySelector('#Morini').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol6();
 
					}
					
					if (markerlat == locations[6][1] && markerlng == locations[6][2]) {
						document.querySelector('#Colada').scrollIntoView({ 
								behavior: 'smooth' 
							});
						changeCol7();
 
					} 																				
                    };
                })(marker, i));
        
                markers.push(marker);
            }
												
        }
								 
									
						
			function pan1(){
			map.panTo(new google.maps.LatLng(38.931684, -77.028009));
			map.setZoom(16);
		}
		
		function pan2(){
			map.panTo(new google.maps.LatLng(38.900444, -76.986669));
			map.setZoom(14);
		}
		
		function pan3(){
			map.panTo(new google.maps.LatLng(38.916339, -77.021677));
			map.setZoom(16);
		}
		
		function pan4(){
			map.panTo(new google.maps.LatLng(38.915118,-77.019651));
			map.setZoom(15);
		}
		function pan5(){
			map.panTo(new google.maps.LatLng(38.938949,-77.330777));
			map.setZoom(17);
		}
		function pan6(){
			map.panTo(new google.maps.LatLng(38.873408,-77.001476));
			map.setZoom(15);
		}
		function pan7(){
			map.panTo(new google.maps.LatLng(39.023512,-77.394771));
			map.setZoom(15);
		}

function changeCol1(){
	alert("test");
    $("#RedRocksColumbia").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol2(){
    $("#RedRocksHSt").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol3(){
    $("#HalfSmoke").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol4(){
    $("#Shaws").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol5(){
    $("#RedsTable").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol6(){
    $("#Morini").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
function changeCol7(){
    $("#Colada").animate({
      backgroundColor: "#FFFBCC"
    }, 500).animate({
      backgroundColor: "#ffffff"
    }, 800);
}
        google.maps.event.addDomListener(window, 'load', initMap);
        
        function myClick(id){
            google.maps.event.trigger(markers[id], 'click');
        }