module.exports = {
  waitForReady: (browser) => new Promise((resolve, reject) => {
    let counter = 1
    const checkReady = () => {
      browser.execute('return document.readyState;', (result) => {
        if (result.value === 'complete') {
          resolve()
        } else {
          console.log('Not yet ready: ', result)
          if (++counter > 10) {
            reject('Document was not ready within 10s')
          } else {
            setTimeout(checkReady, 1000)
          }
        }
      })
    }
    setTimeout(checkReady, 1000)
  })
}