/**
 * Blocks for driving the Button Controller
 */
//% weight=100 color=#00A654 icon="\uf1b0" block="Button Controller"
namespace Button_Controller {
    /**
    *Button Controller Standard Buttons
    */
    export enum ControllerButtons {
        P1,
        P2,
        P8,
        P12,
        P13,
        P14,
        P15,
        P16
    }

    /**
    *Button Controller Button Pins
    */
    export enum ControllerButtonPins {
        //% block="P1"
        P1 = DAL.MICROBIT_ID_IO_P1,
        //% block="P2"
        P2 = DAL.MICROBIT_ID_IO_P2,
        //% block="P8"
        P8 = DAL.MICROBIT_ID_IO_P8,
        //% block="P12"
        P12 = DAL.MICROBIT_ID_IO_P12,
        //% block="P13"
        P13 = DAL.MICROBIT_ID_IO_P13,
         //% block="P14"
         P14 = DAL.MICROBIT_ID_IO_P14,
        //% block="P15"
        P15 = DAL.MICROBIT_ID_IO_P15,
        //% block="P16"
        P16 = DAL.MICROBIT_ID_IO_P16
    }

    /**
    *Button Controller Button Events
    */
    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    /**
     *
     */
    //% shim=Button_Controller::init
    function init(): void {
        return;
    }

    /**
     * Determines if a Button Controller button is pressed
     * @param button press to be checked
     */
    //% blockId="kitronik_controller_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ControllerButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
     * Do something when one of the Button Controller Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% blockId="kitronik_controller_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: ControllerButtonPins, event: ControllerButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }
} 