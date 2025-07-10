const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;
const legacy = require('zigbee-herdsman-converters/lib/legacy');

const definition = {
    fingerprint: tuya.fingerprint("TS0601", ["_TZE204_wfxuhoea"]),
    model: "GDC311ZBQ1-V2",
    vendor: "Tuya",
    description: "LoraTap garage door opener with wireless sensor",
    fromZigbee: [legacy.fromZigbee.matsee_garage_door_opener, fz.ignore_basic_report],
    toZigbee: [legacy.toZigbee.matsee_garage_door_opener, legacy.toZigbee.tuya_data_point_test],
    whiteLabel: [{vendor: "LoraTap", model: "GDC311ZBQ1"}],
    configure: async (device, coordinatorEndpoint) => {
        await tuya.configureMagicPacket(device, coordinatorEndpoint);
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ["genBasic"]);
    },
    exposes: [
        e.binary("trigger", ea.STATE_SET, true, false).withDescription("Trigger the door movement"),
        e.binary("garage_door_contact", ea.STATE, false, true)
            .withDescription("Indicates if the garage door contact is closed (= true) or open (= false)"),
    ],
};

module.exports = definition;
