(function () {

    function ProjectsService()
    {
        var projects = [],
            $cookies,
            localStorageService;

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
            updateStorage();
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

            updateStorage();

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

        function updateStorage(){
            localStorageService.set('projects',projects);
        }

        function $get(_localStorageService){

            localStorageService = _localStorageService;

            projects = localStorageService.get('projects') || [];

            return {
                get:get,
                getNew:getNew,
                add:add,
                remove:remove,
                updateStorage:updateStorage
            };
        }

        this.$get = ['localStorageService','$cookies',$get];
    }

    angular.module('GtProjectsManager').provider('ProjectsService',[ProjectsService]);

})();