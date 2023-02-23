input.onGesture(Gesture.LogoUp, function () {
    led.unplot(Player_x, Player_y)
    Player_y += -1
    if (Player_y < 0) {
        Player_y = 4
        led.plotBrightness(Player_x, Player_y, 255)
    } else {
        led.plotBrightness(Player_x, Player_y, 255)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(Player_x, Player_y)
    Player_x += -1
    if (Player_x < 0) {
        Player_x = 4
        led.plotBrightness(Player_x, Player_y, 255)
    } else {
        led.plotBrightness(Player_x, Player_y, 255)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Player_x = randint(0, 4)
    Player_y = randint(0, 4)
    Doggo_X = randint(0, 4)
    Doggo_Y = randint(0, 4)
    led.plotBrightness(Player_x, Player_y, 255)
    led.plotBrightness(Doggo_X, Doggo_Y, 20)
    while (Doggo_X == Player_x && Doggo_Y == Player_y) {
        led.plotBrightness(Player_x, Player_y, 255)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    led.unplot(Player_x, Player_y)
    Player_x += 1
    if (Player_x > 4) {
        Player_x = 0
        led.plotBrightness(Player_x, Player_y, 255)
    } else {
        led.plotBrightness(Player_x, Player_y, 255)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    led.unplot(Player_x, Player_y)
    Player_y += 1
    if (Player_y > 4) {
        Player_y = 0
        led.plotBrightness(Player_x, Player_y, 255)
    } else {
        led.plotBrightness(Player_x, Player_y, 255)
    }
})
let Doggo_Y = 0
let Doggo_X = 0
let Player_y = 0
let Player_x = 0
Player_x = randint(0, 4)
Player_y = randint(0, 4)
Doggo_X = randint(0, 4)
Doggo_Y = randint(0, 4)
led.plotBrightness(Player_x, Player_y, 255)
led.plotBrightness(Doggo_X, Doggo_Y, 20)
while (Doggo_X == Player_x && Doggo_Y == Player_y) {
    led.plotBrightness(Player_x, Player_y, 255)
}
basic.forever(function () {
    if (Doggo_X == Player_x && Doggo_Y == Player_y) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
