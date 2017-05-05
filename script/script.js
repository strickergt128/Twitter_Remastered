var twitter = angular.module("twitter",[]);
twitter.controller("remastered",function($scope){
  $scope.guardar = function(usuario){
    if (usuario.correo == "dilancastro7@hotmail.com" & usuario.contrasenia == "PlayStation4") {
      window.location.href = "Perfil/perfil.html"
    } else {
      alert("Usuario Incorrecto")
    }
  }
});
