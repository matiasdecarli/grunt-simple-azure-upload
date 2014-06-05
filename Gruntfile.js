'use strict';

module.exports = function(grunt) {

// Project configuration.
  grunt.initConfig({    
    azure_sync: {
      parameters: {      	
      	container: 'testcontainer',
    	   path: 'dist'
      }         
    }
  });

  grunt.loadTasks('tasks');  
  grunt.registerTask('default', ['azure_sync']);

};