import pandas

table = pandas.read_excel("./Рефлексия_ПЦС-2020.xls", sheet_name="TableData")
table = pandas.DataFrame(table)

reflection = dict()

for i in range(len(table["COURSE_ID"])):
    positive = (("хорош" in table["REFLEXION_1"][i])
                or
                ("хорош" in table["REFLEXION_2"][i])
                or
                ("хорош" in table["REFLEXION_3"][i])
                or
                ("отлич" in table["REFLEXION_1"][i])
                or
                ("отлич" in table["REFLEXION_2"][i])
                or
                ("отлич" in table["REFLEXION_3"][i])
                or
                ("приятн" in table["REFLEXION_1"][i])
                or
                ("приятн" in table["REFLEXION_2"][i])
                or
                ("приятн" in table["REFLEXION_3"][i])
                or
                ("помог" in table["REFLEXION_1"][i])
                or
                ("помог" in table["REFLEXION_2"][i])
                or
                ("помог" in table["REFLEXION_3"][i])
                or
                ("нрав" in table["REFLEXION_1"][i])
                or
                ("нрав" in table["REFLEXION_2"][i])
                or
                ("нрав" in table["REFLEXION_3"][i])
                )

    if table["COURSE_ID"][i] not in reflection:
        reflection[table["COURSE_ID"][i]] = (0, 0, 0)

    tmp = reflection[table["COURSE_ID"][i]]

    reflection[table["COURSE_ID"][i]] = (tmp[0] + (1 if positive else 0), tmp[1] + 1, (tmp[0] + (1 if positive else 0)) / (tmp[1] + 1) * 100)

print(reflection)
