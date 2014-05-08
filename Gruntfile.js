// Grunt: The JavaScript Task Runner
module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 9001,
					protocol: 'http',
					hostname: 'localhost',
					base: '.',
					keepalive: false,
					livereload: true,
					open: true
				}
			}
		},

		watch: {

			html: {
				files: [
					'**/*.html'
				]
			},

			sass: {
				files: ['css/src/**/*.scss'],
				tasks: ['compass:dist']
			},

			css: {
				files: ['css/**/*.css']
			},

			livereload: {
				files: [
					'**/*.html',
					'css/**/*.css'
				],

				options: {
					livereload: true
				}
			}
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb',
					sourcemap: true
				}
			}
		}
	});

	grunt.registerTask('default', ['connect', 'watch']);
};