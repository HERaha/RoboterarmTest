input.onGesture(Gesture.TiltRight, function () {
    if (y > 10) {
        y = y - 10
        pins.servoWritePin(AnalogPin.P1, y)
        basic.showNumber(y / 10)
    }
})
input.onButtonPressed(Button.A, function () {
    if (x < 180) {
        x = x + 10
        pins.servoWritePin(AnalogPin.P0, x)
        basic.showNumber(x / 10)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x > 10) {
        x = x - 10
        pins.servoWritePin(AnalogPin.P0, x)
        basic.showNumber(x / 10)
    }
})
input.onButtonPressed(Button.B, function () {
    if (y < 180) {
        y = y + 10
        pins.servoWritePin(AnalogPin.P1, y)
        basic.showNumber(y / 10)
    }
})
let x = 0
let y = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
pins.servoWritePin(AnalogPin.P2, 90)
y = 90
x = 90
