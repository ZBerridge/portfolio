module.exports = grunt => {
	// require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'dart-sass': {
      target: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/style.css' : 'src/scss/style.scss'
        }
      }
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/js/bundle.map'
        },
        files: {
          'dist/js/bundle.min.js': ['src/js/main.js']
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-dart-sass');
  
};