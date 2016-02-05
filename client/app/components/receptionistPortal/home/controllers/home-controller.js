/**
 * Created by sean on 2/5/2016.
 */
'use strict';

angular.module('home')
    .controller('HomeController', ['$scope',
        function ($scope) {
            //function that sets the background by using the getTheme method of the CheckinService
            //also, uses the CheckinService to get the forms that the business wants to display
            $scope.init = function() {
                CheckinService.getTheme($rootScope.admin_id)
                    .success(function (data) {
                        if (data == "null" || data.background_img == "default") {
                            $scope.background_image = "images/themes/city0.jpg";
                        }
                        else {
                            $scope.background_image = data.background_img;
                        }
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }

        }]);