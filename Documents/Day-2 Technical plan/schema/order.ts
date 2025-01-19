export default {
      name: 'order',
      type: 'document',
      fields: [
        { name: 'orderId', type: 'number', title: 'Order ID' }, // آرڈر کا ID
        { name: 'customerId', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' }, // گاہک کا حوالہ
        { name: 'productDetails', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products Ordered' }, // پروڈکٹس کی تفصیلات
        { name: 'orderTime', type: 'datetime', title: 'Order Time' }, // آرڈر کا وقت
        { name: 'deliveryTime', type: 'datetime', title: 'Delivery Time' }, // ڈیلیوری کا وقت
        { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'In Progress', 'Delivered'] } }, // آرڈر کی حالت
        { name: 'paymentMethod', type: 'string', title: 'Payment Method', options: { list: ['Cash', 'Card', 'Mobile Payment'] } }, // ادائیگی کا طریقہ
      ]
    };
    