<template>
  <div class="modal" v-show="showToast">
    <div class="toast">
      <p>{{ msgToast }}</p>
    </div>
  </div>
</template>

<script>
import store from '../utils/store'

export default {
  name: 'toast',
  computed: {
    showToast: () => store.state.toasting,
    msgToast: () => store.state.msg
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast {
  height: 60px;
  width: 400px;
  background-color: #212121;
  border-radius: 4px;
}
.toast p {
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 60px;
}
</style>
