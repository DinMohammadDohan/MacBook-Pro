// get best price value
function bestCost() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceNum = parseInt(bestPriceText);
    return bestPriceNum;

}

// get memory cost value
function memoryCost() {
    const memoryPrice = document.getElementById('memory-cost');
    const memoryPriceText = memoryPrice.innerText;
    const memoryPriceNum = parseInt(memoryPriceText);
    return memoryPriceNum;
}

// get storage cost value
function storageCost() {
    const storagePrice = document.getElementById('storage-cost');
    const storagePriceText = storagePrice.innerText;
    const storagePriceNum = parseInt(storagePriceText);
    return storagePriceNum;
}

// get delivery charged cost value
function deliveryCost() {
    const deliveryPrice = document.getElementById('delivery-cost');
    const deliveryPriceText = deliveryPrice.innerText;
    const deliveryPriceNum = parseInt(deliveryPriceText);
    return deliveryPriceNum;
}

// update cost with event
function updateCost(costId, price) {
    const cost = document.getElementById(costId);
    cost.innerText = price;
}

// get total calculation
function totalProductPrice() {
    const bestPrice = bestCost();
    const memoryPrice = memoryCost();
    const storagePrice = storageCost();
    const deliveryCharge = deliveryCost();
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    document.getElementById('sub-total-price').innerText = totalPrice;
    const totalPriceSpan = document.getElementById('total-price');
    totalPriceSpan.innerText = totalPrice;
}

// Promo Code For Discount Section
document.getElementById('apply').onclick = function () {

    const subTotalText = document.getElementById('sub-total-price').innerText;
    const subTotalNum = parseInt(subTotalText);
    const totalPriceSpan = document.getElementById('total-price');
    const totalPriceText = totalPriceSpan.innerText;
    const totalPriceNum = parseInt(totalPriceText);
    const promoCodeInput = document.getElementById('promo-code');
    if (promoCodeInput.value == 'stevekaku') {
        const tweentyPercentTaka = 20 / 100 * subTotalNum;
        const lastPrice = subTotalNum - tweentyPercentTaka;
        totalPriceSpan.innerText = lastPrice;
    }
    promoCodeInput.value = '';
}

// add event listener on buttons
document.getElementById('8gb-memory').addEventListener('click', function () {
    updateCost('memory-cost', 0);
    totalProductPrice();
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    updateCost('memory-cost', 180);
    totalProductPrice();
})

document.getElementById('256gb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 0);
    totalProductPrice();
})

document.getElementById('512gb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 100);
    totalProductPrice();
})

document.getElementById('1tb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 180);
    totalProductPrice();
})

document.getElementById('free-charge').addEventListener('click', function () {
    updateCost('delivery-cost', 0);
    totalProductPrice();
})

document.getElementById('delivery-charge').addEventListener('click', function () {
    updateCost('delivery-cost', 20);
    totalProductPrice();
});
