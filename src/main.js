//task-01
function calculateSubtotal(price, quantity) {
  if (price <= 0 || quantity <= 0) {
    return 0;
  }

  return price * quantity;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0

//task-02

function calculateDiscount(subtotal, isPremium) {
  if (subtotal >= 1000 && isPremium) {
    return subtotal * 0.1;
  } else if (subtotal > 0 && isPremium) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
}

console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0
