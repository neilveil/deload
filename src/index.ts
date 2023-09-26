export function deloadCSS(urls: string | string[], extras: { [key: string]: string } = {}) {
  return new Promise((resolve, reject) => {
    const loaded: string[] = []

    if (!Array.isArray(urls)) urls = [urls]

    const ready = (url: string) => {
      loaded.push(url)
      if (loaded.length === urls.length) resolve({ loaded })
    }

    urls.forEach(url => {
      const alreadyExists = document.querySelector(`link[href="${url}"][rel="stylesheet"]`)
      if (alreadyExists) return ready(url)

      const linkEl = document.createElement('link')
      linkEl.rel = 'stylesheet'
      linkEl.href = url

      Object.keys(extras).forEach(key => linkEl.setAttribute(key, extras[key]))

      linkEl.onload = () => ready(url)
      linkEl.onerror = () => reject({ loaded, error: url })
      document.head.appendChild(linkEl)
    })
  })
}

export function deloadJS(urls: string | string[], extras: { [key: string]: string } = {}) {
  return new Promise((resolve, reject) => {
    const loaded: string[] = []

    if (!Array.isArray(urls)) urls = [urls]

    const ready = (url: string) => {
      loaded.push(url)
      if (loaded.length === urls.length) resolve({ loaded })
    }

    urls.forEach(url => {
      const alreadyExists = document.querySelector(`script[src="${url}"]`)
      if (alreadyExists) return ready(url)

      const scriptEl = document.createElement('script')
      scriptEl.src = url

      Object.keys(extras).forEach(key => scriptEl.setAttribute(key, extras[key]))

      scriptEl.onload = () => ready(url)
      scriptEl.onerror = () => reject({ loaded, error: url })
      document.body.appendChild(scriptEl)
    })
  })
}
