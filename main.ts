input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # . # #
        `)
    basic.pause(1)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # . # #
        `)
    basic.pause(1)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # . # #
        `)
    basic.pause(1)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("A E A E A E A E ", 350), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 2; index++) {
        basic.showString("WARN!")
    }
    music.stopAllSounds()
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.play(music.stringPlayable("A E A E A E A E ", 350), music.PlaybackMode.LoopingInBackground)
    music.setVolume(255)
    basic.pause(10000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(0.1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(0.1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(0.1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(0.1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(0.1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(0.1)
    music.stopMelody(MelodyStopOptions.All)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showString("Shut the fuck up")
        basic.clearScreen()
        basic.pause(50)
        basic.showArrow(ArrowNames.North)
        basic.pause(50)
        basic.showArrow(ArrowNames.NorthEast)
        basic.pause(50)
        basic.showArrow(ArrowNames.East)
        basic.pause(50)
        basic.showArrow(ArrowNames.SouthEast)
        basic.pause(50)
        basic.showArrow(ArrowNames.South)
        basic.pause(50)
        basic.showArrow(ArrowNames.SouthWest)
        basic.pause(50)
        basic.showArrow(ArrowNames.West)
        basic.pause(50)
        basic.showArrow(ArrowNames.NorthWest)
        basic.pause(50)
        basic.showArrow(ArrowNames.North)
        basic.pause(50)
        basic.showArrow(ArrowNames.NorthEast)
        basic.pause(50)
        basic.showArrow(ArrowNames.East)
        basic.pause(50)
        basic.showIcon(IconNames.Asleep)
        basic.pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.EighthNote)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
})
