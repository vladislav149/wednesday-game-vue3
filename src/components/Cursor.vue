<template>
  <div ref="cursor" class="cursor">
    <div ref="cursorDefault" class="default"></div>
  </div>
</template>

<script>
export default {
  name: 'WedCursor',
  data() {
    return {
      moveCursor: null,
      delayCursor: 2000,
      intervalTime: 99,
      updateOpacityStep: 0.1
    }
  },
  mounted() {
    let checkStopCursor
    const {cursorDefault, cursor} = this.$refs
    let mouseY = 0
    let mouseX = 0
    this.moveCursor = e => {
      const ts = Date.now()
      clearTimeout(checkStopCursor)
      cursor.style.opacity = 1
      checkStopCursor = setInterval(() => {
        if (Date.now() - ts > this.delayCursor) {
          cursor.style.opacity > 0
            ? (cursor.style.opacity =
                cursor.style.opacity - this.updateOpacityStep)
            : false
        }
      }, this.intervalTime)
      const updateMousePos = () => {
        mouseY = e.clientY
        mouseX = e.clientX
      }

      if (mouseX > e.clientX) {
        updateMousePos()
        cursorDefault.style.transform = 'scale(-1, 1)'
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
    window.addEventListener('mousemove', this.moveCursor)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.moveCursor)
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
