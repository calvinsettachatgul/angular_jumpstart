//option1
// app.controller('CustomersController', function($scope){
//       $scope.sortBy = 'name'; // default values for sorting by
//       $scope.reverse = false; //default values for sorting

//       $scope.customers = [
//       {joined:'2000-01-02', name:'John', city:'San Francisco', orderTotal:5.23432},
//       {joined:'2000-02-02', name:'Larry', city:'Atlanta', orderTotal:7.23432},
//       {joined:'2000-12-02', name:'Miguel', city:'New York City', orderTotal:8.23432},
//       {joined:'2000-12-02', name:'Calvin', city:'San Francisco', orderTotal:8.23432},];
//       $scope.doSort = function(propName){
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//       };
// });

// option2

// (function(){

//   angular.module('customersApp')
//   .controller('CustomersController', function($scope){
//       $scope.sortBy = 'name'; // default values for sorting by
//       $scope.reverse = false; //default values for sorting

//       $scope.customers = [
//       {joined:'2000-01-02', name:'John', city:'San Francisco', orderTotal:5.23432},
//       {joined:'2000-02-02', name:'Larry', city:'Atlanta', orderTotal:7.23432},
//       {joined:'2000-12-02', name:'Miguel', city:'New York City', orderTotal:8.23432},
//       {joined:'2000-12-02', name:'Calvin', city:'San Francisco', orderTotal:8.23432},];
//       $scope.doSort = function(propName){
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//       };
//   });

// }())

// option3


(function(){

  var CustomersController = function($scope){
    $scope.sortBy = 'name'; // default values for sorting by
      $scope.reverse = false; //default values for sorting

      $scope.customers = [
      {joined:'2000-01-02', name:'John', city:'San Francisco', orderTotal:5.23432},
      {joined:'2000-02-02', name:'Larry', city:'Atlanta', orderTotal:7.23432},
      {joined:'2000-12-02', name:'Miguel', city:'New York City', orderTotal:8.23432},
      {joined:'2000-12-02', name:'Calvin', city:'San Francisco', orderTotal:8.23432},];
      $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };
  };

  CustomersController.$inject = ['$scope'];

  angular.module('customersApp')
  .controller('CustomersController', CustomersController);

}())


// avoiding problems with script minification

