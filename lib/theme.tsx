
export function getTheme(): string {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
  
    if (currentMonth === 9) { // October (months are zero-based, so October is 9)
      return "halloween";
    } else if (currentMonth === 11) { // December (months are zero-based, so December is 11)
      return "winter";
    } else {
      return "normal";
    }
  }
  
