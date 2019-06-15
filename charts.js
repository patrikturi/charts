var graph_name = 'day';
var is_curved = false;

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(function() {loadData(graph_name, is_curved)});

function loadData(name, curved) {
	requirejs(['./' + name + '.js'], function(data) {
		drawBasic(name, data.rows, curved);
	});
}

function drawBasic(name, rows, curved) {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'New tickets per ' + name);
	  
      data.addRows(rows);

      var options = {
        height: 275,
        hAxis: {
          title: 'Date (2018 / 2019)',
          format: 'MMM dd'
        },
        explorer: { 
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 4.0
        }
      };
      if(curved) {
          options['curveType'] = 'function';
      }

      var chart = new google.visualization.LineChart(document.getElementById('chart-div'));
      chart.draw(data, options);
}

function onSelectGraph() {
	var name = document.getElementById("select-graph").value;
    graph_name = name;
    loadData(graph_name, is_curved);
}

function handleClickCurved(cb) {
    is_curved = cb.checked;
    loadData(graph_name, is_curved);
}

