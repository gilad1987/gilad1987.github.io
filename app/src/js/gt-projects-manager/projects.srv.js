(function () {

    function ProjectsService()
    {
        var projects = [];

        /**
         *
         * @param project
         * @constructor
         */
        function Project(project)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
            this.isComplete = isComplete ? isComplete :false;
            this.parent = parent ? parent : null;
            this.tasks = [];

            var key;

            for(key in this){
                if(typeof project[key] != 'undefined'){
                    this[key] = project[key];
                }
            }
        }

        /**
         *
         * @param name
         * @param description
         * @param isComplete
         * @param parent
         * @param id
         * @returns {ProjectsService.Project}
         */
        function getNew(project){

            return new Project(project);
        }

        /**
         *
         * @param project
         * @returns newTask
         */
        function add(project){
            projects.push(project);
            return project;
        }

        /**
         *
         * @param project
         * @param callbacks
         * @returns {boolean}
         */
        function remove(project,callbacks){

            var projectIndex = projects.indexOf(project);

            if (projectIndex > -1) {
                projects.splice(projectIndex, 1);
            }

            return true;
        }

        this.$get = function(){
            return {
                get:function(){
                    return projects;
                },
                getNew:getNew,
                add:add,
                remove:remove
            };
        }
    }

    angular.module('GtProjectsManager').provider('ProjectsService',[ProjectsService]);

})();