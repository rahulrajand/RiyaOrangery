export async function onRequestPost({ request }) {
  try {
    const { items } = await request.json();

    // 🔁 FETCH product.json instead of fs
    const res = await fetch('https://riyaorangery.in/product.json');

    if (!res.ok) {
      throw new Error('Unable to load product data');
    }

    const data = await res.json();

    let totalAmount = 0;
    const products = [];

    for (const item of items) {
      const product = data.product.find((p) => p.productid === item.id);

      if (!product) {
        throw new Error(`Invalid product ID: ${item.id}`);
      }

      /* ===============================
         1️⃣ DIAMETER / SIZE LOGIC
      =============================== */

      const categoryKey = (product.category || '').trim().toLowerCase();
      const hasPotOptions = categoryKey === 'plant';
      const hasSoilOptions = categoryKey === 'plant';
      let sizeIndex = 0;

      if (typeof item.diam === 'string') {
        const trimmedLabel = item.diam.trim();

        // First check if the exact label exists in productsize (handles cases like "100g", "1kg", etc.)
        if (product.productsize.includes(trimmedLabel)) {
          sizeIndex = product.productsize.indexOf(trimmedLabel);
        } else if (categoryKey === 'plant') {
          // For plant category items with " inches" suffix, extract just the numeric part
          const match = trimmedLabel.match(/\d+/);
          if (match) {
            sizeIndex = product.productsize.indexOf(match[0]);
          }
        } else {
          // For other categories, use the label as-is
          sizeIndex = product.productsize.indexOf(trimmedLabel);
        }
      } else {
        sizeIndex = item.diam ?? 0;
      }

      if (sizeIndex < 0) sizeIndex = 0;

      let price = product.productprice[sizeIndex];
      const stockValue = product.stockAvailable;
      const sizeInStock = Array.isArray(stockValue)
        ? stockValue[sizeIndex] === true
        : stockValue !== false;

      if (!sizeInStock) {
        throw new Error('Selected size is out of stock');
      }

      /* ===============================
         2️⃣ DISCOUNT LOGIC
      =============================== */

      let discount = product.discount || 0;
      if (Array.isArray(discount)) {
        discount = discount[sizeIndex] || 0;
      }
      let discountedPrice = Math.round(price - (price * discount) / 100);

      /* ===============================
         3️⃣ POT PRICE LOGIC
      =============================== */

      if (hasPotOptions) {
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
        }
      }

      /* ===============================
         4️⃣ SOIL PRICE LOGIC
      =============================== */

      if (hasSoilOptions && (item.soil === 'With Soil' || item.soil === 1)) {
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
    }

    return new Response(JSON.stringify({ products, totalAmount }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
