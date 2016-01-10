(function () {

    function TasksService()
    {
        var tasks = [],
            ProjectsService;

        /**
         *
         * @param id
         * @param name
         * @param description
         * @param isComplete
         * @param parent
         * @constructor
         */
        function Task(id,name,description,isComplete,parent)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
            this.isComplete = isComplete ? isComplete :false;
            this.parent = parent ? parent : null;
            this.tasks = [];
        }

        /**
         *
         * @param name
         * @param description
         * @param isComplete
         * @param parent
         * @param id
         * @returns {TasksService.Task}
         */
        function getNew(name,description,isComplete,parent,id){
            return new Task(id,name,description,isComplete,parent);
        }

        /**
         *
         * @param project
         * @param newTask
         * @returns newTask
         */
        function add(project,newTask){

            if(typeof project === 'undefined'){
                tasks.push(newTask);
            }else{
                project.tasks.push(newTask);
            }

            ProjectsService.updateStorage();

            return newTask;
        }

        /**
         *
         * @param task
         * @returns {boolean}
         */
        function remove(task){

            var removeFromCollection;

            if(task.parent == null){
                removeFromCollection = tasks;
            }else{
                removeFromCollection = task.parent.tasks;
            }

            var taskIndex = removeFromCollection.indexOf(task);
            if (taskIndex > -1) {
                removeFromCollection.splice(taskIndex, 1);
            }

            ProjectsService.updateStorage();

            return true;
        }

        function $get(_ProjectsService){

            ProjectsService = _ProjectsService;

            return {
                get:function(){
                    return tasks;
                },
                getNew:getNew,
                add:add,
                remove:remove
            };
        }

        this.$get = ['ProjectsService',$get];
    }

    angular.module('GtTasksManager').provider('TasksService',[TasksService]);

})();