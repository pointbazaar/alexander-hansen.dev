var f2=function(){

	var list1 = document.getElementById("futurehacks");

	var view1 = {
		"hacks":[
			{
				"name":"Provinzial Hack 2019",
				"url":"https://www.provinzial.com/content/_micro/hackathon/",
				"location":"Duesseldorf, Germany",
				"startdate":"8.11.2019",
				"enddate":"10.11.2019",
				"totalprizes":"2500"
			},
			{
				"name":"Kreathon 2019",
				"url":"https://kreathon-krefeld.de/",
				"location":"Krefeld,Germany",
				"startdate":"15.11.2019",
				"enddate":"16.11.2019",
				"totalprizes":"unknown"
			}
			
		],
		"example":"example"
	};

	var template1=`
	{{#hacks}} 
		<li class="">
			<span class="float-right">
					{{startdate}} - {{enddate}}
				</span>
			<div class="row align-items-center">
				<a href="{{url}}">
					<h4>{{name}}</h4> 
				</a>
				<div class="ml-2 mb-2 badge badge-info">UPCOMING</div>
			</div>
			<div>
				<div class="row m-3">
					<img src="https://image.flaticon.com/icons/svg/149/149060.svg" style="height: 30px;"/>
					<span>{{location}}</span>
				</div>
			</div>
			<strong>{{totalprizes}} € in Prizes</strong>
		</li>
		
	{{/hacks}} `;
	var output = Mustache.render(template1,view1);

	list1.innerHTML=output;

	console.log(output);

	console.log("completed templating with mustache");
};

window.addEventListener('load',f2);
