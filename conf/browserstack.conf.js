nightwatch_config = {
  //src_folders : [ "tests/Home/searchform.js" ],
  //src_folders : [ "tests/Hotel/test_hotel_flow.js" ],
  src_folders : [ "tests/Test Suite/e2e_testdata.js" ],

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'thorasgard1',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'qUsu5t1Dpx6R1BEEqqKN',
    'browserstack.debug': true
  },
  
  // TODO: Set which capabilities are required
  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        'os' : 'Windows',
        'os_version' : '10',
        'browserName' : 'Chrome',
        'browser_version' : '69.0',
        'project' : 'GoQuo_WLDP',
        'build' : 'Build 1.0',
        'w3c' : false
        
      }
    },
    firefox: {
      desiredCapabilities: {
        'os' : 'Windows',
        'os_version' : '8.1',
        'browserName' : 'Firefox',
        'browser_version' : '47.0',
        'project' : 'GoQuo_WLDP',
        'build' : 'Build 1.0',
      }
    },
    safari: {
      desiredCapabilities: {
        'os' : 'OS X',
        'os_version' : 'Mojave',
        'browserName' : 'Safari',
        'browser_version' : '12.0',
        'project' : 'GoQuo_WLDP',
        'build' : 'Build 1.0',
       
      }
    },
    ie: {
      desiredCapabilities: {
        'os' : 'Windows',
        'os_version' : '7',
        'browserName' : 'internet explorer',
        'browser_version' : '11.0',
        'project' : 'GoQuo_WLDP',
        'build' : 'Build 1.0',
      }
    }
  }
}

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
