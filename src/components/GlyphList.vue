<template>
  <div>
    <div class="container info-container">
      <p class="info-icon"><span class="info-strong">Li</span>confont</p>
      <p class="info-quote">已收录 108 个 icon，供荔枝所有项目按需使用，点击可复制</p>
      <div class="search">
        <input v-model="keyWord" v-focus placeholder="输入名称查找">
      </div>
      <router-link to="/add" class="btn btn-add">添加 icon</router-link>
    </div>
    <div class="container glyphlist-container">
      <div v-for="g in glyphs" class="glyph-container" @click="copyGlyph(toGlyph(g.code))">
        <p class="glyph">{{ toGlyph(g.code) }}</p>
        <p class="glyph-name">{{ g.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
import store from '../utils/store'
import toClipboard from '../utils/clipboard'

export default {
  name: 'glyphList',
  data () {
    return {
      keyWord: '',
      glyphList: []
    }
  },
  computed: {
    glyphs: function () {
      if (this.keyWord == '') {
        return this.glyphList
      }
      var result = []
      var that = this
      this.glyphList.forEach(function (value) {
        if (value.name.indexOf(that.keyWord) > -1) {
          result.push(value)
        }
      })
      return result
    }
  },
  methods: {
    copyGlyph: function (text) {
      toClipboard(text)
      store.commit('switchToast', '复制成功！')
      setTimeout(() => store.commit('switchToast', ''), 1000)
    },
    toGlyph: function (code) {
      let char = '\\u' + code
      return unescape(char.replace(/\\(u[0-9a-fA-F])/gm, '%$1'))
    },
    fetchData: function () {
      axios.get('/api/v1/getGlyphList').then(
        (response) => {
          this.glyphList = response.data
          console.log('Hooray!')
        },
        (response) => console.log('load glyphs error')
      )
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
.btn-add {
  width: 300px;
  margin: 16px auto;
  background-color: rgba(2, 168, 244, 0.1);
  color: #03a9f4;
}
.btn-add:hover {
  background-color: rgba(2, 168, 244, 0.8);
  color: #fff;
}
.btn-add:active {
  background-color: #03a9f4;
}
.glyphlist-container {
  min-height: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}
.glyph-container {
  width: 160px;
  padding: 16px;
  margin-bottom: 48px;
  display: inline-block;
  border-radius: 4px;
}
.glyph {
  color: #03a9f4;
  font-family: 'Lizhi', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  font-size: 60px;
}
.glyph-container:hover {
  background-color: rgba(2, 168, 244, 0.05);
  cursor: pointer;
}
.glyph-container:hover .glyph {
  color: #cc2b2b;
}
.glyph-container:hover .glyph-name {
  font-weight: 400;
}
.glyph-name {
  text-align: center;
  font-size: 14px;
  margin-top: 12px;
}
</style>
