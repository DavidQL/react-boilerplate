module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      web: {
        options: {
          port: '8082',
          base: ['www']
        }
      }
    },

    watch: {
      js: {
        files: ['js/**/*'],
        tasks: ['browserify']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
    },

    browserify: {
      javascripts: {
        src: 'js/index.js',
        dest: 'www/index.js'
      },
      options: {
        transform: ['reactify'],
        browserifyOptions: {
          debug: true
        }
      }
    },

    sass: {
      main: {
        options: {
          sourceMap: true
        },
        files: {
          'www/css/index.css': 'sass/index.scss'
        }
      }
    },
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('develop', ['sass', 'browserify', 'connect:web', 'watch']);
};