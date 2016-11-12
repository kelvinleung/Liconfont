#!/usr/bin/env python
# coding=utf-8

import sqlite3

def init():
    with open('db.sql', 'r') as script:
        db = sqlite3.connect('db/fonts.db')
        db.executescript(script.read())
        db.commit()
        db.close()
    print('finished db init')

if __name__ == '__main__':
    init()
