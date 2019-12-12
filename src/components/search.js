angular.module('video-player')

.component('search', {
  controller: function() {
    this.target = "";

    this.search = () => {
      this.result(this.target);
    }

  },
  bindings: {
    result: '<'

  },
  templateUrl: 'src/templates/search.html'
});
