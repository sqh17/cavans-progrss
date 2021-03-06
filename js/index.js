function circle(id, per) {
        var canvas = document.getElementById(id),  //获取canvas元素
            context = canvas.getContext('2d'),  //获取画图环境，指明为2d
            centerX = canvas.width/2,   //Canvas中心点x轴坐标
            centerY = canvas.height/2,  //Canvas中心点y轴坐标
            // rad = (5/3)*Math.PI/100;//将300度分成100份，那么每一份就是rad度
            rad = Math.PI/300*5
            // 渐变
            var grd=context.createLinearGradient(0,500,500,0);  //前两个代表起始x，y坐标，后两个代表终点坐标
			grd.addColorStop(0,"red");
			grd.addColorStop(1,"green");
        //绘制运动外圈
        function inCircle(per){
            context.save();
            context.strokeStyle = grd; //设置描边样式
            context.lineWidth = 15; //设置线宽
            context.beginPath(); //路径开始
            context.arc(centerX, centerY, 100 , Math.PI/3*2, per*rad+Math.PI/3*2, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，false顺时针/true逆时针)
            context.lineCap="round";
            context.stroke(); //绘制
            context.restore();
        }
        //绘制外圈
        function outCircle(){
            context.save();
            context.strokeStyle = "yellow"; //设置描边样式
            context.lineWidth = 2; //设置线宽
            context.beginPath();
            context.arc(centerX, centerY, 100 , Math.PI/3, Math.PI-Math.PI/3, true);
            context.stroke();
            context.restore();
        }  
        //百分比文字绘制
        function text(per){
            context.save();
            context.fillStyle = "red"; 
            context.font = "20px Arial";
            //绘制字体，并且指定位置
            context.fillText(per+"%", centerX-25, centerY+10);
            context.fillStyle = "green"; 
            context.font = "16px Arial";
            //绘制字体，并且指定位置
            context.fillText("结余", centerX-25, centerY+30);
            context.stroke(); 
        }        
        context.clearRect(0, 0, canvas.width, canvas.height);
        text(per)
        outCircle();
        inCircle(per);       
        
    }