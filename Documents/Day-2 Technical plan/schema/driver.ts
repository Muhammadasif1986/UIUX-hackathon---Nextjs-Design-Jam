export default {
      name: 'driver',
      type: 'document',
      fields: [
        { name: 'name', type: 'string', title: 'Driver Name' }, // ڈرائیور کا نام
        { name: 'contactInfo', type: 'string', title: 'Contact Info' }, // رابطہ نمبر
        { name: 'assignedZone', type: 'reference', to: [{ type: 'deliveryZone' }], title: 'Assigned Zone' }, // زون
        { name: 'currentOrders', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], title: 'Current Orders' } // موجودہ آرڈرز
      ]
    };
    