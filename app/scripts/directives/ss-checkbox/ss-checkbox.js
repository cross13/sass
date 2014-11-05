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
            },
            controller: function($scope, $sce){
                console.log($scope.items);

                $scope.toTrusted = function(html) {
                    return $sce.trustAsHtml(html);
                };
            }
        }
    })
    .directive('sscheckboxoption', function(){
        return{
            restrict: 'E',
            replace: true,
            scope: {
                item: '=',
                template: '='
            },
            compile: function(tEl, tAttrs){
                return {
                    pre: function(scope, iEl, iAttrs, controller) {
                        iEl.replaceWith(scope.template);
                    },
                    post: function(scope, iEl, iAttrs, controller) {

                    }
                };
                var template = scope.template;

                tEl.replaceWith(template);
            }
        }
    });