<template>
  <BaseNavBar to="main"/>
  <div class="ar-core">
    <video src="./test.mp4"></video>
    <div class="bottom-box">
        <MenuBar :menu-data="menuData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UseCore from '@/utils/hooks/useCore';
import type { Menu } from "@/typing"
import { useStore } from '@/stores'
import MenuBar from '@/components/MenuBar.vue';
import BaseNavBar from '@/components/BaseNavBar.vue'

const store = useStore()

const menuData = ref<Menu>([])

const initCore = () => {
  const core = new UseCore(store.arModel)
  menuData.value = core.menuData
}

onMounted(initCore)
</script>

<style lang="less" scoped>
::v-deep {
  .van-nav-bar__content {
    background-color: #262928 !important;
  }
}
.ar-core {
  width: 100vw;
  height: 100vh;
  font-size: 0;//解决100vh出现滚动条问题
  position: relative;
  background-color: #262928;
  video {
    width: 100%;
    height: 100%;
  }
  .bottom-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100px;
  }
}
</style>
