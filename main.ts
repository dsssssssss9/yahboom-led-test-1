input.onButtonPressed(Button.A, function () {
    basic.showString("ON")
    LEDBit.LEDAllOn()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("OFF")
    LEDBit.LEDClear()
})
LEDBit.LEDClear()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
