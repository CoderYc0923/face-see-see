import type { BaseMap, Menu } from "@/typing"

const lipData: Menu = [
  { label: '艳红色', value: '#FF0000' },
  { label: '玫红色', value: '#FF69B4' },
  { label: '橘红色', value: '#FF4500' },
  { label: '樱桃红', value: '#FFC0CB' },
  { label: '酒红色', value: '#800000' },
  { label: '珊瑚红', value: '#FF7F50' },
  { label: '玫瑰红', value: '#FF007F' },
  { label: '绯红色', value: '#DC143C' },
  { label: '红橙色', value: '#FF4500' },
  { label: '褐红色', value: '#8B0000' }
]

const mockMap:BaseMap<string, any> = {
  'lip': lipData
}

const getMockData = (arModel: string) => {
  return mockMap[arModel]
}

export default getMockData