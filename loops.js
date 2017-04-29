function doWhileLoop(arr)
{
  do {
    arr.pop();
  } while (maybeTrue() && arr.length > 0);
  return arr;
  
}

function whileLoop(n)
{
  while(n >= 1){
    console.log(n--);
  }
  return 'done';
}

function forLoop(arr)
{
  for(var i = 1; i<= 25;i++){
    if(i === 1){
      arr.push(`I am ${i} strange loop.`)
    }
    else{
      arr.push(`I am ${i} strange loops`)
    }
  }
  return arr;
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}