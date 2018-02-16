function nainda(string_1, string_2, t) {
  let a; // shorter string
  let b; // longer string
  if (string_2.length < string_1.length) {
    a = string_2;
    b = string_1;
  }
  else {
    a = string_1;
    b = string_2;
  }
  const a_len = a.length;
  const b_len = b.length;
  const n = b_len - a_len + 1 + (2 * t); // total number of alignments
  let y0 = -t; // first index of b to be compared for this alignment
  let lowest_score = Infinity;
  for (let i=0; i<n; i++) {
    let x = 0; // index of a currently being compraed
    let y = y0; // index of b currently being compared
    let s = 0; // score for this alignment
    let skips = 0; // skip count for this alignment
    while (y < a_len + y0 + skips) { // go until you run out of characters in a
      if (a[x] === b[y]) { //
        x++;
        y++;
      }
      else {
        let z = 1; // add-on to y
        let match_found = false;
        while (z <= t) {
          if (a[x] === b[y+z]) { // if a skip of z results in a match
            y = y + z + 1; // set new y
            x++; // set new x
            s += z; // increase score for this alignment by z
            skips += z; // increase skip count for this alignment by z
            match_found = true;
            break;
          }
          z++;
        }
        if (match_found === false) { // the maximum number of skips has occurred with no match
          y++; // move to next y
          x++; // move to next x
          s++; // increase score for this alignment by 1
        }
      }
    }
    if (s < lowest_score) {
      lowest_score = s;
    }
    y0++; // shift alignment by 1
  }
  return (lowest_score <= t);
};
