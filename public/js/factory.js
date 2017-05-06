app.factory("contestfactory", function ($http, $q) {
    return {
        calcPointsQ1: function (ans, userAns) {
            ans = parseFloat(ans);
            userAns = parseFloat(userAns);
            let diff = Math.abs(ans - userAns);
            var points;
            if (diff > 25) {
                points = 0;
            }
            else if (diff > 20) {
                points = 2;
            }
            else if (diff > 15) {
                points = 4;
            }
            else if (diff > 10) {
                points = 6;
            }
            else if (diff > 5) {
                points = 8;
            }
            else if (diff >= 0) {
                points = 10;
            }
            else {
                points = 0;
            }
            return points;
        }
        , calcPointsQ2: function (ans, userAns) {
            ans = parseFloat(ans);
            userAns = parseFloat(userAns);
            let diff = Math.abs(ans - userAns);
            var points;
            if (diff > 0.05) {
                points = 0;
            }
            else if (diff > 0.04) {
                points = 2;
            }
            else if (diff > 0.03) {
                points = 4;
            }
            else if (diff > 0.02) {
                points = 6;
            }
            else if (diff > 0.01) {
                points = 8;
            }
            else if (diff >= 0) {
                points = 10;
            }
            else {
                points = 0;
            }
            return points;
        }
        , getMoneyData: function () {
            var defer = $q.defer();
            $http.get(url).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    };
});