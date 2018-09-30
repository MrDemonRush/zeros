module.exports = function getZerosCount(number) {
  // your implementation
  
  let i = 1;
  let result = 0;

  while( Math.trunc( number / Math.pow( 5, i ) ) ){

      result += Math.trunc( number / Math.pow( 5, i++ ) );
  }

  return result;
}

