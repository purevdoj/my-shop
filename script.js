async function checkout(name, price) {
  const response = await fetch(“/create-checkout-session”, {
    method: “POST”,
    headers: { “Content-Type”: “application/json” },
    body: JSON.stringify({ items: [{ name, price, quantity: 1 }] })
  });
  const data = await response.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert(data.error || “Checkout error”);
  }
}
