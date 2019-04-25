google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(loadData);

function loadData() {
	requirejs(['./data1.js'], function(data1) {
		drawBasic(data1.rows);
	});
}

function drawBasic(rows) {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
	  
      data.addRows(rows);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart-div'));
      chart.draw(data, options);
}

function onSelectGraph() {
	var x = document.getElementById("select-graph").value;
	document.getElementById("demo").innerHTML = "You selected: " + x;
}
