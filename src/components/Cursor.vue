<template>
  <div class="cursor default" ref="cursor"></div>
</template>

<script>
export default {
  name: 'WedCursor',
  mounted() {
    const cursorDefault = this.$refs.cursor
    let mouseY
    let mouseX
    const moveCursor = e => {
      if (mouseX > e.clientX) {
        mouseY = e.clientY
        mouseX = e.clientX
        cursorDefault.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(-1, 1)`
      } else if (mouseX < e.clientX) {
        mouseY = e.clientY
        mouseX = e.clientX
        cursorDefault.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      } else {
        mouseY = e.clientY
        mouseX = e.clientX
      }
    }
    window.addEventListener('mousemove', moveCursor)
  }
}
</script>

<style>
.default {
  position: absolute;
  background-image: url('@/assets/cursor/thing.gif');
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1000;
  pointer-events: none;
  user-select: none;
  left: -43px;
  top: -90px;
}
</style>
