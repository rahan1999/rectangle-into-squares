const sqInRect = () => {
  let a = parseInt(window.prompt("Provide the first side"));
  let b = parseInt(window.prompt("Provide the second side"));
  let base;
  let baseBuffer;
  let side;
  let sideBuffer;
  let sumOfSquares = a * b;
  let result = [];

  if (a == b) {
    console.log(`There is only one rectangle with side size of ${a}`);
    return;
  } else {
    if (a < b) {
      base = b;
      side = a;
    } else {
      base = a;
      side = b;
    }
  }

  while (sumOfSquares > 0) {
    if (side * side > sumOfSquares) {
      side = side - 1;
    } else {
      result.push(side);
      sumOfSquares = sumOfSquares - side * side;

      base = base - side;

      baseBuffer = base;
      sideBuffer = side;
      if (side > base) {
        base = sideBuffer;
        side = baseBuffer;
      }
    }
  }

  console.log(`There is ${result.length} squers in provided rectangle`);
  console.log(`Their side sizes are: ${result}`);
};

sqInRect();
