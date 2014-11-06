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
            controller: function($scope, $attrs) {
                $scope.toggleSelected = function(item){
                    item.selected = !item.selected;
                    
                    if ($scope.onToggle) {
                        $scope.$broadcast($attrs.id + '-start');
                        var onToggle = $scope.onToggle(item);
                        if (typeof onToggle.then === 'function') {
                            onToggle
                                .then(function() {
                                    $scope.$broadcast($attrs.id + '-end');
                                });
                        }
                        else {
                            $scope.$broadcast($attrs.id+ '-end');
                        }
                    }
                };
                $scope.isSelected = function(item){
                    return item.selected;
                };
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