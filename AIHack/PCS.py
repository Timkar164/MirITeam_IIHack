import os
import main
import multiplication

import pandas

taxes = (
    "ML (AI)",
    "AR",
    "Аналитик данных",
    "Распределённые системы",
    "Геймдизайнер",
    "Образовательный дата-инженер"
)

if __name__ == '__main__':

    print("Выберите таксономию:\n")
    for i in range(len(taxes)):
        print(str(i) + " - " + taxes[i])

    t = int(input())

    if taxes[t] in ("AR", "Аналитик данных", "Распределённые системы", "Геймдизайнер", "Образовательный дата-инженер"):
        table = pandas.read_excel("./Таксономии на основе анализа рынка труда.xlsx", sheet_name=taxes[t])
        table = pandas.DataFrame(table)

        keys, values = tuple(table["TaxLevelName2"]), tuple(table["%"])

        words = dict()
        for i in range(5):
            words.setdefault(keys[i], values[i])
    else:
        table = pandas.read_excel("./Таксономии на основе анализа рынка труда.xlsx", sheet_name="ML (AI)")
        table = pandas.DataFrame(table)

        keys, values = tuple(table["Уровень таксономии2"]), tuple(table["%"])

        words = dict()
        for i in range(5):
            words.setdefault(keys[i], values[i])

    for file in os.listdir("./Программы ПЦС 2020"):

        if file.find(".docx") == -1 or file.find("~$") != -1:
            continue

        f = os.path.abspath("Программы ПЦС 2020/" + file)
        print("Percent: " + str(main.get_value(f, words)) + ", Float: " + str(multiplication.get_value(f, words)))
