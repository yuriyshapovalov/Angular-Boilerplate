module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'app/js/**/*.js',
                options: {
                    specs: 'test/test.js',
                    vendor: 'lib/*.js'
                }
            }
        },

        jshint: {
            all: ['app/js/**/*.js'],
            options: {
                curly: true
            }
        },

        watch: {
            files: ['app/js/**/*.js'],
            tasks: ['jshint', 'jasmine']
        }
    
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jasmine', 'jshint']);
}
