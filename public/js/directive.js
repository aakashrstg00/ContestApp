app.directive("jumboTitle", function () {
    return {
        template: " <div class=\"jumbotron bg-info text-white\"> <h1 class=\"display-1 text-center\">Equifin Technologies</h1><p class=\"lead text-center\">A Gurugram based company</p> <hr style=\"width:10rem;border-top: 1px solid white;\"> </div>"
        , restrict: "E"
    };
});
app.directive("cHeader", function () {
    return {
        template: " <nav class=\"navbar navbar-toggleable-lg navbar-inverse bg-inverse\"><div class=\"container\"><ul class=\"nav navbar-nav\"><li class=\"nav-item\"><a href=\"index.html\" class=\"nav-link\"> Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a href=\"index.html#about\" class=\"nav-link\"> About </a></li><li class=\"nav-item\"><a href=\"index.html#rules\" class=\"nav-link\"> Rules </a></li><li class=\"nav-item\"><a href=\"register\" class=\"nav-link\"> Sign Up </a></li></ul> <a href=\"https://github.com/aakashrstg00\" class=\"navbar-brand ml-sm-auto mr-0\">Presented by <b>Aakash Rastogi</b></a> </div> </nav> "
        , restrict: "E"
    };
});
app.directive("cFooter", function () {
    return {
        template: "<div class=\"row my-3 container\"> <div class=\"col-sm-8\"></div> <div class=\"col-sm-4 text-md-right\"> <small>&copy; 2017 Equifin Tech &amp; Aakash Rastogi</small></div></div>"
        , restrict: "E"
    };
});