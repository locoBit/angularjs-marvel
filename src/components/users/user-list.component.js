export const UserListComponent = {
  controller: function () {
     this.usersList = [
      { name: 'alan' },
      { name: 'eliot' },
      { name: 'oscar' },
      { name: 'marcos' },
    ];
  },
  template: require('./users-list.template.pug')
};
