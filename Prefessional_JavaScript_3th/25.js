/**
 * requestAnimationFrame动画
 */
//firefox版本
// function draw(timestamp) {
//     console.log("一次动画开始")
//         //计算两次重绘的时间间隔
//     var diff = timestamp - startTime;

//     var startTime = timestamp;
//     mozRequestAnimationFrame(draw);
//     console.log("一次动画结束")
// }
// var startTime = new Date();
// mozRequestAnimationFrame(draw);

//通用版
// (function() {
//     function draw(timestamp) {
//         console.log("start");
//         var drawStart = (timestamp || Date.now()),
//             diff = drawStart - startTime;

//         resquestAnimationFrame(draw);
//         console.log("end")
//     }

//     var resquestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
//         startTime = window.mozAnimationStartTime || Date.now();
//     requestAnimationFrame(draw);
// })()

/**
 * PageVisibility API
 */
/*function isHiddenSupported() {
    return typeof(document.hidden || document.msHidden || document.webkitHidden) != "undefined";
}
console.log(isHiddenSupported());*/

/*function handleVisibilityChange() {
    var output = document.getElementById("output"),
        msg = "";

    if (document.hidden || document.msHidden || document.webkitHidden) {
        msg = "page is hidden," + (new Date()) + '<br/>';
    } else {
        msg = "page is visible now," + (new Date()) + '<br/>';
    }
    output.innerHTML += msg;

}
document.addEventListener("webkitvisibilitychange", handleVisibilityChange);*/

/**
 * Geolocation API
 */
//定位
/*navigator.geolocation.getCurrentPosition(function(position) {
    var output = document.getElementById('output');

    output.innerHTML += 'latitude:' + position.corrds.latitude;
    output.innerHTML += 'longitude' + position.coords.longitude;
}, function(error) {
    console.log("ERROR CODE:" + error.code);
    console.log('Error message:' + error.message);
}, {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 2500000
})*/

//跟踪位置
/*var watchId = navigator.geolocation.watchPosition(function(position) {
    var output = document.getElementById('output');

    output.innerHTML += 'latitude:' + position.corrds.latitude;
    output.innerHTML += 'longitude' + position.coords.longitude;
}, function(error) {
    console.log("ERROR CODE:" + error.code);
    console.log('Error message:' + error.message);
})*/


/**
 *File API 
 */

/*var fileslist = document.getElementById("files-list");
EventUtil.addHandler(fileslist, "change", function(event) {
    var info = "",
        output = document.getElementById("output"),
        progress = document.getElementById("progress"),
        files = EventUtil.getTarget(event).files,
        type = "default",1`
        reader = new FileReader();
    if (/image/.test(files[0].type)) {
        reader.readAsDataURL(files[0]);
        type = "image"
    } else {
        reader.readAsText(files[0]);
        type = "text";
    }
    reader.onerror = function() {
        output.innerHTML = "Could not rad file error code is " + reader.error.code;
    }
    reader.onprogress = function(event) {
        if (event.lengthComputable) {
            progress.innerHTML = event.loaded + "/" + event.total;
        }
    };
    reader.onload = function() {
        var html = "";
        switch (type) {
            case "image":
                html = '<img src=\"' + reader.result + '\">';
                break;
            case "text":
                html = reader.result;
                break;
        }
        output.innerHTML = html;
    }
})*/

/**
 * 读取部分内容
 */
/*function blobSlice(blob, startByte, length) {
    if (blob.slice) {
        return blob.slice(startByte, length);
    } else if (blob.webkitSlice) {
        return blob.webkitSlice(startByte, length);
    } else if (blob.mozSlice) {
        return blob.mozSlice(startByte, length);
    } else {
        return null;
    }
}
var fileslist = document.getElementById("files-list");
EventUtil.addHandler(fileslist, "change", function(event) {
    var info = "",
        output = document.getElementById("output"),
        progress = document.getElementById("progress"),
        files = EventUtil.getTarget(event).files,
        reader = new FileReader(),
        blob = blobSlice(files[0], 20, 64);

    if (blob) {
        reader.readAsText(blob);
        reader.onerror = function() {
            output.innerHTML = "Could not read file error code is " + reader.error.code;
        }

        reader.onload = function() {
            output.innerHTML = reader.result;;
        }
    } else {
        alert("Your browser doesn't suppurt slice()");
    }

})*/

/**
 * 对象URL
 */
/*function createObjectURL(blob) {
    if (window.URL) {
        return window.URL.createObjectURL(blob);
    } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(blob);
    } else {
        return null;
    }
}

var fileslist = document.getElementById("files-list");
EventUtil.addHandler(fileslist, "change", function(event) {
    var info = "",
        output = document.getElementById("output"),
        progress = document.getElementById("progress"),
        files = EventUtil.getTarget(event).files,
        reader = new FileReader(),
        url = createObjectURL(files[0]);

    if (url) {
        if (/image/.test(files[0].type)) {
            output.innerHTML = '<img src=\"' + url + '\">';
        } else {
            output.innerHTML = "not a image";
        }

    } else {
        output.innerHTML = "Your browser doesn't support object URLS."
    }

})*/

/**
 * 拖放文件
 */
var droptarget = document.getElementById('droptarget');
/*
function handleEvent(event) {
    var info = '',
        output = document.getElementById("output"),
        files, i, len;
    EventUtil.preventDefault(event);
    if (event.type == "drop") {
        files = event.dataTransfer.files;
        i = 0;
        len = files.length;
        while (i < len) {
            info += files[i].name + "(" + files[i].type + "," + files[i].size + "bytes)<br>";
            i++;
        }
        output.innerHTML = info;
    }
}*/
//xhr上传
function handleEvent(event) {
    var info = '',
        output = document.getElementById("output"),
        data, xhr,
        files, i, len;
    EventUtil.preventDefault(event);
    if (event.type == "drop") {
        data = new FormData();

        files = event.dataTransfer.files;
        i = 0;
        len = files.length;
        while (i < len) {
            data.append("file" + i, files[i]);
            i++;
        }
        xhr = new XMLHttpRequest();
        xhr.open("post", FileAPIExample06Upuload.php, true);
        xhr.onreadystatechange = function() {
            if (xhr.readystate == 4) {
                alert(xhr.responseText);
            }
        };
        xhr.send(data);

    }
}
EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);