app.controller("loginctrl", function ($scope, serverfactory) {
    $scope.login = function () {
        $scope.serverresult = "";
        console.log("login called");
        console.log("user : ", $scope.user);
        var promise = serverfactory.callServer(urls.login, $scope.user);
        promise.then(function (data) {
            $scope.serverresult = data.data;
            console.log($scope.serverresult);
        }, function (error) {
            $scope.error = error;
        });
    };
});
app.controller("registerctrl", function ($scope, serverfactory) {
    $scope.register = function () {
        $scope.serverresult = "";
        console.log("register called");
        console.log("user : ", $scope.newUser);
        var promise = serverfactory.callServer(urls.register, $scope.newUser);
        promise.then(function (data) {
            $scope.serverresult = data.data;
        }, function (error) {
            $scope.error = error;
        });
    };
    $scope.clear = function () {
        $scope.newUser = {};
    }
});