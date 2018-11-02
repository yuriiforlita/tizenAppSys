window.onload = function(){
		    (function(){
		    	var version = navigator.appCodeName;
		    	var inf = tizen.systeminfo.getCapability("http://tizen.org/feature/platform.version"); 
		    	var userAgent = navigator.userAgent;
		    	var fir = document.getElementById('first')
		    	var sec = document.getElementById('second')
		    	var thir = document.getElementById('third')
		    	var four = document.getElementById('fourth')
		    	var fifth = document.getElementById('fifth')

	    	 		var state ={
	    			    arr:[]
	    			  }

						   function onSuccessCallbackBuild(info) {
		 				   state.arr.push(info.model,info.manufacturer);
		 				  thir.innerHTML=state.arr[3];
		    			    four.innerHTML=state.arr[4];
		 			    	}
 			    
						function onErrorCallback(error){
				  		alert("Not supported: " + error.message);
						 }
	    			    
	    			    state.arr.push(inf,navigator.sayswho);


	    			    
	    			    tizen.systeminfo.getPropertyValue("BUILD", onSuccessCallbackBuild, onErrorCallback);
	    			    
	    			   
	    			    

	    			    		    
	    			    navigator.sayswho= (function(){
	    			        var ua= navigator.userAgent, tem, 
	    			        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    			        if(/trident/i.test(M[1])){
	    			            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	    			            return 'IE '+(tem[1] || '');
	    			        }
	    			        if(M[1]=== 'Chrome'){
	    			            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
	    			            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	    			        }
	    			        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	    			        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	    			        return M.join(' ');
	    			        
	    			    })();
	    			    state.arr.push(navigator.sayswho);
	    			    console.log(state.arr)
	    			    fir.innerHTML=state.arr[0];
	    			    sec.innerHTML=state.arr[2];
	    }())
}




