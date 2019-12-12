angular.module('video-player')
.service('youTube', function($http){

  this.getRequest = function() {
    return $http({
      method: 'GET',
      //url: 'https://www.googleapis.com/youtube/v3/search'
      url: window.YOUTUBE_API_KEY
    })
  }


});
