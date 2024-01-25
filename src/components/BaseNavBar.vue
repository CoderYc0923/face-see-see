<template>
  <div class="nav-bar">
    <div class="hot-area" @click="arrowHandle">
      <van-icon name="bars" color="#edfbf4" size="30"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const props = defineProps<{
  to: string
}>()

const arrowHandle = () => {
  router.push({name: props.to})
}

</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  .hot-area {
    width: 40px;
    height: 40px;
  }
}
</style>
