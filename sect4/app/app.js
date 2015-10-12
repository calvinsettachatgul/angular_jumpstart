
// option 1
// var app = angular.module('customersApp', [ ]);

// option2
(function(){

  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    //Routes go here

    //givea path, controller, view

    $routeProvider
      .when('/',
        {
            controller: 'CustomersController',
            templateUrl: 'app/views/customers.html'
        })

      .when('/orders/:customerId',
        {
          controller: 'OrdersController',
          templateUrl: '/app/views/orders.html'
        })

      // .when('editCustomer/:customerId',
      //   {
      //     controller: 'CustomerEditController',
      //     templateUrl: '/app/views/customerEdit.html'
      //   })

      .otherwise({ redirectTo: '/'});
  });

}());
