app.factory("serverfactory", function ($http, $q) {
    return {
        callServer: function (url, obj) {
            var pr = $q.defer();
            $http.post(url, obj).then(function (data) {
                pr.resolve(data);
            }, function (error) {
                pr.reject(error);
            });
            return pr.promise;
        }
    };
});