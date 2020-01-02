'use strict';
//strict 모드

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
  audio: true
};
// video와 audio를 허용할 수 있는 switch 기본 예제에는 video만 허용

// Video element where stream will be placed.
const localVideo = document.querySelector('video');
//querySelector는 선택자가 선택하는 요소의 첫번째의 요소를 반환.
// Local stream that will be reproduced on the video.

let localStream;
//let은 재 할당 가능 but const는 상수의 개념.

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
// navi를 통해 html정보를 받아와 mediaDevices에 권한 요청.
//권한 요청 성공시에 mainstream이 반환되어 srcObject를 통해 미디어 요소 사용 가능
/* then과 catch는 promise
then의 경우 첫번째 파라메터 성공시 호출 함수 / 두번째 파라메터 실패시 호출할 것.
*/
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
