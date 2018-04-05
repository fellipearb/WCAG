class setStyle {
  constructor() {
    this.createStyle()
  }

  createStyle() {
    this.style = document.createElement('style')
    this.styleText = document.createTextNode(this.getText())
    this.style.appendChild(this.styleText)
    document.head.appendChild(this.style)
  }

  getText() {
    return '\
          a:not([title]), a[title=""] {border: 4px solid #00531d!important}\
          img:not([alt]), img[alt=""], img:not([title]), img[title=""] {border: 4px solid red!important}\
      '
  }
}

class readDOM {
  constructor() {
    this.images()
    this.ancor()
    this.head()
  }

  images() {
    let itens = document.querySelectorAll('img:not([alt]), img[alt=""], img:not([title]), img[title=""]'),
      alt = document.querySelectorAll('img:not([alt]), img[alt=""]'),
      title = document.querySelectorAll('img:not([title]), img[title=""]'),
      total = itens.length

    console.log('\n')
    console.warn('%c >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', 'background: red; color: #fff')
    console.warn('%c Existem ' + total + ' imagens sem os astributos alt e/ou title ', 'background: #222; color: #bada55')
    console.warn('Lista de imagens sem alt', alt)
    console.warn('Lista de imagens sem title', title)
    console.warn('%c <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ', 'background: red; color: #fff')
    console.log('\n')
  }

  ancor() {
    let itens = document.querySelectorAll('a:not([href]), a[href=""], a[href="#"], a:not([title]), a[title=""]'),
      href = document.querySelectorAll('a:not([href]), a[href=""], a[href="#"]'),
      title = document.querySelectorAll('a:not([title]), a[title=""]'),
      total = itens.length

    console.warn('%c >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', 'background: #00531d; color: #fff')
    console.warn('%c Existem ' + total + ' ancoras sem o astributo title ', 'background: #222; color: #bada55')
    console.warn('Lista de ancoras sem href', href)
    console.warn('Lista de ancoras sem title', title)
    console.warn('%c <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ', 'background: #00531d; color: #fff')
    console.log('\n')
  }

  head() {
    let itens = document.querySelectorAll('h1, h2, h3, h4, h5, h6'),
      last = undefined,
      current = undefined,
      error = false,
      msg = undefined

    for (let i = 0; i < itens.length; i++) {
      current = itens[i].tagName.replace('H', '')

      if (last > current) {
        error = true
      }

      last = itens[i].tagName.replace('H', '')
    }

    if (error)
      msg = 'Os headings da página não seguem a hierarquia correta'
    else
      msg = 'Os headings da página seguem a hierar correta'

    console.warn('%c >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', 'background: #7a00ff; color: #fff')
    console.warn('%c ' + msg, 'background: #222; color: #bada55')
    console.warn('Lista de headings', itens)
    console.warn('%c <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ', 'background: #7a00ff; color: #fff')
    console.log('\n')
  }
}

let media = new setStyle(),
    dom = new readDOM()