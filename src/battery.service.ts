import { Injectable } from '@nestjs/common';
import { Battery, BatteryMod } from './battery.interface';
import { Utils } from './utils'

@Injectable()
export class BatteryService {
    private batteryMod: BatteryMod[];
    private utils: Utils;

    // This funtion returns the current Battery charge value.
    getStatus(battery: Battery): string {
        return this.utils.batteryToString(battery);
    }
    
    // This funtion decrese the Battery charge value.
    lowBatteryCharge(battery: Battery, value: number, opType: number): string {
        let oldBattery = battery;
        try {
            if (this.utils.isValidValue(battery, value, opType)) {
                battery.charge = value;
                this.batteryMod.push({
                    oldValue: oldBattery,
                    newValue: battery,
                    changeAt: new Date(),
                });
            }
            return ``;
        } catch (error) {
            
        }
    }
    
    // This funtion increase the Battery charge value.
    addBatteryCharge(battery: Battery, value: number, opType: number): string {
        let resMessage: string
        let oldBattery = battery;
        try {
            if (this.utils.isValidValue(value, opType)) {
                battery.charge = value;
                this.batteryMod.push({
                    oldValue: oldBattery,
                    newValue: battery,
                    changeAt: new Date(),
                });
                resMessage = this.utils.batteryToString(battery);
            }
            return resMessage;
        } catch (error) {
            
        }
        
    }

    
}