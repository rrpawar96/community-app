(function (module) {
    mifosX.controllers = _.extend(module, {

        CreditReportDownloadThitsaWorksController: function (scope, rootScope, http, API_VERSION, resourceFactory, dateFilter, routeParams) {

            scope.formData = {};
            scope.clientId = routeParams.clientId;
            scope.displayName = '';
            scope.clientLastName = '';
            scope.creditBureauId = routeParams.cbId;
            scope.creditReportDetails = [];

            resourceFactory.getSavedCreditReportsDetails.get({creditBureauId: scope.creditBureauId}, function (data) {
                scope.creditReportDetails = data;
                var creditReport = JSON.stringify(scope.creditReportDetails);
               scope.ReportDetails = creditReport;
            });

            resourceFactory.clientResource.getAllClients({clientId : scope.clientId}, function (data) {
                scope.displayName = data.displayName;
                // scope.clientLastName = data.lastname;

            });
            scope.creditReportUrl =  API_VERSION + '/creditBureauIntegration/downloadCreditReport' +'?creditBureauId='+scope.creditBureauId +'&creditReportNumber=';
            scope.tenantIdentifier = '&tenantIdentifier=' + rootScope.tenantIdentifier;

        }
    });
    mifosX.ng.application.controller('CreditReportDownloadThitsaWorksController', ['$scope', '$rootScope','$http','API_VERSION', 'ResourceFactory', 'dateFilter','$routeParams', mifosX.controllers.CreditReportDownloadThitsaWorksController]).run(function ($log) {
        $log.info("CreditReportDownloadThitsaWorksController initialized");
    });
}(mifosX.controllers || {}));
