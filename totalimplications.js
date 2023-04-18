export default (cat, r1, r2, r3, r4, r5) => {
  switch (true) {
    case cat < 29:
      return r1;
    case cat < 49:
      return r2;
    case cat < 69:
      return r3;
    case cat < 89:
      return r4;
    case cat < 101:
      return r5;

    default:
      return "Error: Category value out of range.";
  }
};
