const loop0UpTo10 = () => {
  for(let i=0;i<10;i++){
    console.log(i)
  }
};

const loop5to10 = () => {
  for(let i=5;i<=10;i++){
    console.log(i)
  }
};

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for(let i=0;i<10;i+=2){
    console.log(i)
  }
};

const countdown5to0 = () => {
  for(let i=5;i>=0;i--){
    console.log(i)
  }
};

const loopUpToNum = (num) => {
  for(let i=0;i<num;i+=1){
    console.log(i)
  }

};

const fizzbuzz = () => {
  for(let i=1;i<=100;i++){
    i%3==0?
      i%5==0?
        console.log('fizzbuzz'):
    console.log('fizz'):
    i%5==0?
      console.log('buzz'):console.log(i)
  }
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
