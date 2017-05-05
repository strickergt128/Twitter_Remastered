var twitter = angular.module("twitter",[]);
twitter.controller("remastered",function($scope){
  $scope.guardar = function(usuario){
    if(usuario.nombre == undefined){
      alert("El campo esta Vacio");
    }
    if (usuario.apellido == undefined) {
      alert("El campo esta Vacio");
    }
    if (usuario.correo == undefined) {
      alert("El campo esta Vacio");
    }
    if (usuario.contrasenia == undefined) {
      alert("El campo esta Vacio");
    }
      firebase.database().ref('usuarios/').set({
        username: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.correo,
        pasword: usuario.contrasenia
      });
  }
});
