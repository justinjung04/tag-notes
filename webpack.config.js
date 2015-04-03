var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    addVendor: function(name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(path);
    },
    entry: [
    	path.resolve(__dirname, 'app/main.js')
    ],
    resolve: { 
        alias: {} 
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
	    loaders: [
            { test: /\.js$/, loader: 'jsx' }, 
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
            { test: /\.woff$/, loader: 'url?limit=100000' }
        ]
	}
};

//config.addVendor('react', path.resolve(node_modules, 'react/dist/react.min.js'));
//config.addVendor('jquery', path.resolve(node_modules, 'jquery/dist/jquery.min.js'));
//config.addVendor('bootstrapCss', path.resolve(node_modules, 'bootstrap/dist/css/bootstrap.min.css'));

module.exports = config;