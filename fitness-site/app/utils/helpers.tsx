export function formatString(stringToFormat: string) {
    // Split the string into words using the hyphen as a delimiter
    const words = stringToFormat.split('-');
  
    // Capitalize the first letter of each word and join them back into a string
    const formattedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return formattedString;
  }