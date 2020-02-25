export default function currency(value, currencySymbol) {
  value = parseFloat(value)

  const isInvalidNumber = !isFinite(value) || (!value && value !== 0);

  if (isInvalidNumber)
    return '';

  currencySymbol = currencySymbol || '$';

  const signStr = value < 0 ? '-' : '';
  const integerStr = Math.floor(Math.abs(value)).toString();
  const leadingDigitCount = integerStr.length % 3;
  const leadingDigits = integerStr.slice(0, leadingDigitCount);
  const separator = integerStr.length > 3 ? ',' : '';
  const leadingDigitStr = leadingDigitCount > 0 ? leadingDigits + separator : '';
  const digitsRegExp = /(\d{3})(?=\d)/g;
  const followingDigitStr = integerStr.slice(leadingDigitCount).replace(digitsRegExp, '$1,');
  const decimalFraction = Math.abs(parseInt((value * 100) % 100, 10));
  const decimalFractionStr = decimalFraction < 10 ? ('0' + decimalFraction) : decimalFraction;
  const currencyStr = `${signStr}${currencySymbol}${leadingDigitStr}${followingDigitStr}.${decimalFractionStr}`;

  return currencyStr;
}    
