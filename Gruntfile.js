module.exports = function(grunt) {

	// Load all tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'./js/application.js': [
					'./src/js/*.js'
					]
				}
			} 
		}
	});

	// registering task default
	grunt.registerTask( 'default', [ 'uglify' ] );
};