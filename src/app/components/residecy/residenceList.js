function resideceListController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('residenceList', {
    templateUrl: 'app/components/residecy/residenceList.html',
    controller: resideceListController
  });
