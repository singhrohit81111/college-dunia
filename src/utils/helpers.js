export function debouncing(func, delay) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export function throtlling(func, delay) {
  let isThrottled = false;

  return function () {
    let context = this;
    let args = arguments;
    if (!isThrottled) {
      func.apply(context, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled(false);
      }, delay);
    }
  };
}
