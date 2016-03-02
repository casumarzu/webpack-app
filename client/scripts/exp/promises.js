const wait = (time) => {
  return new Promise(
    (resolve, reject)=> {
      setTimeout(resolve, time);
    }
  );
}

wait(3000).then(()=> console.log('wait yo!'));

wait(1000).then(()=> {
  console.log('step 1!');
  return wait(3000);
}).then(()=> {
  console.log('step 2!');
  return wait(2000);
}).then(()=> console.log('step 3!'));
