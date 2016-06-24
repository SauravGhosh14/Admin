var routerApp = angular.module('routerApp', ['ui.router']);
//routerApp.run(function($rootScope) {
  //  $rootScope.classabc = "active";
//});



routerApp.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('home', {
            url: '/home',
            templateUrl: 'partial/home.html',
			controller: function($scope,$rootScope) {
			//$rootScope.$emit.classnews = "active";	
			//$scope$emit.classnews = "active";
			$rootScope.classhome = "active";
			$rootScope.classnews = "";
			$rootScope.classfeed = "";
			$rootScope.classimage = "";
			$rootScope.classpush = "";
			$scope.message = "This is a message from HOME scope!!!!";
			}
        })

		$stateProvider
		.state('news', {
            url: '/news',
            templateUrl: 'partial/news.html',
			controller: function($scope,$rootScope) {
			$rootScope.classhome = "";	
			$rootScope.classnews = "active";
			$rootScope.classfeed = "";
			$rootScope.classimage = "";
			$rootScope.classpush = "";
			$scope.message = "This is a message from NEWS scope!!!!";
			}
        })		
		
		$stateProvider
		.state('feed', {
            url: '/feed',
            templateUrl: 'partial/feed.html',
			controller: function($scope) {
			$scope.message = "This is a message from FEED scope!!!!";
			}
        })

		$stateProvider
		.state('image', {
            url: '/image',
            templateUrl: 'partial/image.html',
			controller: function($scope) {
			$scope.message = "This is a message from IMAGE scope!!!!";
			}
        })		
		
		$stateProvider
		.state('push', {
            url: '/push',
            templateUrl: 'partial/push.html',
			controller: function($scope) {
			$scope.message = "This is a message from PUSH scope!!!!";
			}
        })		
		
		
		});
		