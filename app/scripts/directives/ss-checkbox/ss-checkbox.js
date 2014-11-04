'use strict';

angular.module('sassApp')
    .directive('sscheckbox', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/ss-checkbox/ss-checkbox.html',
            scope: {
                enabled: '=',
                items: '=',
                toggleSelected: '=toggleselected',
                loadingEvent: '=loadingevent',
                isSelected: '=isselected'
            },
            controller: function($scope){
                console.log($scope.items);
            }
        }
    });