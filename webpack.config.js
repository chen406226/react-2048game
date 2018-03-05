var path=require("path")
module.exports={
	entry:"./www/app/main.js",
	output:{
		path:path.resolve(__dirname,"./www/dist"),
		filename:"bundle.js"
	},
	module:{
		rules:[{
			test:/\.js$/,
			include:[
			path.resolve(__dirname,"./www/app")],
			exclude:[path.resolve(__dirname,"node_modules")],
			loader:"babel-loader",
			options:{
				presets:["es2015","react","stage-3"],
				plugins:[
					"syntax-object-rest-spread",
					"transform-object-rest-spread",
					[
						"transform-runtime",{
							"helpers":false,
							"polyfill":false,
							"regenerator":true,
							"moduleName":"babel-runtime"
						}
					]
				]
			}
		}]
	},
	watch:true
}
























