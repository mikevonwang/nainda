function nainda(string_1, string_2, t) {
  let a;
  let b;
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
  const n = b_len - a_len + 1 + (2 * t);
  let y0 = -t;
  let lowest_score = Infinity;
  for (let i=0; i<n; i++) {
    let x = 0;
    let y = y0;
    let s = 0;
    let skips = 0;
    while (y<a_len+y0+skips) {
      if (a[x] === b[y]) {
        x++;
        y++;
      }
      else {

        let z = 1;
        let match_found = false;
        while (z <= t) {
          if (a[x] === b[y+z]) {
            y = y + z + 1;
            x++;
            s += z;
            skips += 1;
            match_found = true;
            break;
          }
          z++;
        }
        if (match_found === false) {
          y++;
          x++;
          s++;
        }
      }
    }
    if (s < lowest_score) {
      lowest_score = s;
    }
    y0++;
  }
  return (lowest_score <= t);
};
