/// Ref : http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html ///

//Globale Module
var Module = (function () {

    var firstModule = {};

    function privateFunctionFirst() {
        console.log("function named privateFunctionFirst() is called.")
    }

    var privatePropertyFirst = "First Private Property";

    //public objetcs
    firstModule.moduleProperty = privatePropertyFirst;
    firstModule.moduleFunctionFirst = function () {
        privateFunctionFirst();
    }

    return firstModule;

}());