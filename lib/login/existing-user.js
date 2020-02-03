const selector = require('../../util/locate-strategy')
const { waitForReady } = require('../../util/wait-for-ready')

module.exports = {
    'Access specific page from viator': function (browser) {
        browser
        .url(selector.url)
        .waitForElementVisible('body', 2000)
        .click('a.cookie-container__close')
        .pause(1000)
        .click('div#avatar-area > button')
      },

  'Login as existing user': function (browser) {
    browser
    .waitForElementVisible('.wl-custom-modal__body input#email', 2000)
    .waitForElementVisible('.wl-custom-modal__body input#password', 8000)
    .setValue('.wl-custom-modal__body input#email', 'effa@goquo.com')
    .pause(1000)
    .setValue('.wl-custom-modal__body input#password','Test@123')
    .pause(1000)
    // .click('.wl-custom-modal__body .ant-btn.ant-btn-primary.button.button-full.mt')
    // .setValue('input[type=password]', 'Test@123')
    // .pause(2000)
    // .waitForElementPresent(selector.LoginDetails.emailAddElement, 2000, function () {
    //   browser.click('input[id=email]').pause(1000)
    //   .element('css selector', selector.LoginDetails.emailAddElement, function(result){
    //     if(result.status != -1){
    //       //Element exists, do something
    //       console.log(selector.LoginDetails.emailAddElement, 'found')
    //       browser.setValue(selector.LoginDetails.emailAddElement, selector.LoginDetails.emailAdd)
    //     }   else{
    //       console.log(selector.LoginDetails.emailAddElement, 'not found')
    //       //Element does not exist, do something else
    //     }
      
    // }, "Click email input. ")
  
  // });


  
    // .click('input[id=email]').pause(2000)
    // browser
    // .waitForElementVisible(selector.LoginDetails.emailAddElement, 2000)
    // .setValue(selector.LoginDetails.emailAdd)
    // .pause(1000)
    // .click(selector.LoginDetails.passwordElement)
    // .setValue(selector.LoginDetails.password)
    // .pause(1000)
    // .click('.ant-btn-primary')
    // .pause(5000)
    // .click('#avatar-area > div:nth-of-type(1)') //to close overlay from login modal
    // .pause(1000)
  },


}