var BlueBerryApp = angular.module('BlueBerryApp', ['ngRoute'])
    .config(
        function($routeProvider){
        $routeProvider
            .when('/app/index.html',{
                templateUrl: 'index.html'
            })
            .otherwise({
                redirectTo:'/'
            })
        });/*
.directive('visitedProduct', function(){
        return{
            scope : {
                product : '='
            },
            restrict : 'AE',
            templateUrl : 'views/mostVisitedProduct.html',

        };
    })
    .directive('visited', function(){
        
        return {
            restrict : 'A',
            templateUrl : 'views/mostVisited.html',

            controller : function($scope, $http){
                $scope.visitedProduct = [];
                $http.get('/app/json/mostVisited.json')
                    .success(function(data){
                        console.log(data);
                        
                        $scope.visitedProduct = data;
                    })
            }
        };
        })
    .directive('pageHeader',function(){
        return {
            restrict : 'A',
            replace:true,
            templateUrl : 'views/header.html'
        };
    })
    .directive('pageFooter',function(){
        return {
            restrict : 'A',
            replace : true,
            templateUrl :'views/footer.html'
        };
    })
.directive('slideShow', function(){
    return {
        restrict : 'A',
        replace:true,
        templateUrl: 'views/slideShow.html'
    };
});

*/