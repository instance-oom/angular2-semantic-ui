/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  var angular2SemanticUiPackages = [
    'angular2-semantic-ui',
    'angular2-semantic-ui/components/checkbox',
    'angular2-semantic-ui/components/dimmer',
    'angular2-semantic-ui/components/dropdown',
    'angular2-semantic-ui/components/loader',
    'angular2-semantic-ui/components/modal',
    'angular2-semantic-ui/components/progress',
    'angular2-semantic-ui/components/tab',
    'angular2-semantic-ui/components/accordion',
    'angular2-semantic-ui/components/accordion_panel',
    'angular2-semantic-ui/components/popup',
    'angular2-semantic-ui/components/pagination',
    'angular2-semantic-ui/components/tags-input',
    'angular2-semantic-ui/components/rating',
  ]
  var config = {
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  }

  angular2SemanticUiPackages.forEach(function (item) {
    config.map[item] = 'npm:' + item;
    config.packages[item] = {
      main: './index.js',
      defaultExtension: 'js'
    }
  });
  System.config(config);
})(this);
