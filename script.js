<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Music Player</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel="stylesheet" href="styles.css" />
  </head>
  <body>
  <div class="music-player">

  <div class="info">

    <div class="left">
      <a href="javascript:;" class="icon-shuffle"></a>
      <a href="javascript:;" class="icon-heart"></a>
    </div>

    <div class="center">
      <div class="jp-playlist">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="right">
      <a href="javascript:;" class="icon-repeat"></a>
      <a href="javascript:;" class="icon-share"></a>
    </div>

    <div class="progress"></div>

  </div>

  <div class="controls">
    <div class="current jp-current-time">00:00</div>
    <div class="play-controls">
      <a href="javascript:;" class="icon-previous jp-previous" title="previous"></a>
      <a href="javascript:;" class="icon-play jp-play" title="play"></a>
      <a href="javascript:;" class="icon-pause jp-pause" title="pause"></a>
      <a href="javascript:;" class="icon-next jp-next" title="next"></a>
    </div>
    <div class="volume-level">
      <a href="javascript:;" class="icon-volume-up" title="max volume"></a>
      <a href="javascript:;" class="icon-volume-down" title="mute"></a>
    </div>
  </div>

  <div id="jquery_jplayer" class="jp-jplayer"></div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/jquery.jplayer.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/add-on/jplayer.playlist.min.js"></script>
<script src="script.js"></script>
  </body>
</html>
