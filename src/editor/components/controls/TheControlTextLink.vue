<template>
  <div class="b-text-link">
    <div class="b-text-link__control-group">
      <div class="b-text-link__control">
        <base-color-picker :label="$t('c.linkColor')" v-model="color"></base-color-picker>
      </div>
      <div class="b-text-link__control">
        <BaseSwitcher v-model="underline" :label="$t('c.underline')" />
      </div>
      <div class="b-text-link__control">
        <BaseSwitcher v-model="openNewWindow" label="Open new window" />
      </div>
    </div>

    <div class="b-text-link__control-group">
      <div class="b-text-link__control">
        <base-color-picker :label="$t('c.linkColorHover')" v-model="hoverColor"></base-color-picker>
      </div>
      <div class="b-text-link__control">
        <BaseSwitcher v-model="underlineHover" :label="$t('c.underlineHover')" />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as _ from 'lodash-es'
import { getLinkStyles, randomPoneId } from '../../util'

export default {
  computed: {
    ...mapState('Sidebar', [
      'settingObjectOptions',
      'settingObjectElement'
    ]),

    // link target
    openNewWindow: {
      get: function () {
        return _.get(this.settingObjectOptions, 'textLinkStyles.openNewWindow') || ''
      },
      set: function (newValue) {
        this.setLinkTarget('textLinkStyles.openNewWindow', newValue)
      }
    },

    // link color
    color: {
      get: function () {
        return _.get(this.settingObjectOptions, 'textLinkStyles.a.color') || ''
      },
      set: function (newValue) {
        this.setColor('textLinkStyles.a.color', newValue)
      }
    },

    // link hover color
    hoverColor: {
      get: function () {
        return _.get(this.settingObjectOptions, 'textLinkStyles.hover.color') || ''
      },
      set: function (newValue) {
        this.setColor('textLinkStyles.hover.color', newValue)
      }
    },

    underline: {
      get: function () {
        let underline = _.get(this.settingObjectOptions, 'textLinkStyles.a.text-decoration') || ''
        return !(underline === 'none' || underline === '')
      },
      set: function (newValue) {
        let underline = newValue ? 'underline' : 'none'
        this.setTextDecoration('textLinkStyles.a.text-decoration', underline)
      }
    },

    underlineHover: {
      get: function () {
        let underline = _.get(this.settingObjectOptions, 'textLinkStyles.hover.text-decoration') || ''
        return !(underline === 'none' || underline === '')
      },
      set: function (newValue) {
        let underline = newValue ? 'underline' : 'none'
        this.setTextDecoration('textLinkStyles.hover.text-decoration', underline)
      }
    }
  },

  methods: {
    ...mapActions('Sidebar', [
      'updateSettingOptions'
    ]),

    changeLinkStyle () {
      const poneId = randomPoneId()
      this.settingObjectElement.dataset.pone = poneId
      let styleTemplate = getLinkStyles(poneId, this.settingObjectOptions.textLinkStyles)
      document.head.insertAdjacentHTML('beforeend', styleTemplate)
    },

    setColor (path, newValue) {
      const color = newValue.rgba ? `rgba(${Object.values(newValue.rgba).toString()})` : newValue
      const obj = _.set({}, path, color)
      this.updateSettingOptions(_.merge({}, this.settingObjectOptions, obj))
      this.changeLinkStyle()
    },

    setTextDecoration (path, underline) {
      let obj = _.set({}, path, underline)
      this.updateSettingOptions(_.merge({}, this.settingObjectOptions, obj))
      this.changeLinkStyle()
    },

    setLinkTarget (path, target) {
      let obj = _.set({}, path, target)
      this.updateSettingOptions(_.merge({}, this.settingObjectOptions, obj))

      this.setText('text', this.settingObjectOptions.text)
    },

    setText (path, newValue) {
      const str = 'target="_self"'
      const strBlank = 'target="_blank"'

      let text = newValue

      if (this.openNewWindow) {
        let t = text

        if (text.indexOf(str) !== -1) {
          text = t.replace(/target="_self"/g, strBlank)
        } else {
          text = t.replace(/<a href/g, `<a ${strBlank} href`)
        }
      } else {
        let t = text

        if (text.indexOf(strBlank) === -1) {
          text = t.replace(/<a href/g, `<a ${str} href`)
        } else {
          text = t.replace(/target="_blank"/g, str)
        }
      }

      const obj = _.set({}, path, text)

      this.updateSettingOptions(_.merge({}, this.settingObjectOptions, obj))
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/_colors.sass'
@import '../../../assets/sass/_variables.sass'

.b-text-link
  &__control-group
    padding: 0 0 $size-step/2
    border-bottom: 0.2rem dotted rgba($black, 0.15)
  &__control
    width: 100%
    margin-top: $size-step/2
</style>
