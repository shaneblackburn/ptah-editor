<template>
  <div class="b-available-platforms b-border"
    :path="path"
    :style="objVarsMedia"
    >
    <div class="b-available-platforms__item"
      v-for="(value, key) in platforms" :key="key"
      v-if="platforms[key].visible"
      :style="{
        '--mobile-width': mediaStyles['is-mobile']['sizeIcons']['width'] + 'px'
      }"
      >
      <a class="b-available-platforms__item-button flex flex_center"
        :style="{
          fill: colorFill['color'],
          width: sizeIcons.width + 'px'
        }"
        :title="platforms[key].name"
        >
        <VuseIcon :name="key"></VuseIcon>
      </a>
    </div>
  </div>
</template>

<script>
import VuseIcon from '@editor/components/VuseIcon'
import elementMedia from '../mixins/elementMedia'

export default {
  name: 'AvailablePlatforms',

  mixins: [
    elementMedia
  ],

  components: {
    VuseIcon
  },

  props: {
    path: {
      type: String
    }
  },

  computed: {
    platforms () {
      return this.$section.get(`$sectionData.${this.path}.availablePlatforms`)
    },
    colorFill () {
      return this.$section.get(`$sectionData.${this.path}.colorFill`)
    },
    sizeIcons () {
      return this.$section.get(`$sectionData.${this.path}.sizeIcons`)
    }
  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../assets/sass/element.sass'

.b-available-platforms
  width: auto
  margin: 1.6rem
  min-height: 5rem
  min-width: 5rem
  display: flex
  justify-content: center
  align-items: center
  &.styler-active
    border: 0.2rem $white dotted
    border-radius: 0.5rem
  .is-tablet &, .is-mobile &
    flex-wrap: wrap
    height: auto !important
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important
  &__item
    position: relative
    margin: 1.6rem
    &-button
      border: none
      position: relative
      .is-mobile &
        width: var(--mobile-width) !important
      @media only screen and (max-width: 768px)
        &
          width: var(--mobile-width) !important
      .vuse-icon
        width: inherit
        height: auto
        fill: inherit

</style>
