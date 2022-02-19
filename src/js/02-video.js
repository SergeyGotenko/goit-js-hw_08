import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player')
const storageKey = localStorage.getItem(STORAGE_KEY);
if (storageKey) {
  player.setCurrentTime(storageKey);
}

player.on('timeupdate',throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

