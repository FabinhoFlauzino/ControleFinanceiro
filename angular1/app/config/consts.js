angular.module('ControleFinanceiro').constant('consts', {
  appName: 'Controle Finaceiro',
  version: '1.0',
  owner: 'Fabinho Flauzino e Otoniel Mattoso',
  year: '2018',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
