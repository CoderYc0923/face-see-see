<script setup lang="ts">
import { useStore } from '@/stores'
import { localStorage } from '@/utils/local-storage'

const store = useStore()
const themeStore = localStorage.get('theme')
const checked = ref<boolean>(themeStore === 'dark')
const themeTitle = ref<string>('🌕')

const onClickCell = (model: string) => {
  store.arModel = model
}

watch(checked, (val) => {
  if (val) {
    store.mode = 'dark'
    localStorage.set('theme', 'dark')
    themeTitle.value = '🌙'
  }
  else {
    store.mode = 'light'
    localStorage.set('theme', 'light')
    themeTitle.value = '🌕'
  }
})
</script>

<template>
  <div class="container">
    <VanCellGroup title="AR-Face" inset>
      <VanCell center :title="themeTitle">
        <template #right-icon>
          <VanSwitch v-model="checked" size="23px" class="theme-switch" active-color="#707070" inactive-color="#dcdee0">
            <template #node>
              <div class="icon-wrapper">
                <van-icon :name="checked ? 'closed-eye' : 'bulb-o'" size="20px" />
              </div>
            </template>
          </VanSwitch>
        </template>
      </VanCell>
      <VanCell center title="👄 AR唇彩" is-link @click="onClickCell('lip')"></VanCell>
    </VanCellGroup>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  position: relative;
}
</style>
