module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        indentLevel: 2,
        // beautify: false,
        // compress: true,
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.js'],
          dest: 'dist/',
          ext: '.js'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          'sourcemap': 'none',
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.css'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['src/*.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify', 'sass']);
};