export interface Battery {
    max_charge_value: 5;
    charge: number;
}

export interface BatteryMod {
    oldValue: Battery;
    newValue: Battery;
    changedAt: Date;
}