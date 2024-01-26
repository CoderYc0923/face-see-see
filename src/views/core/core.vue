<template>
  <BaseNavBar to="main" />
  <div class="ar-core">
    <video ref="video" autoplay></video>
    <canvas ref="canvas"></canvas>
    <div class="bottom-box">
      <MenuBar :menu-data="menuData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UseCore from '@/utils/hooks/useCore';
import UseVideoStream from '@/utils/hooks/useVideoStream'
import type { Menu } from "@/typing"
import { useStore } from '@/stores'
import MenuBar from '@/components/MenuBar.vue';
import BaseNavBar from '@/components/BaseNavBar.vue'
// import { FaceLandmark, Holistic } from '@mediapipe/tasks-vision';

const store = useStore()
const video = ref()
const canvas = ref()

const menuData = ref<Menu>([])

const init = async () => {
  //加载Holistic
  // const holistic = new Holistic({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/${file}` });
  // await holistic.load();

  //获取视频流
  const useVideoStream = new UseVideoStream();
  const videoStream = useVideoStream.stream;
  video.value.srcObject = videoStream;

  video.value.onloadedmetadata = () => {
    video.value.play();
    //追踪操作类
  };

  const core = new UseCore(store.arModel)
  menuData.value = core.menuData
}

onMounted(init)
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
  font-size: 0; //解决100vh出现滚动条问题
  position: relative;
  background-color: #262928;

  video, canvas {
    width: 100%;
    height: 100%;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bottom-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100px;
  }
}</style>
