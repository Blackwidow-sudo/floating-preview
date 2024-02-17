<template>
  <div class="contents">
    <div
      class="contents"
      @mouseenter="onMouseEnter"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
      <slot />
    </div>
    <div
      ref="tooltip"
      v-show="hovering"
      class="absolute top-0 left-0 z-10 p-1 rounded shadow-md bg-slate-400 w-max"
      role="tooltip">
      <slot name="preview" />
    </div>
  </div>
</template>

<script>
import { computePosition, shift, flip, offset } from '@floating-ui/dom'

export default {
  name: 'PreviewTooltip',
  props: {
    openDelay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hovering: false,
      openTimeout: null
    }
  },
  methods: {
    /**
     * On mouse enter
     */
    onMouseEnter() {
      clearTimeout(this.openTimeout)

      this.openTimeout = setTimeout(() => {
        this.hovering = true
      }, this.openDelay)
    },
    /**
     * Position preview
     * 
     * @param {MouseEvent} event
     * @param {number} event.clientX
     * @param {number} event.clientY
     */
    onMouseMove({ clientX, clientY }) {
      const tooltip = this.$refs.tooltip

      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            top: clientY,
            left: clientX,
            right: clientX,
            bottom: clientY,
          }
        },
      }

      computePosition(virtualEl, tooltip, {
        placement: 'bottom-start',
        middleware: [shift(), flip(), offset(30)],
      }).then(({ x, y }) => {
        tooltip.style.transform = `translate(${x}px, ${y}px)`
      })
    },
    /**
     * On mouse leave
     */
    onMouseLeave() {
      clearTimeout(this.openTimeout)

      this.hovering = false
    },
  }
}
</script>
