import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const KEY_LOCAL_STORAGE = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

/* получить текущее время */

player.on('timeupdate', function (data) {
  console.log('timeupdate :>> ', data);
  // data is an object containing properties specific to that event
});

/* установить начальное время */

player
  .setCurrentTime(KEY_LOCAL_STORAGE)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
