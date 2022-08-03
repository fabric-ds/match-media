export const breakpoints = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 990px)',
}

export const setupMedia = (callback) => {
  if (typeof window === 'undefined') return
  for (const [bpName, bpQuery] of Object.entries(breakpoints)) {
    const query = window.matchMedia(bpQuery)
    const cb = (e) => callback({ name: bpName, matches: e.matches })
    if (query.addEventListener) query.addEventListener('change', cb)
    else query.addListener(cb)
    cb(query)
  }
}
