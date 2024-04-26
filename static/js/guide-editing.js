$(document).ready(function () {
    var uploadBar = {};
    var a = new qq.FileUploader({
        element: $("#image-upload")[0],
        action: "?edit=image",
        params: { guide: 1 },
        template: '<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Перетащите сюда файлы для загрузки</span></div><div class="qq-upload-button">Загрузить изображение</div><ul class="qq-upload-list"></ul></div>',
        onSubmit: function (id, fileName) {
            uploadBar[id] = new ProgressBar({text: "0%", hoverText: "0%"});
            var c = $("#upload-progress");
            // c.empty();
            c.append(uploadBar[id].getContainer())
        },
        onProgress: function (id, fileName, loaded, total) {
            var pct = Math.round(loaded / total * 100);
            if (uploadBar[id]) {
                uploadBar[id].setText(pct + "%");
                uploadBar[id].setHoverText(pct + "%");
                uploadBar[id].setProgress(pct);
            }
        },
        onComplete: function (id, fileName, rspJSON) {
            uploadBar[id] = null;
            if (!rspJSON.success) {
                $("#upload-result").append('<span id="'+id+'" class="q10">Ошибка загрузки (' + rspJSON.error + ")</span>")
            }
            else {
                $("#upload-result").append($WH.sprintf('<span id="'+id+'" class="q2">Загрузка <b>$1</b> выполнена: <input id="'+id+'" type="text" /></span>', rspJSON.name));
             // $("#upload-result").find("input").val("[img src=http://wowimg.zamimg.com/uploads/guide/images/" + rspJSON.id + "." + (rspJSON.type == 3 ? "png" : "jpg") + "]").focus(function () {
                $("#upload-result").find("input#"+id).val("[img src=" + g_staticUrl + "/uploads/guide/images/" + rspJSON.id + "." + (rspJSON.type == 3 ? "png" : "jpg") + "]").focus(function () { this.select() })
            }
        }
    })
});
