  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("InstagramFactory", [
    "$resource",
    InstagramFactoryFunction
  ])
  .controller("InstagramIndexController", [
    InstagramIndexControllerFunction
  ]);

  function InstagramFactoryFunction($resource) {
    return $resource()
  }

  function InstagramIndexControllerFunction(InstagramFactory)
    this.instagrams = InstagramFactory.query()

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("instagramIndex", {
      url: "/instagrams",
      templateUrl: "js/instagrams/index.html",
      controller: "InstagramIndexController",
      controllerAs: "vm"
    })
  }
})
