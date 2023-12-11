console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready");

	// Axios
	const url_tokyo = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
	const url_gifu = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";
	const option = {responseType: "blob"};
	axios.get(url_gifu, option).then(res=>{
		res.data.text().then(str=>{
			const arr = JSON.parse(str);
			console.table(arr);

			console.log(arr[0].timeSeries[0].areas[0].weathers);


			$("#msg_1").text ("午前:" + arr[0].timeSeries[0].areas[0].weathers[0] + "　　　午後:" + arr[0].timeSeries[0].areas[0].weathers[1])
		});
	}).catch(err=>{
		console.log(err);
	});
});