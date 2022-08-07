const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';

player.on(`timeupdate`, throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(`videoplayer-current-time`, data.seconds);
}

const currentTime = localStorage.getItem(`videoplayer-current-time`);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
