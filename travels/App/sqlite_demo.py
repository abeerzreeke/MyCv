import sqlite3

conn = sqlite3.connect('myDB.db')

c =conn.cursor()

c.execute("""CREATE TABLE cities (
            name text,
            id integer,
            img blob
            )""")

c.execute("INSERT INTO cities VALUES ('acco',2,'zzz')")
conn.commit()

c.execute("SELECT * FROM cities WHERE name='acco'")


print(c.fetchall())

conn.commit()
conn.close()