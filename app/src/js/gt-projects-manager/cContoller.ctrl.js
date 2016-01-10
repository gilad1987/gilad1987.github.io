(function () {


    function CController(ProjectsService)
    {
        this.projectFilter = {};
    }

    angular.module('ProjectsManager').controller('cController',[CController]);

})();