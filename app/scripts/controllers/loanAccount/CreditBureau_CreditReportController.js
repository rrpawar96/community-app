(function (module) {
    mifosX.controllers = _.extend(module, {
        CreditBureau_CreditReportController: function ($scope, http,API_VERSION,$rootScope,resourceFactory,dateFilter, $routeParams, location) {

            $scope.formData = {};
            $scope.creditbureaus=[];

            $scope.cancel={};
            $scope.localcountry={};
            $scope.nrc = null;
            $scope.Names;


            resourceFactory.creditBureauTemplate.get(function (data) {
                $scope.creditbureaus=data;
                $scope.creditbureauname=$scope.creditbureaus.creditBureauName;

            });

            $scope.submit = function() {
                // redirect logic
                resourceFactory.thitsaworkCreditCheck.get({searchId: $scope.nrc},function (data) {
                    $scope.creditchecks=data;
                    $scope.NRC =data.borrowerInfo.NRC;
                    $scope.Name =data.borrowerInfo.Name;
                    $scope.Dob = data.borrowerInfo.DOB;
                    $scope.Gender = data.borrowerInfo.Gender;
                    $scope.Address = data.borrowerInfo.Address;
                    $scope.FatherName = data.borrowerInfo.FatherName;
                    $scope.Score = data.CreditScore.Score;

                    $scope.ActiveLoans = data.ActiveLoans;
                    $scope.PaidLoans = data.PaidLoans;

                });

                //will be use in later stage to fetch loanid and assign to back button
                scope.routeToLoan = function (id) {
                    scope.id='000000007';
                    resourceFactory.clientAccountResource.get({clientId:routeParams.id }, function (data) {
                        scope.clientAccounts = data;
                        scope.loanaccounts = scope.clientAccounts.loanAccounts;
                    });


                    location.path('/viewloanaccount/' + id);
                };


            }

        }
    });
    mifosX.ng.application.controller('CreditBureau_CreditReportController', ['$scope','$http','API_VERSION','$rootScope', 'ResourceFactory', 'dateFilter','$routeParams', '$location', mifosX.controllers.CreditBureau_CreditReportController]).run(function ($log) {
        $log.info("CreditBureau_CreditReportController initialized");
    });
}(mifosX.controllers || {}));
