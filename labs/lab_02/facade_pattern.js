class InventoryManager {
  checkStock(productId) {
    console.log(`Checking stock for ${productId}... Available.`);
    return true;
  }
}

class PaymentManager {
  processPayment(userId, amount) {
    console.log(
      `Processing payment of $${amount} for user ${userId}... Success.`,
    );
    return true;
  }
}

class ShippingManager {
  createShipment(productId, userId) {
    console.log(
      `Preparing shipment of ${productId} to user ${userId}... Shipped!`,
    );
  }
}

class OnlineStoreFacade {
  constructor() {
    this.inventory = new InventoryManager();
    this.payment = new PaymentManager();
    this.shipping = new ShippingManager();
  }

  purchaseItem(productId, userId, amount) {
    console.log("--- Starting Order Process ---");
    if (this.inventory.checkStock(productId)) {
      if (this.payment.processPayment(userId, amount)) {
        this.shipping.createShipment(productId, userId);
        return "Order completed successfully.";
      }
    }
    return "Order failed.";
  }
}

const store = new OnlineStoreFacade();
console.log(store.purchaseItem("Laptop-X", "User123", 1200));
