var  util =
{
	//异步加载js
   initJs : function(url,callback) {
        $.ajax({
            dataType:'script',
            scriptCharset:'gb2312',
            url:url,
            success:function(mjs){
                if (callback) callback(mjs);
            }
        });
    },

	//异步加载html
    initTmpl : function(url, callback) {
        $.ajax({
            url: url,
            async: true,
            cache: true,
            complete: function(xhr, textStatus) {},
            success: function(tmpl) {
                if (callback) callback(tmpl);
            },
            error: function(xhr, textStatus, errorThrown) {}
        });
    }
}
