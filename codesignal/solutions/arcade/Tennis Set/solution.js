function solution(score1, score2) {
  if (score1 === 6 && score2 < 5) return true;
  if (score2 === 6 && score1 < 5) return true;
  if (score1 > 7 || score2 > 7) return false;
  if (
    (score1 === 7 && score2 < 7 && score2 >= 5) ||
    (score2 === 7 && score1 < 7 && score1 >= 5)
  )
    return true;
  return false;
}
