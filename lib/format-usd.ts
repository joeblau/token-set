export function formatUSD(value: number): string {
  // Handle numbers greater than 0.01 or less than -0.01
  if (value > 0.01 || value < -0.01) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  // Format with 18 decimal places
  const str = Math.abs(value).toFixed(18);

  // Split the string by decimal point
  const parts = str.split(".");
  if (parts.length !== 2) return `${value < 0 ? "-" : ""}$${str}`;

  const fractionalPart = parts[1];

  // Count leading zeros
  let zeroCount = 0;
  for (const char of fractionalPart) {
    if (char === "0") {
      zeroCount++;
    } else {
      break;
    }
  }

  // If all digits are zeros, return $0.00
  if (zeroCount === fractionalPart.length) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(0);
  }

  // Define subscript numbers mapping
  const subscriptNumbers: { [key: string]: string } = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
  };

  // Convert zero count to subscript
  const subscriptString = zeroCount
    .toString()
    .split("")
    .map((digit) => subscriptNumbers[digit])
    .join("");

  // Get the remaining fraction (first 2 digits after zeros)
  const remainingFraction = fractionalPart.slice(zeroCount).slice(0, 2);

  // Return formatted string with negative sign if needed
  return `${value < 0 ? "-" : ""}$0.0${subscriptString}${remainingFraction}`;
}
