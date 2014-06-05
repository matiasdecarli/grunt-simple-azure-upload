/*
 * grunt-azure-sync
 * https://github.com/matiasdecarli/grunt-azure-sync
 *
 * Copyright (c) 2014 Matias De Carli
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('azure_sync', 'The best Grunt plugin ever.', function() {
      var done = this.async();      
      azureSync(this.data,done);      
  });

  function azureSync(params){

    var azure = require('azure'),
        fs = require('fs'),
        blobService = azure.createBlobService();
    
    fs.readdir(params.path, function(err,items){
        if (!err){
          items.forEach(function(item){
            blobService.createBlockBlobFromFile(params.container, item
            , params.path + '/' + item
            , function(error){
               if(!error){ 
                   console.log('upload: ', item);
                }
                else{
                  console.log('error: ',error)
                }
            });     
          });            
        }
        else{
          console.log('error: ',error);
        }      
    }); 
  };

};
