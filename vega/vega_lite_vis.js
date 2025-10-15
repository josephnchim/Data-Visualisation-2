var vg_1 = "vega/map.json";

vegaEmbed("#map", vg_1).then(function(result){}).catch(console.error);

var vg_2 = "vega/bar.json";

vegaEmbed("#bar", vg_2).then(function(result){}).catch(console.error);