'use strict';

angular.module('meanbaseApp')
  .directive('extensionsArea', function ($rootScope) {
    return {
      templateUrl: 'components/extensions-area/extensions-area.html',
      restrict: 'A',
      scope: {},
      link: function (scope, element, attrs) {
      	if(attrs.extensionsArea) {
          scope.removeThisExtension = scope.$parent.removeThisExtension;
          scope.$watch(function() { return $rootScope.editMode }, function(newValue, oldValue) {
            scope.editMode = newValue;
          });
    			scope.areaName = attrs.extensionsArea || 'extensions-1';
      	}
      }
    };
  });