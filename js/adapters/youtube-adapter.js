;(function(document, chrome, Command) {
  var kMirroredClassName = 'mt-mirror-horizontal';

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var video = document.getElementsByClassName('html5-main-video')[0];
    switch (request.command) {
      case Command.isMirrored:
        sendResponse({ mirrored: video.classList.contains(kMirroredClassName) });
        break;
      case Command.changeMirrorMode:
        if (request.on) {
          video.classList.add(kMirroredClassName);
        } else {
          video.classList.remove(kMirroredClassName);
        }
        break;
      case Command.getPlaybackRate:
        sendResponse({ playbackRate: video.playbackRate });
        break;
      case Command.changePlaybackRate:
        video.playbackRate = request.playbackRate;
        break;
      default:
    }
  });
})(document, chrome, _MtCommand);