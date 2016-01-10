(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/add-project.tpl.html",
    "<div class=\"add-task-modal-wrapper ltr\">\n" +
    "\n" +
    "    <h2 class=\"title\">New project</h2>\n" +
    "\n" +
    "    <form name=\"projectForm\">\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <input type=\"text\" name=\"name\" value=\"\" ng-model=\"name\" class=\"input\" placeholder=\"Name\">\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <textarea name=\"description\" value=\"\" ng-model=\"description\" class=\"input\" placeholder=\"Description\"></textarea>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"input-wrapper\" style=\"display: none\">\n" +
    "            <label>Is done? : </label>\n" +
    "            <label>Yes</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"1\" />\n" +
    "            <label>No</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"0\" />\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<br/>-->\n" +
    "        <button value=\"\" class=\"button secondary tiny\" ng-click=\"\">cancel</button>\n" +
    "        <button value=\"\" class=\"tiny save\" ng-click=\"ProjectModalController.add(projectForm)\">save</button>\n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/gt-projects-manager.tpl.html",
    "<div class=\"main-container\">\n" +
    "\n" +
    "    <div ui-view=\"projects\" class=\"project-list\"></div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"tasks-manage\">\n" +
    "        <header class=\"title\">Tasks</header>\n" +
    "        <div ui-view=\"tasks\" class=\"tasks\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clear\"></div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/partials/projects.tpl.html",
    "<div class=\"\">\n" +
    "\n" +
    "    <header class=\"title\">Project manager</header>\n" +
    "\n" +
    "    <div ng-controller=\"cController as cCtrl\">\n" +
    "\n" +
    "        <input type=\"text\" class=\"filter\" placeholder=\"Search project ...\" ng-model=\"cCtrl.projectFilter.string\">\n" +
    "\n" +
    "        <ul>\n" +
    "\n" +
    "            <li ng-click=\"GtProjectManagerCtrl.addProject()\"><i class=\"glyphicon glyphicon-plus\"></i> Add project</li>\n" +
    "\n" +
    "            <li ng-repeat=\"project in GtProjectManagerCtrl.projects | filter:cCtrl.projectFilter.string\">\n" +
    "                <a ng-href=\"{{project.url}}\">{{project.name}}</a>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/partials/tasks.tpl.html",
    "<div ng-controller=\"TasksController as TasksCtrl\">\n" +
    "\n" +
    "    <h1>{{TasksCtrl.project.name}}</h1>\n" +
    "    <button ng-click=\"TasksCtrl.api.addTask(TasksCtrl.project)\"><i class=\"glyphicon glyphicon-plus\"></i> Add new task</button>\n" +
    "\n" +
    "    <div gt-tasks-manager tasks=\"TasksCtrl.project.tasks\" api=\"TasksCtrl.api\"></div>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/gt-tasks-manager/gt-tasks-manager.tpl.html",
    "<div\n" +
    "    ng-repeat=\"task in tasks track by $index\"\n" +
    "    gt-task\n" +
    "    task=\"task\"\n" +
    "    api=\"api\">\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/gt-tasks-manager/gt-task/add-task.tpl.html",
    "<div class=\"add-task-modal-wrapper ltr\">\n" +
    "\n" +
    "    <h2 class=\"title\">New task</h2>\n" +
    "\n" +
    "    <form name=\"taskForm\">\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <input type=\"text\" name=\"name\" value=\"\" ng-model=\"name\" class=\"input\" placeholder=\"Name\">\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <textarea name=\"description\" value=\"\" ng-model=\"description\" class=\"input\" placeholder=\"Description\"></textarea>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <!--<div class=\"input-wrapper\">-->\n" +
    "            <!--<label>Is done? : </label>-->\n" +
    "            <!--<label>Yes</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"1\" />-->\n" +
    "            <!--<label>No</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"0\" />-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <br/>\n" +
    "\n" +
    "        <button value=\"\" class=\"button secondary tiny\" ng-click=\"\">cancel</button>\n" +
    "        <button value=\"\" class=\"tiny save\" ng-click=\"TaskModalController.add(taskForm)\">save</button>\n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("ProjectsManager"); }
catch(err) { module = angular.module("ProjectsManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-projects-manager/gt-tasks-manager/gt-task/gt-task.tpl.html",
    "<div class=\"box none-border\">\n" +
    "\n" +
    "    <input type=\"checkbox\" ng-model=\"task.isComplete\" name=\"isComplete\" ng-click=\"GtTaskCtrl.update()\">\n" +
    "\n" +
    "    <div class=\"box task-wrapper\">\n" +
    "\n" +
    "        <button class=\"btn btn-primary glyphicon glyphicon-plus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.addTask(task)\"></button>\n" +
    "        <button class=\"btn btn-danger glyphicon glyphicon-minus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.removeTask(task)\"></button>\n" +
    "\n" +
    "        <!--<div class=\"bold title\">Name:</div>-->\n" +
    "        <span>{{task.name}}</span>\n" +
    "\n" +
    "        <!--<div>-->\n" +
    "            <!--<span class=\"bold\">Is done? </span>-->\n" +
    "            <!--<span class=\"glyphicon\" ng-class=\"{'glyphicon-ok':task.isComplete,'glyphicon-remove':!task.isComplete}\"></span>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<div>-->\n" +
    "            <!--<span class=\"bold\">ID</span>-->\n" +
    "            <!--<span>{{task.id}}</span>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!--<div>-->\n" +
    "            <!--<span class=\"bold title\">Description</span>-->\n" +
    "            <!--<div>-->\n" +
    "                <!--{{task.description}}-->\n" +
    "            <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clear\"></div>\n" +
    "\n" +
    "    <div class=\"box child none-border\"\n" +
    "         ng-repeat=\"task in task.tasks track by $index\"\n" +
    "         gt-task\n" +
    "         task=\"task\"\n" +
    "         api=\"api\">\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);
})();
