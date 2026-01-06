function buyNow(product, price) {
  const phone = "270693147422"; // replace with your WhatsApp number
  const text = `Hi, I want to order ${product} for R${price}.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}