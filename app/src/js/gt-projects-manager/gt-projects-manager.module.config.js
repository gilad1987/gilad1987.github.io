(function () {

    function Config($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app',{
                url: '/',
                views: {
                    'projects': {
                        templateUrl: 'app/src/js/gt-projects-manager/partials/projects.tpl.html'
                    },
                    'tasks': {}
                }
            })

            .state('app.project', {
                url: 'project/:id',
                views: {
                    'tasks@': {
                        templateUrl: 'app/src/js/gt-projects-manager/partials/tasks.tpl.html'
                    }
                }

            });

    }

    angular.module('GtProjectsManager').config(['$stateProvider','$urlRouterProvider',Config]);

})();