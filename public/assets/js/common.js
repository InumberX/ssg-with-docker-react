/*------------------------------------------
 共通変数
--------------------------------------------*/
const commonVars = {
  breakpoint: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  isBreakpoint: {
    xxs: false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  },
  viewport: '',
  animationSpeed: {
    main: 300,
  },
  className: {
    scrolling: 'Scrolling',
    active: 'IsActive',
    hide: 'IsHide',
    bodyFixed: 'Body--fixed',
  },
  scrollPosition: 0,
}

/*------------------------------------------
 共通処理
--------------------------------------------*/
const commonUtils = {
  // エスケープを行う処理
  escape: function (value) {
    return !value
      ? ''
      : String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;')
  },
  watchValue: {
    object: (obj, key, callback) => {
      if (!obj || !key) {
        return
      }

      let value = obj[key]

      Object.defineProperty(obj, key, {
        get: () => value,
        set: (newValue) => {
          const oldValue = value
          value = newValue
          callback(oldValue, newValue)
        },
        configurable: true,
      })
    },
  },
  breakpoint: {
    setCurrentBreakPoint: (target) => {
      Object.keys(commonVars.isBreakpoint).forEach((key) => {
        if (key === target) {
          commonVars.isBreakpoint[key] = true
        } else {
          commonVars.isBreakpoint[key] = false
        }
      })
    },
    checkBreakPointXxs: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('xxs')
      }
    },
    checkBreakPointXs: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('xs')
      }
    },
    checkBreakPointSm: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('sm')
      }
    },
    checkBreakPointMd: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('md')
      }
    },
    checkBreakPointLg: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('lg')
      }
    },
    checkBreakPointXl: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('xl')
      }
    },
    checkBreakPointXxl: (e) => {
      if (e.matches) {
        commonUtils.breakpoint.setCurrentBreakPoint('xxl')
      }
    },
    init: () => {
      // ブレイクポイント判定
      const matchMediaXxs = window.matchMedia(`screen and (max-width: ${commonVars.breakpoint.xs - 1}px)`)
      const matchMediaXs = window.matchMedia(
        `screen and (min-width: ${commonVars.breakpoint.xs}px) and (max-width: ${commonVars.breakpoint.sm - 1}px)`
      )
      const matchMediaSm = window.matchMedia(
        `screen and (min-width: ${commonVars.breakpoint.sm}px) and (max-width: ${commonVars.breakpoint.md - 1}px)`
      )
      const matchMediaMd = window.matchMedia(
        `screen and (min-width: ${commonVars.breakpoint.md}px) and (max-width: ${commonVars.breakpoint.xl - 1}px)`
      )
      const matchMediaLg = window.matchMedia(
        `screen and (min-width: ${commonVars.breakpoint.lg}px) and (max-width: ${commonVars.breakpoint.xl - 1}px)`
      )
      const matchMediaXl = window.matchMedia(
        `screen and (min-width: ${commonVars.breakpoint.xl}px) and (max-width: ${commonVars.breakpoint.xxl - 1}px)`
      )
      const matchMediaXxl = window.matchMedia(`screen and (min-width: ${commonVars.breakpoint.xxl}px)`)

      // ブレイクポイントの瞬間に発火
      matchMediaXxs.addEventListener('change', commonUtils.breakpoint.checkBreakPointXxs)
      matchMediaXs.addEventListener('change', commonUtils.breakpoint.checkBreakPointXs)
      matchMediaSm.addEventListener('change', commonUtils.breakpoint.checkBreakPointSm)
      matchMediaMd.addEventListener('change', commonUtils.breakpoint.checkBreakPointMd)
      matchMediaLg.addEventListener('change', commonUtils.breakpoint.checkBreakPointLg)
      matchMediaXl.addEventListener('change', commonUtils.breakpoint.checkBreakPointXl)
      matchMediaXxl.addEventListener('change', commonUtils.breakpoint.checkBreakPointXxl)

      // 初回チェック
      commonUtils.breakpoint.checkBreakPointXxs(matchMediaXxs)
      commonUtils.breakpoint.checkBreakPointXs(matchMediaXs)
      commonUtils.breakpoint.checkBreakPointSm(matchMediaSm)
      commonUtils.breakpoint.checkBreakPointMd(matchMediaMd)
      commonUtils.breakpoint.checkBreakPointLg(matchMediaLg)
      commonUtils.breakpoint.checkBreakPointXl(matchMediaXl)
      commonUtils.breakpoint.checkBreakPointXxl(matchMediaXxl)
    },
  },
  viewport: {
    init: () => {
      const viewport = document.querySelector('meta[name="viewport"]')

      if (!viewport) {
        return
      }

      commonVars.viewport = commonUtils.escape(viewport.getAttribute('content'))

      viewport.setAttribute(
        'content',
        commonVars.isBreakpoint.xxs ? `width=${commonVars.breakpoint.xs}` : commonVars.viewport
      )

      commonUtils.viewport.act()
    },
    act: () => {
      commonUtils.watchValue.object(commonVars.isBreakpoint, 'xxs', (oldValue, newValue) => {
        const viewport = document.querySelector('meta[name="viewport"]')

        if (!viewport) {
          return
        }

        viewport.setAttribute('content', newValue ? `width=${commonVars.breakpoint.xs}` : commonVars.viewport)
      })
    },
  },
  smoothScroll: {
    init: () => {
      $(document)
        .off('click.smoothScroll')
        .on('click.smoothScroll', 'a[href^="#"]', function () {
          const self = $(this)

          commonUtils.smoothScroll.act(self.attr('href'))

          return false
        })
    },
    act: (target, speed) => {
      let targetElm = target === '#' ? $('body') : $(target)
      const scrollSpeed = speed ?? 300

      if (!targetElm) {
        return
      }

      const pos = targetElm.offset().top

      const scrollPos = pos - 24

      $('body').addClass(commonVars.className.scrolling)

      setTimeout(() => {
        $('html, body').animate({ scrollTop: scrollPos }, scrollSpeed)

        commonUtils.smoothScroll.scrollStop(scrollSpeed)
      }, 10)
    },
    // スクロールが止まった時の処理
    scrollStop: (scrollSpeed) => {
      setTimeout(function () {
        $('body').removeClass(commonVars.className.scrolling)
      }, scrollSpeed)
    },
  },
  // 親画面を固定する処理
  fixParentScreen: () => {
    commonVars.scrollPosition = window.pageYOffset || document.documentElement.scrollTop
    const body = document.body
    body.style.top = '-' + commonVars.scrollPosition + 'px'
    body.classList.add(commonVars.className.bodyFixed)
  },
  // 親画面の固定を解除する処理
  unfixParentScreen: () => {
    const body = document.body
    body.classList.remove(commonVars.className.bodyFixed)
    body.style.top = ''
    scrollTo(0, commonVars.scrollPosition)
    commonVars.scrollPosition = 0
  },
}

/*------------------------------------------
  初期表示時の処理
--------------------------------------------*/
window.addEventListener('DOMContentLoaded', () => {
  /*------------------------------------------
    画面サイズを確認
  --------------------------------------------*/
  commonUtils.breakpoint.init()

  /*------------------------------------------
    ビューポート
  --------------------------------------------*/
  commonUtils.viewport.init()

  /*------------------------------------------
    スムーススクロール
  --------------------------------------------*/
  commonUtils.smoothScroll.init()
})
