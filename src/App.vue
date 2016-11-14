<template>
  <div id="app">
    <!--Main-顶栏-->
    <header class="main-header">
      <router-link to="/" class="logo">Liconfont</router-link>
    </header>
    <router-view></router-view>
    <toast></toast>
    <footer>
      <p>&copy 2016 LUX - Lizhi UX Team</p>
    </footer>
  </div>
</template>

<script>
const axios = require('axios')
import Toast from './components/Toast'
import GlyphList from './components/GlyphList'
import AddGlyph from './components/AddGlyph'

export default {
  name: 'app',
  data () {
    return {
      content: true
    }
  },
  components: {
    Toast,
    GlyphList,
    AddGlyph
  }
}
</script>

<style>
@font-face {
  font-family: "Lizhi";
  src: url(./assets/lizhifm.ttf) format("truetype");
}
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: #212121;
}
body {
  min-width: 800px;
  background-color: #fff;
}
input {
  display: block;
  width: 60%;
  height: 48px;
  margin: 0 auto;
  padding: 0px 16px;
  font-size: 14px;
  border: 1px solid rgba(2, 168, 244, 0.3);
  border-radius: 4px;
}
input:hover {
  border: 1px solid rgba(2, 168, 244, 0.6);
}
input:focus {
  outline: none;
  font-weight: 300;
  border: 1px solid rgba(2, 168, 244, 0.9);
}
a {
  text-decoration: none;
  cursor: pointer;
}
.btn {
  display: block;
  width: 40%;
  height: 48px;
  margin: 0 auto;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 48px;
  background-color: rgba(2, 168, 244, 0.6);
  border-radius: 4px;
  border: none;
  color: #fff;
}
.btn:hover {
  background-color: rgba(2, 168, 244, 0.8);
}
.btn:active {
  background-color: #03a9f4;
}
.main-header {
  height: 60px;
  padding: 8px 16px;
  line-height: 44px;
  background-color: #212121;
}
.search {
  margin: 40px auto;
}
.logo {
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  line-height: 44px;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
.info-container {
  margin-top: 40px;
}
.info-icon,
.info-icon span {
  text-align: center;
  font-size: 60px;
  font-weight: 800;
}
.info-strong {
  color: #cc2b2b;
}
.info-quote {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
}
footer {
  text-align: center;
  position: relative;
  border-bottom: 0;
  left: 0;
  padding: 30px 16px;
}
</style>
