/*Please add ; after each select statement*/ CREATE PROCEDURE solution () BEGIN
select
  name
from
  leaderboard
order by
  score desc
limit
  5
offset
  3;

END
