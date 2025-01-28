import { ShopifyData } from "../shopify";

export async function getProductsInHomePage() {
  const query = `
   {
  
    collectionByHandle(handle: "frontpage"){
      products(first: 25) {
          edges {
            node {
              totalInventory
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
    }
  }
  
  
  `;

  const response = await ShopifyData(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `
    
      {
      products(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle: string) {
  const query = `
    {
    
      productByHandle(handle: "${handle}") {
          collections(first: 1) {
            edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    images(first: 5) {
                      edges {
                        node {
                          originalSrc
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          }
        id
        title
        handle
        totalInventory
        metafields(identifiers: {namespace: "custom", key: "strikethroughprice"}) {
          id
          key
          namespace
          value
        }
        productType
        descriptionHtml
        description
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 25) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  
  
  
  `;

  const response = await ShopifyData(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}
