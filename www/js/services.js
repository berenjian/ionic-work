(function(ng){
  ng
  .module('starter.services',[])

  .factory('users',function(){
    var userList = [
      {
        title: 'Amirmahdi',
        id: 1
      },
      {
        title: 'Ali',
        id: 2
      },
      {
        title: 'Hossein',
        id: 3
      },
      {
        title: 'Mohammad',
        id: 4
      },
    ];
    return {
      all: function(){
        return userList
      }
    }
  })
})(angular);
