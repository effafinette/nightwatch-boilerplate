module.exports = {
    url: "https://zb_web:gqzbActivitiez@web.staging.zouba.co/",
    productUrls: {
      viator: "https://zb_web:gqzbActivitiez@web.staging.zouba.co/product/full-day-musandam-cruise-from-dubai-with-lunch-5f31",
      musement: "https://zb_web:gqzbActivitiez@web.staging.zouba.co/product/tour-of-the-new-architecture-in-milan-skyscrapers-urban-developments-and-design-9ac8"
    },
    //detailsUrl:  "https://zb_web:gqzbActivitiez@web.staging.zouba.co/product/[uuid]",
    searchActivity: {
      tag: ".showBar .ant-input",
      //code: "Singapore"
      //code: "Hong Kong"
      //code: "Milan"
      //code: "Bungy Jumping in Pattaya"
      code: "Kuala Lumpur"
    },
    bookingPage: {
      bookNow: 'div.wl-booking-sidebar button.ant-btn-primary',
      secondCalendarDate: 'div#__next div:nth-child(3) > div > table > tbody > tr:nth-child(4) > td.CalendarDay.CalendarDay_1.CalendarDay__default.CalendarDay__default_2.CalendarDay__firstDayOfWeek.CalendarDay__firstDayOfWeek_3',
      selectBtnMusement: 'div#__next label',
      adultPaxIncreaseBtn: 'form.pax-options-form div.ant-form-item:nth-child(1) button.increase',
      continueBtnMuse:'div#__next div.product-options-footer.justify-content-right > button[type="button"]',
      paxSubmitBtn: 'form.pax-options-form button[type=submit]',
      //paxSubmitBtnMusement: 'div#__next label > span:nth-child(2)',
      selectTime:"div#__next label:nth-child(1) > span:nth-child(2)",
      selectPackage:".ant-collapse-item.ant-collapse-no-arrow.available-result-list.package-available > div[role='tab'] label > span:nth-of-type(2)",
      continuePackage:'div#radio-group button[type="button"]', 
      bookingSummary:'div#__next strong > span:nth-child(1)',
      bookingInfoPage:'div#__next h1'
    },
    selectResult:".ant-select-dropdown-menu-item-group:nth-of-type(1) [role]",
    // selectNext:'div#__next li.ant-pagination-item.ant-pagination-item-3 > a',
    selectActivity:"div.wl-product__item:nth-child(10) a",   //10th product
    //clickBooking:"div#__next a > button[type='button']" //Book Now button
    
  
    LoginDetails:{
      NameElement: "input#name",
      Name: "tester",
      emailAddElement: "input[id=email]",
      emailAdd:"testeratgoquo@gmail.com",
      passwordElement: "input[id=password]",
      password:"Test@123",
      password2Element: "input#confirm_password",
      password2:"Test@123",
    },
  
    CustomerDetails:{ 
      firstNameElementName:"input#customer-firstname",
      firstName:'customer',
      lastNameElementName:"input#customer-lastname",
      lastName:'test',
      contactEmail:"input#customer-email",
      email:"effa@goquo.com",
      countryList:'div#__next div:nth-child(2) > div > div > span > div > div > div',
      countryFlagElement:'div#__next div:nth-child(2) > div > div > span > div .flag-dropdown',
      countryElement:'.country-list [data-dial-code="1"]:nth-of-type(181)',
      contactNumber:"div#__next span > div > input",
      number:'182708765',
      },
  
  
    TravelerDetails:{ 
      firstNameElementName:"div#__next li > div.ant-row > div:nth-child(1) > div > div > div > span > input",
      firstName:'traveler',
      lastNameElementName:"div#__next li > div.ant-row > div:nth-child(2) > div > div > div > span > input",
      lastName:'test',
      },      
  
    AdditionalInfo:{ 
      // dOBElement:"input#extra-1",
      // doBVal:'20 October 2019',
      pickuppointElement:'.ant-input.ant-select-search__field',
      pickuppointdropdownElement:"ul[role='listbox'] > li:nth-of-type(5)",
      specialReqElement:"textarea#extra-special-requirements",
      specialReqVal:'testing the special requirements field',
      },       
  
    PaymentInfo:{ 
      cardholderNameElement:"input#name",
      cardholderVal:'tester',
      cardNumberElement:"input#cardNo",
      cardNumberVal:'4111111111111111',
      cvvElement:"input#cvv",
      cvvNumber:"737",
      expiryMonthElement:"div#expMonth div.ant-select-selection__placeholder",
      expirySelectVal:'ul > li:nth-child(10)', 
      expiryTextVal:"10",
      expiryYearElement:"div#expYear .ant-select-selection__placeholder",
      expiryYearVal:"ul > li.ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active",
      },   
  
  
  }