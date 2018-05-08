var ajax = {
    getXHR: function() {
        var ids = ['MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP'
        ];
        var xhr;
        if (typeof XMLHttpRequest === 'function') {
            xhr = new XMLHttpRequest();
        } else {
            // IE: try to find an ActiveX object to use
            for (var i = 0; i < ids.length; i++) {
                try {
                    xhr = new ActiveXObject(ids[i]);
                    break;
                } catch (e) {}
            }
        }
        return xhr;
    },
    request: function(url, method, cb, post_body) {
        var xhr = this.getXHR();
        xhr.onreadystatechange = (function(myxhr) {
            return function() {
                if (myxhr.readyState === 4 && myxhr.status === 200) {
                    cb(myxhr);
                }
            };
        }(xhr));
        xhr.open(method.toUpperCase(), url, true);
        xhr.send(post_body || '');
    }
};