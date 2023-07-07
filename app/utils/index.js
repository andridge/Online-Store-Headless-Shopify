export async function storeFront(query, variables = {}) {
    const response = await fetch(process.env.PUBLIC_STORE_DOMAIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.PUBLIC_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    return response.json();
  }