<template>
  <div class="container add-glyph-container">
    <div class="preview">
      <p>{{ previewGlyph }}</p>
    </div>
    <input v-model="newName" v-focus placeholder="icon 名称">
    <input v-model="newCode" placeholder="icon 编码，上方可以预览">
    <input v-model="newTags" placeholder="标签，以英文逗号隔开">
    <a class="btn btn-save" @click="addNewGlyph">保存</a>
  </div>
</template>

<script>
const axios = require('axios')
import store from '../utils/store'
export default {
  name: 'addGlyph',
  data () {
    return {
      newName: '',
      newCode: '',
      newTags: ''
    }
  },
  computed: {
    previewGlyph: function () {
      if (this.newCode.length > 0) {
        let char = '\\u' + this.newCode
        return unescape(char.replace(/\\(u[0-9a-fA-F])/gm, '%$1'))
      }
      return ''
    }
  },
  methods: {
    addNewGlyph: function () {
      let that = this
      var data = new FormData()
      data.append("name", this.newName)
      data.append("code", this.newCode)
      data.append("tags", this.newTags)
      axios.post('/api/v1/addGlyph', data).then((response) => {
        console.log('sent')
        that.$router.replace('/add')
        that.resetData()
        store.commit('switchToast', '添加成功！')
        setTimeout(() => store.commit('switchToast', ''), 1000)
      })
    },
    resetData: function () {
      this.newName = ''
      this.newCode = ''
      this.newTags = ''
    }
  }
}
</script>

<style scoped>
input {
  margin: 16px auto;
  width: 400px;
}
.btn-save {
  margin: 60px auto;
  width: 300px;
}
.add-glyph-container {
  padding-top: 80px;
  min-height: 800px;
}
.preview {
  height: 300px;
  width: 300px;
  margin: 0 auto 60px auto;
  border: 1px dashed rgba(2, 168, 244, 0.6);
  border-radius: 10px;
  line-height: 298px;
}
.preview p {
  color: #cc2b2b;
  font-family: 'Lizhi', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  font-size: 60px;
  text-align: center;
}
</style>
