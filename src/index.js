'use strict';
console.log('bundle.js');
const vega = require('vega');
const vl = require('vega-lite');
const vlSpecUrl = '/vg.spec.json';
// Async load Vega Lite spec as a static resource
// Compile Vega-Lite Spec in Vega spec
// Call render
vega
	.loader()
	.load(vlSpecUrl)
	.then(function(data) {
		const vlSpec = JSON.parse(data);
		const vgSpec = vl.compile(vlSpec).spec;
		render(vgSpec);
	});

function render(spec) {
	const view = new vega.View(vega.parse(spec))
		.renderer('svg') // set renderer (canvas or svg)
		.initialize('#vis') // initialize view within parent DOM container
		.hover() // enable hover encode set processing
		.run();
	return view;
}

// WIP Atempting to accept fronted changes via HMR
if (module.hot) {
	module.hot.accept('./index.js', function() {
		console.log('Accepting module');
	});

	vega
		.loader()
		.load(vlSpecUrl)
		.then(function(data) {
			const vlSpec = JSON.parse(data);
			const vgSpec = vl.compile(vlSpec).spec;
			render(vgSpec);
		});
}
