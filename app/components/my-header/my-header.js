function MyHeader () {
    let $ctrl = this;
    $ctrl.title = 'FFFFFF';
}

angular
    .module('myApp')
    .component('myHeader', {
        templateUrl: './app/components/my-header/my-header.html',
        controller: MyHeader
    })