storage.provider('first', function(){

		return{
				$get:function(){
				return "This is firstprovider";
					}
				}
	})


storage.provider('second',function(){
	
	
	return{
			$get:function(){
				return {
						mdata:"This is secondprovider"
					}
							}
			}
	
});


storage.provider('third',function(){
	 var a;
	
	return{
		myfunc:function(name){
			a=name
		},
		$get:function(){
				return {
						newdata:a
						}
					}
			}
	
});
storage.config(function(thirdProvider){
	
	thirdProvider.myfunc("This is thirdprovider")
	
})


storage.provider('fourth',function(){
	
	this.$get=function(){
		
			var myfactory={};
	
		
			myfactory.getdata=function(){
			return "this Provider is similar to factory type2"
		
		}
		return myfactory;
	}
})