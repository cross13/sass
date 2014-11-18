'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', function ($scope, $q) {
    var params = {
    	checkboxItems: [
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
	    radioItems: [
	    	{
	    		name: '3-Prong 5\' Flat Dryer Cord - Gray',
	    		price: 29.99
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
	    option: '<span class="option-name" ng-bind-html="item.name"></span><span class="option-price">${{item.price}}</span>'
    };

    $scope.checkboxItems = params.checkboxItems;
    $scope.radioItems = params.radioItems;
    $scope.selectedRadioItem = $scope.radioItems[0];
    $scope.option = params.option;
    $scope.onToggle = function(item){
    	var def = $q.defer();

    	console.log(item);
    	def.resolve();

    	return def.promise;
    };
  });
