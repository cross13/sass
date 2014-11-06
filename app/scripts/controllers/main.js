'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', function ($scope) {
    var params = {
    	items: [
	    	{
	    		name: '3-Prong 5\' Flat Dryer Cord - Gray',
	    		price: 29.99,
	    		selected: true
	    	},
	    	{
	    		name: '4-Prong 5\' Round Dryer Cord - Black',
	    		price: 29.99
	    	},
	    	{
	    		name: '6 ft. Snap-Lock&amp;trade; Flexible Pipe',
	    		price: 14.99
	    	},
	    	{
	    		name: 'Dryer Exhaust Close Elbow',
	    		price: 9.99
	    	}
	    ],
	    option: '<span class="option-name">{{item.name}}</span><span class="option-price">${{item.price}}</span>',
	    onToggle: function(item){
	    	console.log(item);
	    }
    };

    $scope.items = params.items;
    $scope.option = params.option;
    $scope.onToggle = params.onToggle;
  });
