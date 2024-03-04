input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 255, 9999, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . # .
        # # # # .
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showString("Game Over")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . # .
        # # # # .
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showString("ERROR")
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
})
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
