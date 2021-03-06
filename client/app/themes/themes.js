'use strict';

angular.module('meanbaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cms.themes', {
        url: '/themes',
        templateUrl: 'app/themes/themes.html',
        controller: 'ThemesCtrl',
        hasPermission: 'changeSiteSettings',
        icon: 'fa-paint-brush'
      });
  });
