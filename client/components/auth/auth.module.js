'use strict';

angular.module('zangApp.auth', [
  'zangApp.constants',
  'zangApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
