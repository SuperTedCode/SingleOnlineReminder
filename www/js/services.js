toDoList.service('blobID', function($http) {

//Gets the data associated with the JSON URL
	this.getData = function(receivedData,url) {
		$http.get(url).then(funOK, funNOK);

		function funOK(response) {
		
			receivedData(response.data);
		};

		function funNOK(response) {
			alert("Error in $http.post!! View Console logs");
			console.log("Failed URL: "+url+": -"+response.statusText+" -- "+response.data.error.message);
		};
	}

//Create a new JSON data and return its blobID
	this.postData = function(callbackOK,url,data) {
		$http.post(url, data).then(funOK, funNOK);

		function funOK(response) {
		
			callbackOK(response.data.uri);
		};

		function funNOK(response) {
			alert("Error in $http.post!! View Console logs");
			console.log("Failed URL: "+url+": -"+response.statusText+" -- "+response.data.error.message);
		};
	}

//Update the JSON data already created.
	this.updateData = function(update,url,data) {
		$http.put(url,data).then(ok, nOK);

		function ok() {
			return true;
			//update(response.data);
		};

		function nOK(response) {
			alert("Error in $http.put!! View Console logs");
			console.log("Failed URL: "+url+": -"+response.statusText+" -- "+response.data.error.message);
		};
	}

//Delete the JSON data which was created.
	this.deleteData = function(deleteData,url) {
		$http.delete(url).then(dOK, dNOK);

		function dOK() {
			return true;
			//deleteData(true);
		};

		function dNOK() {
			alert("Error in $http.delete!! View Console logs");
			console.log("Failed URL: "+url+": -"+response.statusText+" -- "+response.data.error.message);
		};
	}

});