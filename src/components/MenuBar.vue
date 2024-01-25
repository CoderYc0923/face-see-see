<template>
  <ul class="menu-bar">
    <li v-for="(item, index) in menuList" :key="index" @click="chooseItem(item, index)">
      <span :class="{ 'active-item': activeIndex === index }"
        :style="{ backgroundColor: item.value }">{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Menu, MenuItem } from "@/typing"

type Props = {
  menuData: Menu
}
const props = withDefaults(defineProps<Props>(), {
  menuData: () => []
})

const activeIndex = ref<number>()
const activeItem = ref<MenuItem>()

const menuList = computed(() => {
  return props.menuData
})

const chooseItem = (item: MenuItem, index: number) => {
  activeIndex.value = index
  activeItem.value = item
}

</script>

<style lang="less" scoped>
.menu-bar {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  padding: 0 10px;

  li {
    flex-basis: auto;
    flex: 0;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-of-type) {
      margin-right: 10px;
    }

    span {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      text-align: center;
      line-height: 90px;
      font-size: 18px;
      font-family: 'ssdf-font';
      color: #edfbf4;
    }

    .active-item {
      border: 1px solid #edfbf4;
      background:transparent !important;
    }
  }
}
</style>
