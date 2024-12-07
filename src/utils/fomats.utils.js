export default function formatIndianNumber(num)  {
    // Convert number to a string and reverse it
    let numStr = num.toString().split('').reverse().join('');
  
    // Group digits: first 3 digits, then groups of 2
    let formatted = '';
    for (let i = 0; i < numStr.length; i++) {
      if (i === 3 || (i > 3 && (i - 3) % 2 === 0)) {
        formatted += ',';
      }
      formatted += numStr[i];
    }
  
    // Reverse it back to original order
    return formatted.split('').reverse().join('');
  }
  