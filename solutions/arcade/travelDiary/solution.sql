CREATE PROCEDURE solution () BEGIN
SELECT
  GROUP_CONCAT (
    DISTINCT country
    ORDER BY
      country ASC SEPARATOR ';'
  ) as countries
FROM
  diary;

END
