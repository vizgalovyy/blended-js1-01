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
