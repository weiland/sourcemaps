// Grunt: The JavaScript Task Runner
module.exports = function(grunt) {

    // Grunt Loaded Tasks
    // http://chrisawren.com/posts/Advanced-Grunt-tooling
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Grunt Config
    grunt.initConfig({

        // == JSON Grunt Package
        pkg: grunt.file.readJSON('package.json'),

        // == Watch Task
        // List watch tasks: 'grunt -v'
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

                options: { livereload: true }
            }
        },

        // == Compass Config
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    sourcemap: true
                }
            }
        }

    });


    // Development Tasks
    grunt.registerTask('default', ['watch']);
};