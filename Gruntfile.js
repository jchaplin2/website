module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	var config = grunt.file.readYAML("Gruntconfig.yml");

	grunt.initConfig({
		concat:{
			dist:{
				src: 'src/js/**/*.js',
				dest: 'dist/js/app.js'
			}
		},
		responsive_images: {
			dev : {
				options : {
			        engine: 'gm',  // added
					sizes : [{
						name: '600',
						width: 600
					},{
						name: '800',
						width: 800
					},{
						name: '1000',
						width: 1000
					},{
						name: '1200',
						width: 1200
					}]
				},
	    		files : [{
	    			expand : true,
	    			src : ['img/*.*'],
	    			cwd : 'src/',
	    			dest : 'dist/'
	    		}]
			}
  		},
  		imagemin : {
  			dynamic : {
      			files: [{
        			expand: true,
	   				src: ['img/*.*'],
					cwd: 'dist/',
					dest: 'dist/'
				}]
			}
		},
		htmlmin: {
	      dist: {
	        options: {
	          removeComments: true,
	          collapseWhitespace: true
	        },
	        files: {
	          'dist/index.html': 'src/index.html'
	        }
	      }
		},
	    cssmin: {
	      target: {
	        files: [{
	          expand: true,
	          cwd: 'src/',
	          src: ['css/*.css'],
	          dest: 'dist/',
	          ext: '.css'
	        }]
	      }
	    },
	    uglify: {
	      all: {
	        files: [{
	          expand: true,
	          cwd: 'src/',
	          src: ['js/*.js'],
	          dest: 'dist/',
	          ext: '.js'
	        }]
	      }
	    },
	    copy: {
		  main: {
		    expand: true,
		    cwd: 'src/img',
		    src: '**',
		    dest: 'dist/img',
		    flatten: true,
		    filter: 'isFile',
		  }
		}
	});

	grunt.registerTask('default', [
		'htmlmin',
		'cssmin',
		'uglify',
		'concat',
		'imagemin',
		'responsive_images',
		'copy'
	]);
};