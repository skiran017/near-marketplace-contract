import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen //to serialize our custom class before storing it on the blockchain
export class Product {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: u128; //128 bit unsigned integer
  owner: string;
  sold: u32; //32 bit unsigned integer
  public static fromPayload(payload: Product): Product {
    const product = new Product();
    product.id = payload.id;
    product.name = payload.name;
    product.description = payload.description;
    product.image = payload.image;
    product.location = payload.location;
    product.price = payload.price;
    product.owner = context.sender; //to retrive the account id; context object contains information about the transaction
    return product;
  }
  public incrementSoldAmount(): void {
    this.sold = this.sold + 1;
  }
}

export const listedProducts = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");