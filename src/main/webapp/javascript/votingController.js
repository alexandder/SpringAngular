angular.module("generalElection")
    .controller("votingController", function ($scope, $http, $location) {

        $scope.parties = [];

        $http.get("/api/party/all")
            .success(function (data) {
                $scope.parties = data;
            })
            .error(function (data){
                console.log(data);
            });

        $scope.selectedParty = null;
        $scope.warningMessage = "";
        $scope.dangerMessage = "";

        $scope.vote = function () {
            if ($scope.selectedParty === "Prawo i Sprawiedliwość") {
                $scope.warningMessage = "Stać nas na więcej!";
                $scope.dangerMessage = "";
            }
            else if ($scope.selectedParty === "Kukiz'15" || $scope.selectedParty === "KORWiN") {
                $scope.warningMessage = "";
                $scope.dangerMessage = "";
                $http.get("/api/party/vote/" + $scope.selectedParty)
                    .success(function (data)  {
                        console.log(data);
                        $location.path(data);
                    })
                    .error(function (data) {
                        console.log(data);
                    });
            }
            else {
                $scope.warningMessage = "";
                if ($scope.selectedParty === "Razem") {
                    $scope.dangerMessage = "Alert!!! Komunizm detected!";
                }
                if ($scope.selectedParty === "PSL") {
                    $scope.dangerMessage = "Dosyć";
                }
                if ($scope.selectedParty === "Platforma Obywatelska") {
                    $scope.dangerMessage = "Dosyć";
                }
                if ($scope.selectedParty === ".Nowoczesna") {
                    $scope.dangerMessage = "Nie dajmy się nabrać!";
                }
                if ($scope.selectedParty === "Zlew") {
                    $scope.dangerMessage = "Brak słów";
                }
            }
        };

        $scope.isPISchoosen = function() {
            return $scope.warningMessage !== "";
        };

        $scope.isDisasterChoosen = function() {
            return $scope.dangerMessage !== "";
        };
    });
