var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	// The name `constructor` is important here
	constructor: function () {
		// Calling the super constructor is important so our generator is correctly set up
		generators.Base.apply(this, arguments);

		// Next, add your custom code
		//this.option('coffee'); // This method adds support for a `--coffee` flag
	},
	copyFiles: function () {
		var yo = this;
		console.log('Creating template directory');

		// copy special files
		this.fs.copy(this.templatePath('_package.json'),this.destinationPath('package.json'));
		this.fs.copy(this.templatePath('_bower.json'),this.destinationPath('bower.json'));

		// copy files
		[
			'index.html',
			'js/script.js',
			'css/style.css'
		].forEach(function(file){
			yo.fs.copy(
				yo.templatePath(file),
				yo.destinationPath(file)
			);
		});
	},
	method2: function () {
		var dstPath = this.destinationPath('index.js');
		console.log('destinationPath %s', dstPath);
	}
});