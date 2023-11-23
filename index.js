class Check {
  check = false;
  constructor() {
    if (this.check !== false) {
      throw new Error("Eror");
    }
    this.check = true;
  }
}

const c = new Check();

console.log(23456, c);

const w = new Check();
