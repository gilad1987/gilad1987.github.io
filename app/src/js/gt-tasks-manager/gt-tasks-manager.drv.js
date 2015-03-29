
(function (angular) {

    function GtTasksManagerDirective($timeout,modal,TasksService)
    {

        /**
         *
         * @param $scope
         * @param $modalInstance
         * @param parentTask
         * @param addToService
         * @constructor
         */
        function TaskModalController($scope, $modalInstance, parentTask, addToService){

            this.add = function(form){

                var formData = {};

                formData.name = form.name.$modelValue;
                formData.description = form.description.$modelValue;
                formData.isComplete = form.done.$modelValue;
                addToService(parentTask, formData);

            }


        }

        function GtTaskManagerController($scope, $element){

            this.addTask = function(parentTask){
                openModelToAddTask(parentTask);
            };

            /**
             *
             * @param task
             * @param callbacks
             */
            this.removeTask = function(task, callbacks){
                TasksService.remove(task);
            };

            /**
             *
             * @param parentTask
             */
            function openModelToAddTask(parentTask){

                modal.open({
                    templateUrl: 'app/src/js/gt-tasks-manager/gt-task/add-task.tpl.html',
                    controller: ['$scope','$modalInstance','parentTask','addToService',TaskModalController],
                    controllerAs: 'TaskModalController',
                    resolve: {
                        parentTask : function(){
                            return parentTask;
                        },
                        addToService:function(){
                            return add;
                        }

                    }
                });


            }

            /**
             *
             * @param parentTask
             * @param data
             * @param callbacks
             */
            function add(parentTask, data, callbacks){
                var newTask;

                newTask = TasksService.getNew(data.name,data.description,data.isComplete,parentTask);
                TasksService.add(parentTask,newTask,callbacks);

            }


            if(typeof $scope.api == 'undefined'){
                $scope.api = {};
            }

            $scope.api.addTask = this.addTask;
            $scope.api.removeTask = this.removeTask;
        }



        return  {
            templateUrl: 'app/src/js/gt-tasks-manager/gt-tasks-manager.tpl.html',
            scope: {
                tasks: '=tasks',
                api: '=api'
            },
            controller: ['$scope','$element',GtTaskManagerController],
            controllerAs: 'GtTaskManagerCtrl',
            link:function(scope,element,attrs){}
        };
    }

    angular.module('GtTasksManager').directive('gtTasksManager',['$timeout','$modal','TasksService',GtTasksManagerDirective]);

})(angular);