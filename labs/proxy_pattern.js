class CountryAPI {
  fetchCountries() {
    console.log("Fetching countries from database/API...");
    return ["Egypt", "USA", "Japan", "Brazil"];
  }
}

class CountryProxy {
  constructor() {
    this.api = new CountryAPI();
    this.cache = null;
  }

  getCountries() {
    if (!this.cache) {
      this.cache = this.api.fetchCountries();
    } else {
      console.log("Returning countries from cache...");
    }
    return this.cache;
  }
}

const proxy = new CountryProxy();
console.log(proxy.getCountries());
console.log(proxy.getCountries());
