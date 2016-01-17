cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.telerik.plugins.wkwebview/www/wkwebview.js",
        "id": "com.telerik.plugins.wkwebview.wkwebview",
        "pluginId": "com.telerik.plugins.wkwebview",
        "clobbers": [
            "wkwebview"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-webserver": "1.0.3",
    "com.telerik.plugins.wkwebview": "0.6.7",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});