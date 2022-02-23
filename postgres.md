* Check out GiST and GIN index Types [here](https://www.postgresql.org/docs/9.1/textsearch-indexes.html#:~:text=For%20dynamic%20data%2C%20GiST%20indexes,but%20are%20slower%20to%20update.)
    * one method handles 100,000 and less lexemes and the other handles 100,000+ lexemes, but updates more slowly
* Postgres-Hstore vs JSON vs JSONB [here](https://www.citusdata.com/blog/2016/07/14/choosing-nosql-hstore-json-jsonb/)
    * it seems like JSONB is the best solution. That's what we'll go with today
* I learned about pagination in sqlAlchemy. This seems great when the results from the query are huge and need to be fed to the server and/or the client in chunks.
* Timestamp
    * is the equialent of a date iso string in javascript or datetime to iso string in python.
    * do not hold timezone data. always converts to UTC before storing.
    * if no timezone is specified then the system timezone is assumed and utc is calculated off of this
    * be sure objects are timezone aware before insert into postgres database
