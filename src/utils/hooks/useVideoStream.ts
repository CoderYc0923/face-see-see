class UseVideoStream {
  stream: any
  mediaInfo: {
    capabilities: any,//摄像头能力
    settings: any,//当前摄像头设置
    width: number, //摄像头分辨率
    height: number, //摄像头分辨率
    frameRate: any //摄像头帧率
  }
  inspectStream: any

  constructor() {
    this.init()
  }

  async init () {
    await this.inspectMeidaInfo()
    this.stopInspectMeidaInfo()
    this.createVideoStream();
  }

  /**
   * 检测当前设备信息
   */
  inspectMeidaInfo() {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.inspectStream = stream;
        const tracks = stream.getVideoTracks();
        if (!tracks.length) console.warn('inspectMeidaInfo - error: 未找到摄像头轨道')
        else {
          const track = tracks[0]
          const capabilities = track.getCapabilities();
          const settings = track.getSettings();

          this.mediaInfo = {
            capabilities,
            settings,
            width: settings.width,
            height: settings.height,
            frameRate: settings.frameRate
          }
        }
        resolve('success')
      }).catch(error => {
        console.error('获取摄像头信息时发生错误：', error)
        reject('error')
      })
    })
  }

  /**
   * 停止检测
   */
  stopInspectMeidaInfo() {
    if (this.inspectStream) {
      this.inspectStream.getTracks().forEach(function (track) {
        track.stop(); // 停止所有的track
      });
      this.inspectStream = null
    }
  }

  /**
   * 创建视频流
   */
  async createVideoStream() {
    const constraints = {
      video: {
        width: { ideal: this.mediaInfo.width },
        height: { ideal: this.mediaInfo.height },
        frameRate: { ideal: this.mediaInfo.frameRate, min: 10 },
        facingMode: { exact: "user" }
      }
    }
    this.stream = await navigator.mediaDevices.getUserMedia(constraints)
  }

  /**
   * 关闭视频流
   */
  stopVideoStream() {
    if (this.stream) {
      this.stream.getTracks().forEach(function (track) {
        track.stop(); // 停止所有的track
      });
      this.stream = null
    }
  }
}

export default UseVideoStream