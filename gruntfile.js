module.exports = function(grunt) {

	// Load all tasks
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

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
			},
		},

		// Optimize images
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3,
				},
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			},
			options: {
				title: 'Imagemin Task',
				message: 'Imagemin task completed successful',
			}
		}

	});

	// registering task default
	grunt.registerTask( 'default', [ 'notify:uglify', 'imagemin' ] );
};