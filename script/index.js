// ajax 请求
function xhrRequest(method, url) {
    var xhr = new XMLHttpRequest();
    var data;

    xhr.open(method, url, true);
    xhr.send();

    // 接收响应数据
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if( (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                data = JSON.stringify(xhr.responseText);
            } else {
                new Error("status: " + xhr.status);
            }
        } else {
            new Error("readyState: " + xhr.readyState);
        }
    }
    return data;
}

// 获取字符串中指定字符在字符串中倒数第几个位置出现
function getIndex(str, char, n) {
    var x = str.lastIndexOf(char);
    for(var i = 0; i < n-1; i ++) {
        x = str.lastIndexOf(char, x-1);
    }
    return x;
}