'use strict';

angular.module('sassApp')
    .directive('sscheckbox', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/ss-checkbox/ss-checkbox.html',
            scope: {
                items: '=',
                onToggle: '=ontoggle',
                option: '='
            },
            controller: function($scope) {
                $scope.toggleSelected = function(item){
                    item.selected = !item.selected;
                    $scope.onToggle && $scope.onToggle(item);
                };
                $scope.isSelected = function(item){
                    return item.selected;
                }
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
            template: '<span class="option-element">{{item.name}}</span>',//default option template
            link: function(scope, tEl, tAttrs){
                if (scope.template){
                    var el = $compile(scope.template)(scope);
                    tEl.replaceWith(el);
                }
            }
        }
    });