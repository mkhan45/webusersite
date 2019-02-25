console.log('hi');


function loadWeather(){
	$.ajax({
		url: "kitchen",                      // goes to https://user.tjhsst.edu/pckosek/kitchen
		type: "get",                         // use a 'get' type request
		data:  $('#coord').serialize(), //serialize form and pass to server
		success: function(response) {
			// THIS FUNCTION IS CALLED WHEN KITCHEN IS COMPLETE
			// -- AND -- everthing went ok
			// update the display
			// (bring the order to the customer)
			$("weather").html(response.weather);
		},

		error: function (stat, err) {
			// THIS FUNCTION IS CALLED WHEN KITCHEN IS COMPLETE
			// -- BUT -- something went wrong (like invalid menu_item)
			// update the display
			// (bring the explanation to the customer)
			$("weather").html("error");
		}
	});
}
