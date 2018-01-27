const Calculate = {
  factorial(num){
    if(num === 0){
      return 1;
    }
    return num * Calculate.factorial(num - 1);
  },
}

module.exports = Calculate;
