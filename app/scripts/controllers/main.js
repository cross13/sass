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
    	enabled: true,
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
	    toggleSelected: function(item){
	    	item.selected = !item.selected;
	    },
	    loadingEvent: 'set-available-option',
	    isSelected: function(item){
	    	return item.selected;
	    },
	    option: '<span class="option-name">{{item.name}}</span><span class="option-price">${{item.price}}</span>'
    };

    $scope.enabled = params.enabled;

    $scope.items = params.items;

    $scope.toggleSelected = function(item) {
    	if ($scope.enabled) {
	    	params.toggleSelected(item);
	    }
    };

    $scope.loadingEvent = params.loadingEvent;

    $scope.isSelected = params.isSelected;

    $scope.option = params.option;
  });
