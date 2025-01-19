export default {
      name: 'product',
      type: 'document',
      fields: [
        { name: 'name', type: 'string', title: 'Product Name' }, // پروڈکٹ کا نام
        { name: 'price', type: 'number', title: 'Price' }, // قیمت
        { name: 'stock', type: 'number', title: 'Stock Level' }, // دستیاب مقدار
        { name: 'category', type: 'string', title: 'Category' }, // کیٹیگری (مین کورس، ڈیسرٹ)
        { name: 'preparationTime', type: 'number', title: 'Preparation Time (minutes)' }, // تیاری کا وقت
        { name: 'rating', type: 'number', title: 'Average Rating', options: { min: 0, max: 5 } }, // ریٹنگ
        { name: 'image', type: 'image', title: 'Product Image' } // تصویر
      ]
    };
    