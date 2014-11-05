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
                isSelected: '=isselected',
                option: '='
            }
        }
    })
    .directive('sscheckboxoption', function($compile){
        return{
            restrict: 'E',
            replace: true,
            scope: {
                item: '=',
                template: '='
            },
            link: function(scope, tEl, tAttrs){
                var el = $compile(scope.template)(scope);
                tEl.replaceWith(el);
            }
        }
    });