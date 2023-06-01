window.emialListModule = {
  renderList() {},
};

window.emailComposeModule = {
  renderComposer() {},
};

window.appModule = {
  renderApp() {
    window.emialListModule.renderList();
    window.emailComposeModule.renderComposer;
  },
};

var emailList =  require('emailListModule');
var emailComposer = require('emailComposerModule');
module.exports.renderBase = function(){}


define('emailBaseModule',['require', 'exports', 'emailListModule', 'emailComposerModule'], 
function(require, exports, emailListModule, emailComposeModule){
    exports.renderBase = function(){
        // ....
    }
})


import emailList from 'emailListModule'
import emailComposer from 'emailComposerModule'

export function renderBase (){
    // ...
}


