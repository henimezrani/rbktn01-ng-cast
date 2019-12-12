angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.printVid = () => {
      console.log(this.link)

    }
    this.setUrl = ()=> {
      return "https://www.youtube.com/embed/" + this.video.id.videoId;
    }
  },
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
