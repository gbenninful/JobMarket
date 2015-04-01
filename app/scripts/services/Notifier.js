/**
 * Created by George on 3/21/2015.
 */
'use strict';

angular.module('jobMarketApp')
.factory('Notifier', function(){

    return {

      success: function(str){
        toastr.success(str);
      },

      error: function(str){
        toastr.error(str);
      }

  /*    success: function(options){

        toastr.success(options.message, options.title || '');
      },
      error: function (options) {

        toastr.error(options.message);
      }*/
    };
  });
