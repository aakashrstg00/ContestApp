app.controller("contestctrl", function ($scope, contestfactory) {
    $scope.showAnswers = false;
    $scope.submitClicked = false;
    $scope.q1 = " What is the current price of Gold? ";
    $scope.q2 = " What is the price of 1 USD in INR? ";
    $scope.a1 = "26800";
    $scope.points = 100;
    $scope.submitAnswers = function () {
        $scope.submitClicked = true;
        if ($scope.userA1 && $scope.userA2) {
            $scope.showAnswers = true;
            $scope.pointsA1 = contestfactory.calcPointsQ1($scope.a1, $scope.userA1);
            $scope.pointsA2 = contestfactory.calcPointsQ2($scope.a2, $scope.userA2);
            $scope.points += $scope.pointsA1 + $scope.pointsA2;
            // update $scope.points in db via server
        }
    }
    $scope.numDays = 15;
    $scope.attDats = 11;
    $scope.getMoneyData = function () {
        var promise = contestfactory.getMoneyData();
        promise.then(function (data) {
            $scope.a2 = data.data.quotes.USDINR;
            console.log($scope.a2);
        }, function (error) {
            $scope.error = error;
        });
    }
    $scope.getMoneyData();
});