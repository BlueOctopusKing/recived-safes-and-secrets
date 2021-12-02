input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(80)
    if (true) {
        while (true) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            for (let index = 0; index < 4; index++) {
                music.playTone(988, music.beat(BeatFraction.Whole))
                music.rest(music.beat(BeatFraction.Whole))
            }
            basic.showString(receivedString)
        }
    } else {
        for (let index = 0; index < 1; index++) {
            basic.showString("(safe)")
            basic.clearScreen()
            basic.pause(100)
            basic.showIcon(IconNames.Yes)
        }
    }
})
