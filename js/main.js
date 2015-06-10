//
//	$("#btn1").click(function()
//	{
//		var data="";
//		$.ajax({
//			type:"get",
//			url:"json/menu.json",
//			async:false,
//			success:function(msg)
//			{
//			
//				data = msg;
//			},
//          error:function(){
//              console.log("请求失败");
//          }
//		});
//		console.log(data[0]);
//		util.initJs(data[0].modle,function()
//		{
//			console.log("success")
//		});
//		util.initTmpl(data[0].tplURL,function(tmpl)
//		{
//			$(".content").html(tmpl);
//		});
//	})


//require配置
require.config(
    {
       
        path:{
            "jquery":"jquery-1.7.min",
            "util":"util"
        },
        shim : {
            "util" : {
                deps : ["jquery"],
                exports :"util"
            }
        }
    }
)


//根据配置文件生成页面上的按钮 并且添加元素
define(['jquery','util'],function($,util)
    {
        var dataSource="";
        $.ajax({
            type:"get",
            url:"json/menu.json",
            async:false,
            success:function(data)
            {
                dataSource = data;
                for(var i=0;i<data.length;i++)
                {
                    var btn = $("<button></button>").attr("id","btn"+i).html(data[i].value);
                    btn.appendTo($(".btn"));
                }

            }

        });
        console.log(dataSource);
        var aBtn = document.getElementsByTagName('button');
        for(var j=0;j<aBtn.length;j++)
        {
            aBtn[j].onclick = function()
            {
                var index = j;
                return function()
                {
                    util.initJs(dataSource[index].modle);
                    util.initTmpl(dataSource[index].tplURL,function(tmpl)
                    {
                        $('.content').html(tmpl)
                    })
                }
            }(j)
        }
    }
)

	
	
	
