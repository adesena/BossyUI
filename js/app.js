var myApp = angular.module( 'bossyui', [
	'ngRoute',
	'ui.router',
	'bossy',
	'bossyui.controllers',
	'bossyui.directives'
	// 'bossyui.services'
	])


// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// route to show our basic form (/form)
	.state('home', {
		url: '/',
		templateUrl: '/BossyUI/pages/home.html',
		controller: 'homeCtrl',
		data: {
			slug: 'home'
		}
	})

	.state('getting_started', {
		url: '/getting_started',
		templateUrl: '/BossyUI/pages/getting_started.html',
		controller: 'homeCtrl',
		data: {
			slug: 'getting-started'
		}
	})

	.state('components',{
		url: '/components/:component',
		controller: 'homeCtrl',
		templateUrl: function ($stateParams){
			if($stateParams.component) {
				return '/BossyUI/pages/components/' + $stateParams.component + '.html';
			} else {
				return '/BossyUI/pages/components.html'
			}
  	},
  	data: {
  		slug: "component"
  	}
	})

	.state('about', {
		url: '/about',
		templateUrl: '/BossyUI/pages/about.html',
		controller: 'homeCtrl',
		data: {
			slug: 'about'
		}
	})

	.state('contribute', {
		url: '/contribute',
		templateUrl: '/BossyUI/pages/contribute.html',
		controller: 'homeCtrl',
		data: {
			slug: 'about'
		}
	})

	.state('blog',{
		url: '/blog/:post',
		controller: 'homeCtrl',
		templateUrl: function ($stateParams){
			if($stateParams.post) {
				return $stateParams.post;
			} else {
				return '/BossyUI/pages/blog.html'
			}
  	},
  	data: {
  		slug: "component"
  	}
	})
	$urlRouterProvider.otherwise('/');
})

.run(function($rootScope, $templateCache, $http) {
	$http.get('img/logo_horizontal.svg')
		.success(function(data){
			$templateCache.put('logo', data);
		})
	});