(function(angular) {
  'use strict';
  
  angular.module('tagsApp', [])
  .directive('tagsDir', function () {
    return {
        restrict: 'E',
        template: '<div ng-repeat="tag in tags"><button ng-click="close($index)">{{tag}} <span>X</span></button></div>',
        scope: {
           tags: '=tags'
        },
        link: function($scope, element, attributes){
            $scope.closable = !(typeof attributes.closable === 'undefined');
            $scope.close = function(index){
                $scope.tags.splice(index,1)
            }
                    
        }
  };
})
  .controller('tagsController', tagsController);

function tagsController() {
  this.name = "John Smith";
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'john.smith@example.org'} ];
    
  this.tagName = "";
  this.tagList = [];
  
  this.addTag = function($event){
    if(this.tagName!="" && (this.tagList.indexOf(this.tagName)==-1)) {
      this.tagList.push(this.tagName);
      this.tagName = "";
    }

  };
}
})(window.angular);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/