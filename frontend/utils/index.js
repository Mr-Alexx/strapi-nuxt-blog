/** 
 * @description 判断颜色是否为深色
 * 使用 W3C 推荐的亮度公式判断颜色深浅
 * @param {number} r 红色
 * @param {number} g 绿色
 * @param {number} b 蓝色
 * @returns {boolean} 是否为深色
 */
export const isDarkColor = (r, g, b) => {
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b
  return brightness < 128
}

/**
 * @description 生成随机颜色，如何是深色则字体色为白色，否则为黑色
 * @returns {Object} 返回颜色对象，包含背景色和文字色
 */
export const randomColor = () => {
  // 生成随机的 RGB 值
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const background = `rgb(${r}, ${g}, ${b})`

  const color = isDarkColor(r, g, b) ? '#fff' : '#000'

  return { background, color }
}
