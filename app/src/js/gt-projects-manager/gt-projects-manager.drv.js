
(function (angular) {

    function GtProjectsManagerDirective(modal,ProjectsService)
    {

        /**
         *
         * @param $scope
         * @param $modalInstance
         * @param addFn
         * @constructor
         */
        function ProjectModalController($scope, $modalInstance, addFn){

            this.add = function(form){

                var project = {};

                project.name = form.name.$modelValue;
                project.description = form.description.$modelValue;
                project.isComplete = form.done.$modelValue;

                addFn(project);
            }


        }

        function GtProjectManagerController($scope, $element){

            this.projects = $scope.projects;

            this.addProject = function(){
                openModelToAddProject();
            };

            /**
             *
             * @param task
             * @param callbacks
             */
            this.removeProject = function(project, callbacks){
                ProjectsService.remove(project,callbacks);
            };


            /**
             *
             */
            function openModelToAddProject(){

                modal.open({
                    templateUrl: 'app/src/js/gt-projects-manager/add-project.tpl.html',
                    controller: ['$scope','$modalInstance','addFn',ProjectModalController],
                    controllerAs: 'ProjectModalController',
                    resolve: {
                        addFn:function(){
                            return add;
                        }
                    }
                });


            }

            /**
             *
             * @param project
             */
            function add(project){
                var newProject;

                newProject = ProjectsService.getNew(project);
                ProjectsService.add(newProject);

            }


            if(typeof $scope.api == 'undefined'){
                $scope.api = {};
            }

            $scope.api.addProject = this.addProject;
            $scope.api.removeProject = this.removeProject;
        }



        return  {
            templateUrl: 'app/src/js/gt-projects-manager/gt-projects-manager.tpl.html',
            scope: {
                projects: '=projects',
                api: '=api'
            },
            controller: ['$scope','$element',GtProjectManagerController],
            controllerAs: 'GtProjectManagerCtrl',
            link:function(scope,element,attrs){}
        };
    }

    angular.module('GtProjectsManager').directive('gtProjectsManager',['$modal','ProjectsService',GtProjectsManagerDirective]);

})(angular);