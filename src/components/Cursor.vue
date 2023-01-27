<template>
  <div class="cursor default" ref="cursor"></div>
</template>

<script>
export default {
  name: 'WedCursor',
  mounted() {
    const cursorDefault = this.$refs.cursor
    const moveCursor = e => {
      const mouseY = e.clientY
      const mouseX = e.clientX
      cursorDefault.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
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
