'use strict';

angular.module('dashboard')
  .directive('sideBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/components/dashboard/sidebar/views/side-bar.html',
      controller: 'SidebarController',
      controllerAs: 'sidebarCtrl'
    };
  });