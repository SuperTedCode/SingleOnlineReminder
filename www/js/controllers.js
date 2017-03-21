toDoList.controller('homeCtrl', function($scope,blobID,$document) {


	$document.ready(function(){ //runs the code when the the app is ready.

	$scope.url = "https://api.myjson.com/bins"; //URL to post data

//When the app is started it first checks if there is localstorage
//in the browser from when the app was used before. 'blobID'
//If not the $scope variables are set. Just the Save button is visable.

	if(localStorage.getItem("blobID") == undefined) {
	
	$scope.obj = {title:"",desc:"",priority:"medium",complete:false};//object to hold the data, medium set as default
	//console.log($scope.obj);
	$scope.save = true;
	$scope.update = false;
	$scope.delete = false;
	}
	else {
//If there is data in the localstorage 'blobID' then we use its value along with the url to
//invoke the service getData to get the data from the JSON webpage and then populate
//the $scope.obj variable so the data is populated to the html page. The blobID is posted
//to the console for ref, again the button values are set so just update and delete are showing.
	
	$scope.save = false;
	$scope.update = true;
	$scope.delete = true;
	$scope.blobID = JSON.parse(localStorage.getItem("blobID"));
	console.log("URL = " +$scope.blobID); //In case user clears the console the blobID is posted again.
	//servicde call to get data with blobID
	$scope.getData = blobID.getData(function(obj) {
		$scope.obj = obj;
	},$scope.blobID);
	}
});


//Function called when priority is changed to update its variable
	$scope.setPri = function(priority) {
		$scope.obj.priority = priority;
		//console.log($scope.obj);
	};

//Function called every time the text area is changed
	$scope.text = function(text) {
		$scope.obj.desc = text;
		//console.log($scope.obj);
	};

//service call to post the obj to jsonblob and then
//save the returned blobID to the $scope variable $scope.blobID
	$scope.post = function() {

		$scope.postData = blobID.postData(function(blobID) {
		$scope.blobID = blobID;
		//console.log($scope.obj);
		console.log("URL = " +$scope.blobID);//log the blobID to the console as requested for ref
		$scope.save = false;
		$scope.update = true;
		$scope.delete = true;
		localStorage.setItem("blobID", JSON.stringify($scope.blobID));
	},$scope.url,$scope.obj);

	};

//service call to update the jsonblob data we created eariler and then
//save the returned obj to the $scope variable $scope.data
	$scope.put = function () {
		//console.log($scope.obj.blobID);
		$scope.updateData = blobID.updateData(function(update) {
			$scope.data = update;
		},$scope.blobID,$scope.obj);
		//localStorage.setItem("object", JSON.stringify($scope.obj)); //Used to store obj in localstorage
	};

//service call to delete the jsonblob data we created eariler and then
//reset $scope.obj to reflect the same. Also localstorage is cleared.
//The buttons are set so only save is showing to create a new blobID.
	$scope.remove = function () {
		/* //removing code as myjson does not offer a delete option!!!
		$scope.deleteData = blobID.deleteData(function(deleteData) {
			$scope.delete = deleteData;
		},$scope.url+$scope.blobID);
		*/
		$scope.save = true;
		$scope.update = false;
		$scope.delete = false;
		localStorage.clear();
		$scope.obj = {title:"",desc:"",priority:"medium",complete:false};
	};

});
	











