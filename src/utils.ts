import { Injectable } from '@nestjs/common';
import { Battery } from './battery.interface';

@Injectable()
export class Utils {

    batteryToString(battery: Battery): string {
        return `{
            "amount": ${battery.charge} kWh
        }`;
    }
    isValidValue(battery: Battery, value: number, opType: number): string {
        if (value < 0) {
            return "";
        }
        if (opType = 1) {
            (value)
        }
        if (opType = 2) {

        }
        return this.batteryToString(battery);
    }
}