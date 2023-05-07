cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Back)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Left)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Right)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
    }
})
