export default angular.module('database.service', [])
angular.module('database.service',[])
.factory('databaseService', [
  '$http',
    
       function($http) {

         var service = {};
        var urlBase = "/api/student";

       
         service.validate = Validate
         service.addContact = AddContact
         service.deleteContact = DeleteContact
         return service;    

        function Validate() {
            var url = $http.get(urlBase);
            return $http.get(urlBase);  
        }; 

        function AddContact(database){                                   
            var url = $http.post(urlBase, JSON.stringify(database))
            return url; 
        }; 
        
        function DeleteContact(id){
          var urlstr = urlBase+'/'+ id;
          var url = $http.delete(urlstr)
            return url;
        }
}]);    
