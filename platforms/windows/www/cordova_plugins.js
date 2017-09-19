cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.verso.cordova.clipboard.Clipboard",
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "pluginId": "com.verso.cordova.clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.verso.cordova.clipboard": "0.1.0",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});