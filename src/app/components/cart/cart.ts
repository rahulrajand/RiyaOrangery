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
    this.total = this.subtotal + this.shippingCost + this.shippingSoilCost;
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
    if (confirm('Are you sure you want to clear your cart?')) {
      this.componentsService.clearCart();
    }
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
      alert('Please fix all validation errors before proceeding to checkout.');
      return;
    }
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
      head: [['Product', 'Quantity', 'Plant Diameter', 'Pot size', 'Soil', 'Price', 'Total']],
      body: orderData.cartItems.map((item) => [
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
        fontSize: 10,
      },
    });

    /* ---------- PRICE SUMMARY ---------- */
    const finalY = (doc as any).lastAutoTable.finalY + 10;

    doc.setFontSize(11);
    doc.text(`Subtotal: ${orderData.subtotal}`, 140, finalY);
    doc.text(`Shipping: ${orderData.shipping}`, 140, finalY + 6);
    doc.text(`Shipping For Soil: ${orderData.shippingSoil}`, 140, finalY + 6);

    doc.setFontSize(12);
    doc.text(`Total: ${orderData.total}`, 140, finalY + 14);
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

  sendPdfToWhatsApp() {
    const phoneNumber = '917373829090'; // your WhatsApp number with country code

    const message = `Hi, here is your PDF:\n`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(whatsappUrl, '_blank');
    }
  }
}
