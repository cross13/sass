'use strict';

angular.module('sassApp')
    .directive('ssradio', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/ss-radio/ss-radio.html',
            scope: {
                items: '=',
                onChange: '=onchange',
                option: '='
            },
            controller: function($q, $scope, $attrs) {
                var clear = function(item) {
                    angular.forEach($scope.items, function(key) {
                        if (key !== item) {
                            key.selected = null;
                        }
                    });
                };

                $scope.radioId = $attrs.id ? ($attrs.id + '-') : '';

                $scope.onToggle = function(item) {
                    if (item.selected) {
                        $scope.selected = item;
                    }
                    else {
                        $scope.selected = null;
                    }
                    clear(item);

                    return $scope.onChange(item);
                };
            }
        }
    });