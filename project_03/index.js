async function getGitHubDetails(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Couldn't fetch details: ${res.status} ${data.message}`);
    }
    return data;
  } catch (error) {
    console.error("Error message", error.message);
  } finally {
  }
}

getGitHubDetails("axcel-designs").then((user) => console.log(user));

class KCStore {
  products = [];
  constructor(..._products) {
    this.products = _products;
  }
  add(num) {
    if (!num) throw new Error(`product needs to be added`);
    this.products.push(num);
    console.log(`product added:`, num);
    return this.products;
  }

  update(id, productUpdate) {
    const index = this.products.findIndex((p) => p.id === id);
    if (!id) return console.error(`please provide an id`);
    if (index == -1) return console.error(`product not available`);

    this.products[index] = { ...this.products[index], ...productUpdate };
    this.view();
    return this.products;
  }

  view(id) {
    if (!id) return console.log("view your product:", this.products);
    const product = this.products.find((p) => p.id === id);
    if (!product) return console.error("product not available");

    console.log("All products: ", this.products);
    return this.products;
  }

  delete(id) {
    if (!id) return console.error("product id required");

    const index = this.products.findIndex((p) => p.id === id);
    if (index == -1) return console.error("product not found");

    this.products.splice(index, 1);

    return this.view();
  }
}

const owner = new KCStore(
  { id: 1, name: "Bag", price: 30 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "socks", price: 50 },
);

owner.add({ id: 4, name: "clothes", price: 50 });
owner.update(2, { price: 400 });
owner.view();
owner.delete(3);
