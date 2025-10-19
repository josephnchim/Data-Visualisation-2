var vg_1 = "vega/map.json";

vegaEmbed("#map", vg_1).then(function(result){}).catch(console.error);

var vg_2 = "vega/anotherbar.json";

vegaEmbed("#bar", vg_2).then(function(result){}).catch(console.error);

var vg_3 = "vega/line.json";

vegaEmbed("#line", vg_3).then(function(result){}).catch(console.error);