/*
 * ex01_Heritage3ctr.js
 */
class Ex01_MiniCalc {
  constructor(par1, par2, par3) {
    this.prop1 = par1;
    this.prop2 = par2;
    this.prop3 = par3; // J'exige que ce soit etre une string
  }

  addition() {
    return this.prop1 + this.prop2;
  }

  soustraction() {
    return this.prop1 - this.prop2;
  }
}

class Ex01_MultiCalc extends Ex01_MiniCalc {
  constructor(par1, par2, par3) {
    super(par1, par2, par3);
  }

  multiplication() {
    return this.prop1 * this.prop2;
  }
}

class Ex01_DiviCalc extends Ex01_MultiCalc {
  constructor(par1, par2, par3) {
    super(par1, par2, par3);
  }

  division() {
    return this.prop1 / this.prop2;
  }
}
