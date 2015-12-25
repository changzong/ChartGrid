function GridBuilder(scope) {
	var plot_container = '<div class="plot-container ui-widget-content"></div>';
	var gridster = $(".gridster").gridster({
		widget_margins: [5, 5],
		widget_base_dimensions: [100, 50],
		helper: 'clone',
		resize: {
			enabled: true,
			resize: function(e, ui, $widget) {
          		$widget.children("div").children("div").remove();
          		$widget.children("div").css({width: $widget.width(), height: $widget.height()});
          		
          		chartRender($widget.children("div").attr("id"), $widget.width(), $widget.height());
        	}
		},
	}).data('gridster');

	var widgets = [];
	for (var i = 1; i < 4; i++) {
		for (var j = 1; j < 5; j++) {
			widgets.push([plot_container, i, j]);
		}
	}

	$.each(widgets, function(i, widget){
	  	gridster.add_widget.apply(gridster, widget)
	  	$(".plot-container")[i].setAttribute("id", "container"+i);
	  	var div = '<div id="box'+i+'" class="plot-box ui-widget-content" ng-model="sizeWatcher"></div>'
	  	$("#container"+i).append(div);
	  	$("#box"+i).css({width: $("#container"+i).width(), height: $("#container"+i).height()});
	
	  	chartRender("box"+i, $("#container"+i).width(), $("#container"+i).height());
	  	//$("#box"+i).children("div").attr("id", "chart"+i);
	});
}