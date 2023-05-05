let LED = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGBW)
LED.clear()
LED.range(0, 9).showColor(neopixel.colors(NeoPixelColors.Indigo))
LED.setBrightness(50)
basic.pause(50)
basic.forever(function () {
    LED.rotate(1)
    LED.show()
    basic.pause(50)
})
