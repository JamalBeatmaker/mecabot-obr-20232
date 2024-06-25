function segue_linha () {
    if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        30,
        hackbitmotors.Motors.M1B,
        30
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        50,
        hackbitmotors.Motors.M1B,
        50
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, true)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        -95,
        hackbitmotors.Motors.M1B,
        45
        )
    } else if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        45,
        hackbitmotors.Motors.M1B,
        -90
        )
    }
}
