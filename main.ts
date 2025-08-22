basic.forever(function () {
    music.play(music.stringPlayable("C5 G E A D F E F ", 120), music.PlaybackMode.UntilDone)
    music.setVolume(100)
})
