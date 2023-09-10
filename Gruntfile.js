module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true, 
        },
        files: {
          'dist/css/style.css': 'src/less/style.less',
        },
      },
    },
    uglify: {
      options: {
        mangle: false, 
      },
      my_target: {
        files: {
          'dist/js/app.min.js': ['src/js/*.js'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
