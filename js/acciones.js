//JavaScript Document

$(document).ready(function(e){
	document.addEventListener ("deviceready",onDeviceReady,false);
		
});

      function onDeviceReady (){
		  
		$('#posicion').on('click',function(){
			getPosition();
		});
	  }
	  
	  function getPosition(){
		  var options = {
			  enableHighAccuracy : true,
			  maximumAge: 3600000
		  }
		  
		  var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError,options);
		  
		  function onSuccess(position) {
			  
			  alert('Latitud:'   +position.coords.latitud   +'\n'+ 
			  'Longitud:'   +position.coords.longitud   +'\n');
		  };
		  
		  function onError(error){
			  alert('code:'   +error.code   +'\n'+'message'+ error.message + '\n');
		  }
	  }