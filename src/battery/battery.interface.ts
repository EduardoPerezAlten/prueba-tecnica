// In this file i just create the skeleton of the Battery.
export interface Battery {
    charge: number;
    max_charge_value: number;
    changedAt: string;
}

// Historycal of battery changes
export interface BatteryHistory {
    newBattery: Battery;
    oldBattery: Battery;
    opType: 'charge' | 'discharge',
}
