function digitToSegments(digit) {
  const array = [];
  switch (digit) {
    case 0:
      array.push(1, 2, 3, 4, 5, 6);
      break;
    case 1:
      array.push(2, 3);
      break;
    case 2:
      array.push(1, 2, 4, 5, 7);
      break;
    case 3:
      array.push(1, 2, 3, 4, 7);
      break;
    case 4:
      array.push(2, 3, 6, 7);
      break;
    case 5:
      array.push(1, 3, 4, 6, 7);
      break;
    case 6:
      array.push(1, 3, 4, 5, 6, 7);
      break;
    case 7:
      array.push(1, 2, 3);
      break;
    case 8:
      array.push(1, 2, 3, 4, 5, 6, 7);
      break;
    case 9:
      array.push(1, 2, 3, 4, 6, 7);
      break;
    default:
  }
  return array;
}

export default digitToSegments;
