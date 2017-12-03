var shell = require('shelljs');
var fs = require('fs');
var xml2js = require('xml2js');
var commander = require('commander');
var cordovaConfig;

commander
    .option('--dev', 'Use webpack.dev.config.js for some values, excluding this will use webpack.dist.config.js (currently only GOOGLE_WEB_FONTS is being used).')
    .parse(process.argv);

cordovaConfig = require('../cordova.config.js');

if ((!cordovaConfig.cordovaId) || (!cordovaConfig.appName)) {
    console.log("cordovaConfig error");
}

shell.exec('cordova create cordova ' + cordovaConfig.cordovaId + ' ' + cordovaConfig.appName);
