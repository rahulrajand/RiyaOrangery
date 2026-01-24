import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { ComponentsService } from '../components.service';
import { CartDetails } from '../components.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  cartItems: CartDetails[] = [];
  subtotal: number = 0;
  shippingCost: number = 50;
  shippingSoilCost: number = 0;
  total: number = 0;
  showClearConfirm: boolean = false;

  // Personal Info
  customerName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  pincode: string = '';

  // Validation errors
  nameError: string = '';
  emailError: string = '';
  phoneError: string = '';
  addressError: string = '';
  cityError: string = '';
  stateError: string = '';
  pincodeError: string = '';

  constructor(
    private componentsService: ComponentsService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle('Shopping Cart | Riya Orangery');

    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow',
    });
  }

  ngOnInit(): void {
    this.componentsService.cartlist$.subscribe((cart) => {
      this.cartItems = cart;
      this.calculateTotals();
    });
  }

  calculateTotals() {
    console.log(this.cartItems);
    const totalCount = this.cartItems.reduce((sum, item) => sum + item.productcount, 0);
    if (totalCount > 6) {
      this.shippingCost = 150;
    } else if (totalCount <= 6 && totalCount >= 4) {
      this.shippingCost = 100;
    } else {
      this.shippingCost = 50;
    }
    for (let cart of this.cartItems) {
      if (cart.productsoil == 'WITH SOIL') {
        if (cart.productcount > 6) {
          this.shippingSoilCost = 200;
        } else if (cart.productcount <= 6 && cart.productcount >= 4) {
          this.shippingSoilCost = 150;
        } else {
          this.shippingSoilCost = 100;
        }
      }
    }
    this.subtotal = this.cartItems.reduce((sum, item) => sum + item.producttotal, 0);
    //this.total = this.subtotal + this.shippingCost + this.shippingSoilCost;
    this.total = this.subtotal;
  }

  updateQuantity(item: CartDetails, event: any) {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      this.componentsService.updateCartItemQuantity(item, quantity);
    }
  }

  removeItem(item: CartDetails) {
    this.componentsService.removeFromCart(item);
  }

  clearCart() {
    this.showClearConfirm = true;
  }

  confirmClearCart() {
    this.clearCartInternal();
    this.showClearConfirm = false;
  }

  cancelClearCart() {
    this.showClearConfirm = false;
  }

  validateName() {
    const name = this.customerName.trim();
    if (!name) {
      this.nameError = 'Name is required';
    } else if (name.length < 2) {
      this.nameError = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      this.nameError = 'Name can only contain letters and spaces';
    } else {
      this.nameError = '';
    }
  }

  validateEmail() {
    const email = this.email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      this.emailError = 'Email is required';
    } else if (!emailPattern.test(email)) {
      this.emailError = 'Please enter a valid email address';
    } else {
      this.emailError = '';
    }
  }

  validatePhone() {
    const phone = this.phone.trim();
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phone) {
      this.phoneError = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
      this.phoneError = 'Please enter a valid 10-digit phone number';
    } else {
      this.phoneError = '';
    }
  }

  validateAddress() {
    const address = this.address.trim();
    if (!address) {
      this.addressError = 'Address is required';
    } else if (address.length < 10) {
      this.addressError = 'Please enter a complete address';
    } else {
      this.addressError = '';
    }
  }

  validateCity() {
    const city = this.city.trim();
    if (!city) {
      this.cityError = 'City is required';
    } else if (!/^[a-zA-Z\s]+$/.test(city)) {
      this.cityError = 'City can only contain letters and spaces';
    } else {
      this.cityError = '';
    }
  }

  validateState() {
    const state = this.state.trim();
    if (!state) {
      this.stateError = 'State is required';
    } else if (!/^[a-zA-Z\s]+$/.test(state)) {
      this.stateError = 'State can only contain letters and spaces';
    } else {
      this.stateError = '';
    }
  }

  validatePincode() {
    const pincode = this.pincode.trim();
    const pincodePattern = /^[1-9]\d{5}$/;
    if (!pincode) {
      this.pincodeError = 'Pincode is required';
    } else if (!pincodePattern.test(pincode)) {
      this.pincodeError = 'Please enter a valid 6-digit pincode';
    } else {
      this.pincodeError = '';
    }
  }

  isFormValid(): boolean {
    // Run all validations
    this.validateName();
    this.validateEmail();
    this.validatePhone();
    this.validateAddress();
    this.validateCity();
    this.validateState();
    this.validatePincode();

    // Check if any errors exist
    return (
      !this.nameError &&
      !this.emailError &&
      !this.phoneError &&
      !this.addressError &&
      !this.cityError &&
      !this.stateError &&
      !this.pincodeError &&
      this.customerName.trim() !== '' &&
      this.email.trim() !== '' &&
      this.phone.trim() !== '' &&
      this.address.trim() !== '' &&
      this.city.trim() !== '' &&
      this.state.trim() !== '' &&
      this.pincode.trim() !== ''
    );
  }

  downloadPDF() {
    if (!this.isFormValid()) {
      return;
    }
    fetch('/calc-price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: this.cartItems.map((item) => ({
          id: item.productid,
          qty: item.productcount,
          diam: item.productsize ?? 0,
          pot: item.productpotsize ?? 0,
          soil: item.productsoil ?? 0,
        })),
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || 'Server error');
        }
        return res.json();
      })
      .then((data) => {
        console.log('✅ Server response:', data);
        this.updateCartItemsFromServer(data.products);
        this.createAndDownloadPDF();
      })
      .catch((err) => {
        console.error('❌ Price calc failed:', err.message);
      });
  }

  private updateCartItemsFromServer(serverProducts: any[]) {
    const serverMap = new Map(serverProducts.map((p) => [p.productid, p]));

    this.cartItems = this.cartItems.map((item) => {
      const serverItem = serverMap.get(item.productid);

      if (!serverItem) {
        return item; // fallback safety
      }

      return {
        ...item,
        productcount: serverItem.productcount,
        productprice: serverItem.productprice,
        productdisprice: serverItem.productdisprice,
        producttotal: serverItem.producttotal,
        productsize: serverItem.productsize,
      };
    });
    this.subtotal = serverMap.get('totalAmount') || this.subtotal;
    this.total = serverMap.get('totalAmount') || this.total;
  }

  private async createAndDownloadPDF() {
    // Implement checkout logic
    const orderData = {
      customerName: this.customerName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      cartItems: this.cartItems,
      subtotal: this.subtotal,
      shipping: this.shippingCost,
      shippingSoil: this.shippingSoilCost,
      total: this.total,
      Products: this.cartItems.map((item) => ({
        productid: item.productid,
        productname: item.productname,
        productsize: item.productsize,
        productpotsize: item.productpotsize,
        productsoil: item.productsoil,
        productcount: item.productcount,
        productprice: item.productprice,
        productdisprice: item.productdisprice,
        producttotal: item.producttotal,
      })),
    };

    // Load all product images as base64
    const imagePromises = this.cartItems.map((item) =>
      this.getBase64ImageFromURL(`./img/Plants/400/${item.productimg}`)
    );
    const images = await Promise.all(imagePromises);

    const doc = new jsPDF();
    /* ---------- HEADER ---------- */
    doc.setFontSize(18);
    doc.text('Order Invoice', 14, 20);

    doc.setFontSize(11);
    doc.text('Riya Orangery', 14, 28);

    /* ---------- CUSTOMER DETAILS ---------- */
    doc.setFontSize(12);
    doc.text('Customer Details', 14, 40);

    doc.setFontSize(10);
    doc.text(`Name: ${orderData.customerName}`, 14, 48);
    doc.text(`Email: ${orderData.email}`, 14, 54);
    doc.text(`Phone: ${orderData.phone}`, 14, 60);
    doc.text(
      `Address: ${orderData.address}, ${orderData.city}, ${orderData.state} - ${orderData.pincode}`,
      14,
      66,
      { maxWidth: 180 }
    );

    /* ---------- PRODUCTS TABLE ---------- */
    autoTable(doc, {
      startY: 78,
      head: [['Image', 'Product', 'Qty', 'Diameter', 'Pot', 'Soil', 'Price', 'Total']],
      body: orderData.cartItems.map((item, index) => [
        '', // Placeholder for image
        item.productname,
        item.productcount,
        item.productsize,
        item.productpotsize,
        item.productsoil,
        item.productprice,
        item.producttotal,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [34, 139, 34],
        textColor: 255,
      },
      styles: {
        fontSize: 9,
        cellPadding: 3,
        minCellHeight: 22,
      },
      columnStyles: {
        0: { cellWidth: 20, halign: 'center' }, // Image column
        1: { cellWidth: 'auto' }, // Product name
        2: { cellWidth: 15, halign: 'center' }, // Quantity
        3: { cellWidth: 20, halign: 'center' }, // Diameter
        4: { cellWidth: 15, halign: 'center' }, // Pot
        5: { cellWidth: 20, halign: 'center' }, // Soil
        6: { cellWidth: 20, halign: 'right' }, // Price
        7: { cellWidth: 25, halign: 'right' }, // Total
      },
      didDrawCell: (data: any) => {
        // Add images to the first column
        if (data.section === 'body' && data.column.index === 0) {
          const rowIndex = data.row.index;
          if (images[rowIndex]) {
            try {
              const img = images[rowIndex];
              const cellX = data.cell.x + 2;
              const cellY = data.cell.y + 2;
              const imgSize = 18;
              doc.addImage(img, 'JPEG', cellX, cellY, imgSize, imgSize);
            } catch (error) {
              console.error('Error adding image to PDF:', error);
            }
          }
        }
      },
    });

    /* ---------- PRICE SUMMARY ---------- */
    const finalY = (doc as any).lastAutoTable.finalY + 10;

    doc.setFontSize(11);
    doc.text(`Subtotal: ${orderData.subtotal}`, 140, finalY);
    //doc.text(`Shipping: ${orderData.shipping}`, 140, finalY + 6);
    //doc.text(`Shipping For Soil: ${orderData.shippingSoil}`, 140, finalY + 12);

    doc.setFontSize(12);
    doc.text(`Total: ${orderData.total}`, 140, finalY + 8);

    doc.setFontSize(11);
    doc.text(
      `Shipping charges will be shared at the time of invoicing, based on
                  quantity.`,
      14,
      finalY + 26
    );

    /* ---------- FOOTER ---------- */
    doc.setFontSize(9);
    doc.text(
      'Thank you for shopping with Riya Orangery 🌱',
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );

    /* ---------- SAVE ---------- */
    doc.save('order-invoice.pdf');
    this.clearCart();
  }

  private getBase64ImageFromURL(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg');
          resolve(dataURL);
        } else {
          reject('Canvas context not available');
        }
      };
      img.onerror = (error) => {
        console.error('Error loading image:', url, error);
        reject(error);
      };
      img.src = url;
    });
  }

  private clearCartInternal() {
    this.componentsService.clearCart();
  }

  sendPdfToWhatsApp() {
    const phoneNumber = '917373829090'; // your WhatsApp number with country code

    const message = `Hi, here is your PDF:\n`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(whatsappUrl, '_blank');
    }
  }
}
