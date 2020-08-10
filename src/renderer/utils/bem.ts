const join = (name: string, el: string, symbol: string): string => el ? `${name}${symbol}${el}` : name
const prefix = (name: string, mods: any) => {
  if (mods === false || mods === undefined || mods === null) {
    return ''
  }
  if (typeof mods === 'string' || typeof mods === 'number') {
    return join(name, mods.toString(), '--')
  }

  if (Array.isArray(mods)) {
    return mods.map(item => prefix(name, item)).join(' ')
  }

  const ret = []
  Object.keys(mods).forEach(key => {
    if (mods[key]) {
      ret.push(prefix(name, key))
    }
  })
  return ret.join(' ')
}
/**
 * bem helper
 * @param {string} block  块（scope,作用域）
 * @param {string} el     元素，如需得到快+修饰符，可以不传此参数,见example 5、6
 * @param {string|string[]|object} 修饰符
 * @example
 * 1.bem('header')('title') => 'header__title'
 * 2.bem('header')('title', 'active') => 'header__title--active'
 * 3.bem('header')('title', ['active', 'warn']) => 'header__title--active header__title--warn'
 * 4.bem('header')('title', { active: true, warn: false }) => 'header__title--active'
 * 5.bem('header)('', 'active') => 'header--active'
 * 6.bem('header)('', ['active', 'warn']) => 'header--active header--warn'
 */
export const bem = (block: string = '') => (el: string, mods?: any): string => {
  const element = join(block, el, '__')
  return mods ? [element, prefix(element, mods)].join(' ') : element
}
