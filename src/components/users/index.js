import angular from 'angular';
import { UserListComponent } from './user-list.component';

const users = angular
      .module('users', [])
      .component('usersList', UserListComponent)
      .config([ '$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $stateProvider
          .state('users', {
            url: '/users',
            component: 'usersList',
            // resolve: {
            //   usersList: (UsersService) => UsersService.getUsers()
            // }
          })
          .state('user-detail', {
            url: '/users/:id',
            component: 'userDetail',
            // resolve: {
            //   user: (UsersService, $stateParams) => UsersService.getUser($stateParams.id)
            // }
          });
        $urlRouterProvider.otherwise('/');
      }])
      .name;

export default users;
