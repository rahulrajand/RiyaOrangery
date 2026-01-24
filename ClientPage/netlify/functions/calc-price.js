const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const { items } = JSON.parse(event.body);

    // Load price JSON (server-side only)
    const priceFile = path.join(__dirname, '..', 'data', 'product.json');
    const prices = JSON.parse(fs.readFileSync(priceFile, 'utf8'));

    let totalAmount = 0;
    const products = [];

    items.forEach((item) => {
      const product = prices[item.id];
      if (!product) {
        throw new Error(`Invalid product ID: ${item.id}`);
      }

      const unitPrice = product.price;
      const qty = item.qty;
      const amount = unitPrice * qty;

      totalAmount += amount;

      products.push({
        id: item.id,
        name: product.name,
        qty,
        unitPrice,
        amount,
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        products,
        totalAmount,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
