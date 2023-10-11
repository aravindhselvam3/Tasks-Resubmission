class UberPriceCalculator {
    constructor(baseFare, costPerMile, bookingFee, minFare) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
      this.minFare = minFare;
    }
  
    calculatePrice(distanceInMiles) {
      if (distanceInMiles <= 0) {
        return this.minFare;
      }
  
      const price = this.baseFare + this.costPerMile * distanceInMiles + this.bookingFee;
      return Math.max(price, this.minFare);
    }
  }
  
  // Example usage of the UberPriceCalculator class
  const calculator = new UberPriceCalculator(3.0, 1.5, 2.5, 10.0);
  const distance = 5; // in miles
  
  const price = calculator.calculatePrice(distance);
  console.log(`Uber Price for ${distance} miles: $${price}`);
  