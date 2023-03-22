const solution = sizes => {
  const newSizes = sizes.map(size => {
    const [horizon, vertical] = size;

    return horizon > vertical ? [horizon, vertical] : [vertical, horizon];
  });

  let maxHorizon = 0;
  let maxVertical = 0;
  newSizes.forEach(size => {
    const [horizon, vertical] = size;

    if (horizon > maxHorizon) maxHorizon = horizon;
    if (vertical > maxVertical) maxVertical = vertical;
  });

  return maxHorizon * maxVertical;
};
