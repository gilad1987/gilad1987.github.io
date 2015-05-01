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
            this.url = '#/project/'+(parseInt(projects.length)+1);
            this.id = null;
            this.name = null;
            this.description = null;
            this.isComplete = false;
            this.parent = null;
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
         * @param project
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

        function get(project_key){
            var result;

            result = projects;

            if(typeof project_key != 'undefined'){
                --project_key;
                result = projects[project_key];
            }

            return result;
        }

        this.$get = function(){
            return {
                get:get,
                getNew:getNew,
                add:add,
                remove:remove
            };
        }
    }

    angular.module('GtProjectsManager').provider('ProjectsService',[ProjectsService]);

})();