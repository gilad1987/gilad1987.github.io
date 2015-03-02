(function () {


    function TasksController(TasksService)
    {
        this.api = {};
        this.tasks = TasksService.get();
    }

    angular.module('TasksManager').controller('TasksController',['TasksService',TasksController]);

})();