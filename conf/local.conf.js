nightwatch_config = {
  "src_folders" : ["lib/login"],
  //"src_folders" : ["tests/Home/full-flow-ff.js"],
  "output_folder" : "tests_output",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
    "log_path" : "",
    "port" : 4444,

    "cli_args" : {
      "webdriver.chrome.driver" : "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": false,

      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },

      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": ["--no-sandbox"],
          "w3c": false
        }
      },
    }
  }
}

module.exports = nightwatch_config;