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
		}
	});

//run grunt from sublime
//		'imagemin',
//
	grunt.registerTask('default', [
		'concat',
		'sass',
		'responsive_images',
		'imagemin'
	]);
}