const deepCopy = target => {
  if (Array.isArray(target)) {
    return target.slice().map(deepCopy);
  } else if (target !== null && typeof target === 'object') {
    const newObject = {};

    for (let key in target) {
      newObject[key] = deepCopy(target[key]);
    }

    return newObject;
  } else {
    return target;
  }
};
