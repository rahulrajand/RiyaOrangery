export class ProductDetails {
  constructor(
    public productid: string,
    public productname: string,
    public productlabel: string,
    public productlowprice: number,
    public producthighprice: number,
    public productprice: number[],
    public productdisc: number,
    public productrating: number,
    public frontpage: boolean,
    public productimg: string[],
    public productsize: string[],
    public productpotsize: string[],
    public description: string,
    public discount: number,
    public selected: boolean,
    public tips?: string[],
    public productsciname?: string,
    public shortDescription?: string,
    public isWishlisted: boolean = false,
    public stockAvailable: boolean = false
  ) {}
}

export class CartDetails {
  productid: string = '';
  productname: string = '';
  productsize: string = '';
  productpotsize: string = '';
  productsoil: string = '';
  productcount: number = 0;
  productimg: string = '';
  productprice: number = 0;
  productdisprice: number = 0;
  discount: number = 0;
  producttotal: number = 0;
}
