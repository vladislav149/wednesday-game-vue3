<template>
  <div ref="cursor" class="cursor">
    <div ref="cursorDefault" class="default"></div>
  </div>
</template>

<script>
export default {
  name: 'WedCursor',
  mounted() {
    const cursorDefault = this.$refs.cursorDefault
    const cursor = this.$refs.cursor
    let mouseY = 0
    let mouseX = 0
    const moveCursor = e => {
      const updateMousePos = () => {
        mouseY = e.clientY
        mouseX = e.clientX
      }

      if (mouseX > e.clientX) {
        updateMousePos()
        cursorDefault.style.transform = `scale(-1, 1)`
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      } else if (mouseX < e.clientX) {
        updateMousePos()
        cursorDefault.style.transform = ''
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      } else {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        updateMousePos()
      }
    }
    window.addEventListener('mousemove', moveCursor)
  }
}
</script>

<style>
.cursor {
  position: absolute;
  z-index: 1001;
}
.default {
  position: absolute;
  left: -43px;
  top: -90px;
  width: 100px;
  height: 100px;
  background-image: url('@/assets/cursor/thing.gif');
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  user-select: none;
  transition: transform 0.8s;
}
</style>
