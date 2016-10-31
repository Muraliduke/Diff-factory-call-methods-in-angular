storage.controller('home', function($scope,first,second,third,fourth,factorytypes,factorytype1,factorytype2,factorytype3,factorytype4){
	
	$scope.factory1=factorytypes;
	$scope.factory2=factorytype1.getvalue();
	$scope.factory3=factorytype2.getdata();
	$scope.factory4=factorytype3.mydata();
	$scope.factory5=factorytype4.mydata();
	
	$scope.val=first;
	$scope.prov=second.mdata;
	$scope.prov2=third.newdata;
	$scope.prov3=fourth.getdata();
})

