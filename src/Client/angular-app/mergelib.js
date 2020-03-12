const concat = require("concat");
const files = [
  "./dist/angular-app/runtime-es5.js",
  "./dist/angular-app/polyfills-es5.js",
  "./dist/angular-app/scripts.js",
  "./dist/angular-app/main-es5.js"
];

concat(files, "../../../build/Body2/angularCard.js");
console.log("File Generated");
