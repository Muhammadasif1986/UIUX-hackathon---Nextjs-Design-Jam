export default {
      name: 'deliveryZone',
      type: 'document',
      fields: [
        { name: 'zoneName', type: 'string', title: 'Zone Name' }, // زون کا نام
        { name: 'coverageArea', type: 'string', title: 'Coverage Area' }, // جغرافیائی حدود
        { name: 'deliveryCharges', type: 'number', title: 'Delivery Charges' }, // ڈیلیوری چارجز
        { name: 'assignedDrivers', type: 'array', of: [{ type: 'reference', to: [{ type: 'driver' }] }], title: 'Assigned Drivers' } // ڈرائیورز
      ]
    };
    