function organizationController(organizationResource) {
  this.list = organizationResource.getAll();

}

angular
  .module('app')
  .component('organization', {
    templateUrl: 'app/organization.html',
    controller: organizationController
  });

