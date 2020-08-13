(function (module) {
    mifosX.controllers = _.extend(module, {
        CreditBureauConfigurationController: function ($scope, resourceFactory, $routeParams, location) {

            $scope.formdata = {};


            resourceFactory.creditBureauTemplate.get(function (data) {
                $scope.creditbureaus = data;
                $scope.creditbureauname = $scope.creditbureaus.creditBureauName;

           });

           // resourceFactory.getCreditBureauConfiguration.getconfig({CreditBureauId:1},function (data) {
             //   $scope.creditBureauConfiguration = data;

            //});



         /*   resourceFactory.getCreditBureauConfiguration.get({CreditBureauId: $scope.creditbureaus.creditBureauId},function (data) {
                $scope.creditbureaus = data;

            });
             $scope.select = function () {

            };
              $scope.creditId = 1;

*/




            $scope.submit = function () {
                location.path('/externalservicesCB/CreditBureau/editconfiguration/'+$scope.creditBureauId);
            };
            $scope.cancel = function () {
                location.path('/externalservicesCB/CreditBureau');
            };

        }
    });
    mifosX.ng.application.controller('CreditBureauConfigurationController', ['$scope', 'ResourceFactory', '$routeParams', '$location','$route', mifosX.controllers.CreditBureauConfigurationController]).run(function ($log) {
        $log.info("CreditBureauConfigurationController initialized");
    });
}(mifosX.controllers || {}));
