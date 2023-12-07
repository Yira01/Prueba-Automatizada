module.exports = {
    webdriver: {
      start_process: true,
      server_path: require('chromedriver').path, // Ruta a chromedriver
      port: 9515
    },
    test_settings: {
      default: {
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions: {
            // Aquí puedes agregar opciones específicas de Chrome si es necesario
            // Ejemplo:
            // args: ['--headless', '--disable-gpu']
          },
          javascriptEnabled: true,
          acceptSslCerts: true
        }
      }
    }
  };
  