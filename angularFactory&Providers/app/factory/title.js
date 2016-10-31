/*** pageService ***/
storage.factory('factorytypes', function($rootScope){
    
	console.log("In factory factory types")
	return "this is factory type";
});

storage.factory('factorytype1', function($rootScope){
    
	console.log("In factory factorytype1")
	return {
		
		getvalue:function(){
			return "this is factory type1"
		}
	}
});

storage.factory('factorytype2', function($rootScope){
    
	console.log("In factory factorytype2");
	var myfactory={};
	
		
		myfactory.getdata=function(){
			return "this is factory type2"
		
		}
		return myfactory;
	
});

storage.factory('factorytype3', function(){
    
	console.log("In factory factorytype3");
	
	var myObj=function(){
		this.mydata=function(){
			return "this is factory type3"
		
		}
		
	}
	
	
		return new myObj;
	
});


storage.factory('factorytype4', function(){
    
	console.log("In factory factorytype4");
	
		return new function(){
		this.mydata=function(){
			return "this is factory type4"
		
		}
		
	};
	
});