import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import components from './components/components';
import common from './common/common';

const marvelApp = angular
      .module('marvelApp', [
        uiRouter,
        components,
        common
      ])
      .component('app', AppComponent)
      .name;

export default marvelApp;
