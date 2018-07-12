angular.module("listaTelefonica", []);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
    {nome: "Pedro", telefone: "99999-8888"},
    {nome: "Jonata", telefone: "99999-7777"},
    {nome: "Maria", telefone: "99999-6666"}
  ];
  $scope.adicionarContato = function (contato) {
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  }
});
