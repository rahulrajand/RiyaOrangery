const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const { items } = JSON.parse(event.body);

    // Load product JSON (server-side only)
    const filePath = path.join(__dirname, '..', 'data', 'product.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    let totalAmount = 0;
    const products = [];

    items.forEach((item) => {
      // 🔍 Find product by ID
      const product = data.product.find((p) => p.productid === item.id);

      if (!product) {
        throw new Error(`Invalid product ID: ${item.id}`);
      }

      /* ===============================
         1️⃣ DIAMETER / SIZE LOGIC
      =============================== */

      // Extract number from diameter (ex: "5 inches" OR index)
      let sizeIndex = 0;

      if (typeof item.diam === 'string') {
        const max = item.diam.match(/\d+/g)?.map(Number)?.[0];
        sizeIndex = product.productsize.indexOf(max?.toString());
      } else {
        sizeIndex = item.diam ?? 0;
      }

      if (sizeIndex < 0) sizeIndex = 0;

      let price = product.productprice[sizeIndex];

      /* ===============================
         2️⃣ DISCOUNT LOGIC
      =============================== */

      const discount = product.discount || 0;

      let discountedPrice = Math.round(price - (price * discount) / 100);

      /* ===============================
         3️⃣ POT PRICE LOGIC
      =============================== */

      switch (item.pot) {
        case '3 inches':
        case 0:
          price += 20;
          discountedPrice += 20;
          break;

        case '4 inches':
        case 1:
          price += 25;
          discountedPrice += 25;
          break;

        default:
          break;
      }

      /* ===============================
         4️⃣ SOIL PRICE LOGIC
      =============================== */

      if (item.soil === 'With Soil' || item.soil === 1) {
        price += 15;
        discountedPrice += 15;
      }

      /* ===============================
         5️⃣ QUANTITY & TOTAL
      =============================== */

      const qty = item.qty;
      const itemTotal = discountedPrice * qty;

      totalAmount += itemTotal;

      products.push({
        productid: product.productid,
        productname: product.productname,
        productsize: product.productsize[sizeIndex],
        productcount: qty,
        productprice: price,
        productdisprice: discountedPrice,
        producttotal: itemTotal,
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
