(function () {


    function ProjectsController(ProjectsService)
    {
        this.api = {};
        this.projects = ProjectsService.get();
    }

    angular.module('ProjectsManager').controller('ProjectsController',['ProjectsService',ProjectsController]);

})();