function solution(t, p) {
  const len = p.length;

  let count = 0;
  for (let i = 0; i + len <= t.length; i++) {
		if (parseInt(t.slice(i, i + len)) <= parseInt(p))
			count += 1;
	}
  return count;
}