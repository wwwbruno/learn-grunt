module.exports = function(grunt) {

	// Load all tasks
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		notify: {

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
				},
				options: {
        			title: 'Uglify Task',
        			message: 'Uglify task completed successful',
      			}
			}
		}

	});

	// registering task default
	grunt.registerTask( 'default', [ 'notify:uglify' ] );
};