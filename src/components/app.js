
angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    
    this.videos = window.exampleVideoData;
    
    this.currentVideo = window.exampleVideoData[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
    }

    
    this.searchResults = () => {
      youTube.getRequest().then(
        function successCallback(response) {
          this.response = response;
        },
        function errorCallback(response) {
          console.log("Unable to perform get request");
        }
      );
      console.log(this.response)
      // console.log(youTube.youTubeSearchMock())
    }

    

  },
  templateUrl: 'src/templates/app.html'
});
