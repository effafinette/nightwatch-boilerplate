const selector = require('../../util/locate-strategy')
const strings = require('../../util/strings')
const { waitForReady } = require('../../util/wait-for-ready')

module.exports = {
  'Access specific page from viator': function (browser) {
    browser
    .url(selector.productUrls.viator)
  },
  //promise-based tests cannot be chained
  'Check that expected h1 loads after page is ready': async function (browser) {
    await waitForReady(browser)
    browser.assert.containsText('h1.wl-details-heading__title', 'Full Day Musandam Cruise with Lunch from Dubai')
  },
  'Close cookie bar': function (browser) {
    browser.click('a.cookie-container__close')
  },
  'Select calendar': function (browser) {
    browser
      .waitForElementVisible(selector.bookingPage.bookNow, 2000)
      .click(selector.bookingPage.bookNow)
      //takes long time as options need to load
      .waitForElementVisible(selector.bookingPage.secondCalendarDate, 10000)
      .pause(1000) //takes time to render
      .click(selector.bookingPage.secondCalendarDate)  //SELECT DATE ON 2nd CALENDAR
      // .waitForElementNotPresent(selector.bookingPage.secondCalendarDate, 5000)
      // pax increase is displayed automatically
      .waitForElementVisible(selector.bookingPage.adultPaxIncreaseBtn, 5000)
      //.click(selector.bookingPage.adultPaxIncreaseBtn)
      //.pause(1000)
      
  },
  'Select package': function (browser) {
    browser
      .click(selector.bookingPage.paxSubmitBtn)
      //.click(selector.bookingPage.selectPackage)
      .waitForElementVisible(selector.bookingPage.bookingSummary)
      .click(selector.bookingPage.continuePackage)
      .waitForElementVisible(selector.bookingPage.bookingInfoPage)
      //.assert.title(strings.bookingTitle)
      //.pause(15000) //this must be enable if not it cannot find the (selector.CustomerDetails.firstNameElementName)
      .waitForElementVisible('div#__next h1',15000)
      

  },
  'Customer details': function (browser) {
    browser
      .pause(6000) //this is the minimum time so that script will catch (selector.CustomerDetails.firstNameElementName)
      .setValue(selector.CustomerDetails.firstNameElementName, selector.CustomerDetails.firstName)
      .pause(1000)
      .setValue(selector.CustomerDetails.lastNameElementName, selector.CustomerDetails.lastName)
      .pause(1000)
      .setValue(selector.CustomerDetails.contactEmail, selector.CustomerDetails.email)
      .pause(1000)
      .click(selector.CustomerDetails.countryFlagElement)   
      .click(selector.CustomerDetails.countryElement)
      .setValue(selector.CustomerDetails.contactNumber, selector.CustomerDetails.number)
  },
  'Traveler details': function (browser) {
   browser
    .setValue(selector.TravelerDetails.firstNameElementName, selector.TravelerDetails.firstName)
    .pause(1000)
    .setValue(selector.TravelerDetails.lastNameElementName, selector.TravelerDetails.lastName)
    .pause(1000)
  },

 
  'Additional Info': function (browser) {
  browser
    // .click(selector.AdditionalInfo.pickuppointElement) //PICKUP POINT FIELD
    // .pause(1000)
    // .click(selector.AdditionalInfo.pickuppointdropdownElement) //PICKUP POINT DROP DOWN LIST
    // .pause(1000)
    .setValue(selector.AdditionalInfo.specialReqElement, selector.AdditionalInfo.specialReqVal)
    .pause(1000)
  },
  'Payment details': function (browser) {
  browser
    .setValue(selector.PaymentInfo.cardholderNameElement, selector.PaymentInfo.cardholderVal)
    .setValue(selector.PaymentInfo.cardholderNameElement, selector.PaymentInfo.cardholderVal)
    .pause(1000)
    .setValue(selector.PaymentInfo.cardNumberElement, selector.PaymentInfo.cardNumberVal)
    .pause(1000)
    .setValue(selector.PaymentInfo.cvvElement, selector.PaymentInfo.cvvNumber)
    .pause(1000)
    .click(selector.PaymentInfo.expiryMonthElement)
    .waitForElementVisible(selector.PaymentInfo.expirySelectVal)
    //.setValue(selector.PaymentInfo.expiryMonthElement, selector.PaymentInfo.expiryTextVal)
    .click(selector.PaymentInfo.expirySelectVal)
    .pause(1000)
    .click(selector.PaymentInfo.expiryYearElement)
    .waitForElementVisible(selector.PaymentInfo.expiryYearVal)
    .click(selector.PaymentInfo.expiryYearVal)
    .pause(1000)
    .click('.ant-btn-primary')
    .pause(35000)
    .assert.title(strings.bookingConfirmedTitle).pause(1000)

  }


}