function GridBuilder(scope) {
	var plot_container = '<div class="plot-container ui-widget-content" style="min-width:100px;min-height:100px"></div>';
	var gridster = $(".gridster").gridster({
		widget_margins: [10, 10],
		widget_base_dimensions: [20, 20],
		draggable: {
			handle: 'tspan'
		},
		helper: 'clone',
		resize: {
			enabled: true,
			min_size: [5, 5],
			resize: function(e, ui, $widget) {
          		$widget.children("div").children("div").remove();
          		$widget.children("div").css({width: $widget.width(), height: $widget.height()});
          		
          		chartRender($widget.children("div").attr("id"), $widget.width(), $widget.height());
        	},
        	stop: function(e, ui, $widget) {
        		$widget.children("div").children("div").remove();
        		$widget.children("div").css({width: $widget.width(), height: $widget.height()});
          		
          		chartRender($widget.children("div").attr("id"), $widget.width(), $widget.height());
        	}
		},	
	}).data('gridster');

	var widgets = [];
	for (var i = 5; i < 8; i++) {
		for (var j = 6; j < 10; j++) {
			widgets.push([plot_container, i, j]);
		}
	}

	$.each(widgets, function(i, widget){
	  	gridster.add_widget.apply(gridster, widget)
	  	$(".plot-container")[i].setAttribute("id", "container"+i);
	  	var div = '<div id="box'+i+'" class="plot-box ui-widget-content" ng-model="sizeWatcher"></div>'
	  	$("#container"+i).append(div);
	  	$("#box"+i).css({width: $("#container"+i).width(), 
	  		height: $("#container"+i).height()});
	
	  	chartRender("box"+i, $("#container"+i).width(), $("#container"+i).height());
	  	//$("#box"+i).children("div").attr("id", "chart"+i);
	});
}