import { randomNumber } from "./random-utils";

export class AppStyleService {
  colors = ["red", "brown", "blue"];
  currentColor = this.colors[0];
  newStyle() {
    const random = randomNumber(0, this.colors.length - 1);
    console.log(random);
    this.currentColor = this.colors[random];
  }
}
