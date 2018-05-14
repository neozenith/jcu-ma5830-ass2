#! /usr/local/bin/python3
import numpy as np
import pandas as pd
import scipy as sp
import matplotlib.pyplot as plt

df = pd.read_csv('./data/MA5830-ASS2-Dataset.csv')

print(df.describe())
student = df.pivot(index='subject', columns='student', values='mark')
student.plot(kind='box')
plt.show()

subject = df.pivot(index='student', columns='subject', values='mark')
subject.plot(kind='box')
plt.show()
