const findLongest = (array) =>
  array.reduce((res, curr) =>
    String(res).length < String(curr).length ? curr : res
  );
