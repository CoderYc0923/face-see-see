<script setup lang="ts">
import { useStore } from '@/stores'

const router = useRouter()
const store = useStore()
const themeTitle = ref<string>('🌙')
const showMenu = ref<boolean>(store.showMenu)

const onClickCell = (model: string) => {
  store.arModel = model
  router.push('core')
}

watch(showMenu, (val) => {
  themeTitle.value = val ? '🌕' : '🌙'
  store.showMenu = showMenu.value
})
</script>

<template>
  <div class="container">
    <VanCellGroup title="AR-Face" inset>
      <VanCell center :title="themeTitle">
        <template #right-icon>
          <VanSwitch v-model="showMenu" size="23px" class="theme-switch" active-color="#707070" inactive-color="#466053">
          </VanSwitch>
        </template>
      </VanCell>
      <div class="show-box" v-if="showMenu">
        <VanCell center title="👄 AR唇彩" is-link @click="onClickCell('lip')"></VanCell>
      </div>
    </VanCellGroup>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  position: relative;
  background-color: #466053;
}
</style>
