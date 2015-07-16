//option1
app.controller('CustomersController', function($scope){
      $scope.sortBy = 'name';
      $scope.reverse = false;

      $scope.customers = [
      {joined:'2000-01-02', name:'John', city:'San Francisco', orderTotal:5.23432},
      {joined:'2000-02-02', name:'Larry', city:'Atlanta', orderTotal:7.23432},
      {joined:'2000-12-02', name:'Miguel', city:'New York City', orderTotal:8.23432},
      {joined:'2000-12-02', name:'Calvin', city:'San Francisco', orderTotal:8.23432},];
      $scope.doSort = function(propName){

        $scope.sortBy= propName;
        $scope.reverse = !$scope.reverse;
      };
})

