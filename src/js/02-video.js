import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'videoplayer-current-time';

const iframeRef = document.querySelector('iframe');
const player = new Vimeo(iframeRef);

const setTimeInLocalStorage = (key, time) => {
  try {
    const timeInJson = JSON.stringify(time);
    localStorage.setItem(key, timeInJson);
  } catch (error) {
    console.log(error.message);
  }
};

const onSetTimeInlocalStorage = e => {
  const curretTimeOnPlaeyr = e.seconds;
  setTimeInLocalStorage(KEY_LOCAL_STORAGE, curretTimeOnPlaeyr);
};

const getTimeFromLocalStorage = key => {
  try {
    const time = localStorage.getItem(key);

    return time === null ? undefined : JSON.parse(time);
  } catch (error) {
    console.log(error.message);
  }
};

const timeAtStart = getTimeFromLocalStorage(KEY_LOCAL_STORAGE);

player.on('timeupdate', throttle(onSetTimeInlocalStorage, 1000));

player
  .setCurrentTime(timeAtStart)
  .then(function (seconds) {})
  .catch(function (error) {});
