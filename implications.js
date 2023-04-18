export default ( cat, r1, r2, r3, r4, r5 ) => {
    switch (true) {
      case cat < 1:
        return r1;
      case cat < 2:
        return r2;
      case cat < 3:
        return r3;
      case cat < 4:
        return r4;
      case cat < 5:
        return r5;
        case cat < 6:
            return r5;
      default:
        return "Error: Category value out of range.";
    }
  };
  
  