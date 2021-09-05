import { partial } from "./lib.mjs";

let delayTenMs = partial(setTimeout, undefined, 10);

delayTenMs(() => {
  console.log("do y task!");
});


