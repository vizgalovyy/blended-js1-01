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

//task-03

function getDeliveryPrice(deliveryType) {
  switch (deliveryType) {
    case 'pickup':
      return 0;
    case 'standard':
      return 80;
    case 'express':
      return 150;
    default:
      return -1;
  }
}

console.log(getDeliveryPrice('pickup')); // 0
console.log(getDeliveryPrice('standard')); // 80
console.log(getDeliveryPrice('express')); // 150
console.log(getDeliveryPrice('drone')); // -1

//task-04
function showPackingProgress(quantity) {
  if (quantity <= 0) {
    return console.log('Немає товарів для пакування');
  }
  for (let i = 1; i <= quantity; i += 1) {
    console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

showPackingProgress(3);
showPackingProgress(1);
showPackingProgress(0);

//task-05
function createOrderSummary(
  productName,
  price,
  quantity,
  isPremium,
  deliveryType
) {
  const subtotal = calculateSubtotal(price, quantity);
  if (subtotal <= 0) {
    return 'Замовлення неможливо оформити';
  }
  const discount = calculateDiscount(subtotal, isPremium);
  const delivery = getDeliveryPrice(deliveryType);
  if (delivery < 0) {
    return 'Невідомий спосіб доставки';
  }
  const finalSum = subtotal - discount + delivery;
  showPackingProgress(quantity);
  return `Товар: ${productName}. Кількість: ${quantity}. До сплати: ${finalSum} грн.`;
}

console.log(createOrderSummary('Навушники', 250, 4, true, 'standard'));
// Товар: Навушники. Кількість: 4. До сплати: 980 грн.

console.log(createOrderSummary('Клавіатура', 800, 1, true, 'pickup'));
// Товар: Клавіатура. Кількість: 1. До сплати: 760 грн.

console.log(createOrderSummary('Миша', 500, 0, false, 'express'));
// Замовлення неможливо оформити

console.log(createOrderSummary('Монітор', 5000, 1, false, 'drone'));
// Невідомий спосіб доставки
