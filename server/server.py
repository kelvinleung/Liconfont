#!/usr/bin/env python
# coding=utf-8

from flask import Flask, make_response, g, jsonify, request
import os, sqlite3

app = Flask(__name__)
app.config['DATABASE'] = os.path.join(app.root_path, 'db/fonts.db')
app.config['GLYPHSPATH'] = os.path.join(app.root_path, 'db/glyphs.json')
API_URL = '/api/v1/'

def get_db():
    if not hasattr(g, 'fonts_db'):
        g.fonts_db = sqlite3.connect(app.config['DATABASE'])
        g.fonts_db.row_factory = sqlite3.Row
    return g.fonts_db

@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'fonts_db'):
        g.fonts_db.close()

# ----------------------------------------
# Here's the api
# ----------------------------------------
@app.route(API_URL + 'getGlyphList', methods=['GET'])
def get_glyphlist():
    db = get_db()
    cur = db.execute('SELECT * FROM glyphs')
    rows = cur.fetchall()
    return jsonify([dict(row) for row in rows])

@app.route(API_URL + 'addGlyph', methods=['POST'])
def add_glyph():
    db = get_db()
    name = request.form['name']
    code = request.form['code']
    tags = request.form['tags']
    db.execute('INSERT INTO glyphs VALUES (?, ?, ?)', [name, code, tags])
    db.commit()
    return 'done!'

@app.route(API_URL + 'getGlyph')
def get_glyph():
    pass

@app.route(API_URL + 'editGlyph')
def edit_glyph():
    pass

# ----------------------------------------
# Here we go!
# ----------------------------------------
if __name__ == '__main__':
    app.run(debug=True)
