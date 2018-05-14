#! /usr/local/bin/python3
import numpy as np
import pandas as pd
import scipy as sp
import matplotlib.pyplot as plt

df = pd.read_csv('./data/MA5830-ASS2-Dataset.csv', index_col=[0,1])

print(df.describe())
fig, axes = plt.subplots(nrows=2, ncols=1)

df.plot(ax=axes[0], kind='box')
df.plot(ax=axes[1], kind='kde')
plt.show()
