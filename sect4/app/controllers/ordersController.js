(function(){

  var OrdersController = function($scope, $routeParams){

    var customerId = $routeParams.customerId;

    $scope.orders = null;

    function init(){
      //search the customers for the customerId

      for (var i=0, len= $scope.customers.length; i< len; i++){
        if($scope.customers[i].id === parseInt(customerId)){
            $scope.orders = $scope.customers[i].orders;
            break;
        }
      }
    }


      $scope.customers =[
       { id: 0,
          joined:'2000-01-02',
          name:'John',
          city:'San Francisco',
           orderTotal:5.23432,
          orders:[{
                    id:1,
                    product: 'Shoes',
                    total: 3.534534,
                  },
          ],
        },
        { id: 1,
          joined:'2000-02-02',
         name:'Larry',
         city:'Atlanta',
         orderTotal:7.23432,
         orders:[{
                    id:1,
                    product: 'hat',
                    total: 3.534534,
                  },
                ],
        },
        { id: 2,
          joined:'2000-12-02',
          name:'Miguel',
          city:'New York City',
          orderTotal:8.23432,
          orders:[{
                    id:1,
                    product: 'Shoes',
                    total: 3.534534,
                  },
          ],
        },
        { id: 3,
          joined:'2000-12-02',
          name:'Calvin',
          city:'San Francisco',
          orderTotal:8.23432,
          orders:[{
                    id:1,
                    product: 'gloves',
                    total: 3.534534,
                  },
          ],
        },
      ];

      init();


  };

  OrdersController.$inject = ['$scope', '$routeParams'];

  angular.module('customersApp')
  .controller('OrdersController', OrdersController);
  // .controller('CustomersEditController', function($scope, $routeParams){

    // $scope.customerId = $routeParams.customerId;
  // });

}())