angular.module("listaTelefonica", ["ngMessages"]);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];


  var contatos = $http.get('http://localhost:8080/contatos/listar').
      then(function(response) {
          $scope.contatos = response.data;
      });

  var operadoras = $http.get('http://localhost:8080/operadoras/listar').
      then(function(response) {
        $scope.operadoras = response.data;
      });

  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    $http.post("http://localhost:8080/contatos/salvar", contato).
      then(function(response) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        contatos();
      });
  };

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) {
        return contato;
      }
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function (campo) {
    $scope.ordenacao = campo;
    $scope.direcao = !$scope.direcao;
  };
});
