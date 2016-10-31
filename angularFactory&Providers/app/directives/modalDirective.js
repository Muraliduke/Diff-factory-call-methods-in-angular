
//making a whole directive reusable by injecting it in a main app

angular.module('modalDirective',[])
.directive('modal',function(){

	return{
		
		restrict:'EA',
		templateUrl:"app/partials/modal.html",
		transclude: true,
		replace: true,
		controller:'homePage',
		}
	
	})