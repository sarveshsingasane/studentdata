// import '../../factories/database/index'
// export default angular.module('database.controller', [])
// angular.module('database.controller', ['database.services'])
// .controller('tableCtrl',  function($scope, $http, databaseService){
            
//     databaseService.validate().then(
//         function success(response){
//             console.log(response.data)
//             $scope.Contactlist = response.data
//         }
//     )
//     $scope.hideField = true;
//     $scope.contact = {
//         "name":"",
//         "email": "" 
//     }
   
//     $scope.checkFieldVal = function(){
   
//         if(!$scope.contact.name || !$scope.contact.email){
//             $scope.hideField = true;
//         }else{
//             $scope.hideField = false;
//         }
//     }
//     $scope.checkFieldVal();

//         $scope.checkInputVal= function(){
//             $scope.checkFieldVal();
//         }

//     $scope.addContact = function()
//     {
//         console.log($scope.contact);
//         databaseService.addContact($scope.contact).then(
//         function success(response){
//         console.log(response.data);
//         $scope.Contactlist.unshift(response.data);
//         console.log( $scope.Contactlist)  
//     });     

//     $scope.contact.name="";
//     $scope.contact.email="";    
//     $scope.checkFieldVal(); 
//     }
    

//     $scope.deleteContact = function(id, index) { 
            
//         console.log("Deleted Id" , id)
//         databaseService.deleteContact(id).then(
//             function success(response){
//             })
//         $scope.Contactlist.splice(index, 1)


//         // console.log(id)
          
//     };

// });
