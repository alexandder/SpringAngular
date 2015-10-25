

angular.module("generalElection", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/korwin", {
            templateUrl: "views/korwin.html",
            controller: "korwinController"
        });

        $routeProvider.when("/kukiz", {
            templateUrl: "views/kukiz.html",
            controller: "kukizController"
        });

        $routeProvider.when("/", {
            templateUrl: "views/vote.html",
            controller: "votingController"
        });

        $routeProvider.otherwise({
            templateUrl: "views/vote.html",
            controller: "votingController"
        });
    }]);