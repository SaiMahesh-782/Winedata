function mode(data) {
    const counts = new Map();
    let maxCount = 0;
    let mode = data[0];
  
    for (const value of data) {
      const count = (counts.get(value) || 0) + 1;
      counts.set(value, count);
  
      if (count > maxCount) {
        maxCount = count;
        mode = value;
      }
    }
  
    return mode;
  }
  
  export default mode