export default {
      name: 'customer',
      type: 'document',
      fields: [
        { name: 'name', type: 'string', title: 'Full Name' }, // گاہک کا مکمل نام
        { name: 'contactInfo', type: 'object', title: 'Contact Info', fields: [
          { name: 'phone', type: 'string', title: 'Phone Number' },
          { name: 'email', type: 'string', title: 'Email Address' }
        ] }, // رابطے کی تفصیلات
        { name: 'address', type: 'string', title: 'Address' }, // پتہ
        { name: 'loyaltyPoints', type: 'number', title: 'Loyalty Points', initialValue: 0 } // پوائنٹس
      ]
    };
    