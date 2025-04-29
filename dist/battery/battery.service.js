"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = getStatus;
exports.charge = charge;
const battery = {
    charge: 100,
    max_charge_value: 100,
    opType: '',
    changedAt: new Date().toISOString(),
};
function getStatus() {
    return battery;
}
function charge(amount) {
    battery.charge += amount;
    battery.changedAt = new Date().toISOString();
}
