function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {

    result = func.call(this, ...args);
    let hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash == hash);

    if (idx !== -1) {

      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {

      if (cache.length > 5) {
        cache.shift();
      }

      cache.push({
        'hash': hash,
        'value': result,
      });


      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }


  }
  return wrapper
}


function debounceDecoratorNew(func, ms) {
  let flag = false;
  function wrapper(...args) {
    if (flag) {
      return func.call(this, ...args)
    }
    flag = true;
    setTimeout(() => {
      flag = false;
      func.call(this, ...args);
    }, ms)
  }
  return wrapper
}

function debounceDecorator2(debounceDecoratorNew) {

  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    return func.call(this, ...args)
  }

  return wrapper
}

