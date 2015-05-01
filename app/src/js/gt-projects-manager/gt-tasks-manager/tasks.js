(function () {


    function TasksController(ProjectsService,$stateParams,$state)
    {
        var project;

        this.projectId = $stateParams.id;

        this.project = ProjectsService.get(this.projectId);

        if(typeof this.project == 'undefined'){
            $state.go('app');
        }

        this.api={};
    }

    angular.module('ProjectsManager').controller('TasksController',['ProjectsService','$stateParams','$state',TasksController]);

})();