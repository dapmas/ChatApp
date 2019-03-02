// Ideally should use strict to refrain from common coding errors
// 'use strict';

// what needs to be streamed.
const mediaStreamConstraints = {
  video: true,
  // audio: true  // get the user microphone
};


// Video element where stream will be placed.
const localVideo = document.querySelector('#localVideo');
const remoteVideo = document.querySelector('#remoteVideo');


// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
  remoteVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
