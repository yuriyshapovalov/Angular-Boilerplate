module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'app/js/**/.js',
                options: {
                    specs: 'test/test.js',
                    vendor: 'lib/*.js'
                }
            }
        }
    
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine']);
}
