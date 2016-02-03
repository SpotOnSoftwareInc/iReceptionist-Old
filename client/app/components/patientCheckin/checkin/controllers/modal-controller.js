angular.module('checkin').controller('ModalDemoCtrl', ['$scope', '$modal', '$log', 'CheckinService',  function ($scope, $modal, $log, CheckinService) {

  $scope.items = ['item1', 'item2', 'item3'];
  
  //opens the modal that allows the admin to sign back in, displays the html specificed by the template
  $scope.open = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    CheckinService.setModal(modalInstance); // send the modal to the service so the checkin controller can access it

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);

