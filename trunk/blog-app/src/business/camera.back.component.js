import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class CameraComponent extends Component{

    componentDidMount () {
      this.video = ReactDOM.findDOMNode(this.refs.video);
      this.openCamera();
    }
    

    render(){
        return this.template();
    }

    template(){
        return (<article>
                  <video id="video" ref="video" style={{width:'100%',height:'100%',display:'block'}} autoPlay loop/>
                  <input type="file" capture="camera" accept="image/*" id="cameraInput"name="cameraInput" class="sign_file"/>
                  {/*<button id="snap">Snap Photo</button>
                  <canvas id="canvas" ref="canvas" width="414px" height="736px"/>*/}
                </article>);
    }

    openCamera(){
        // var canvas = ReactDOM.findDOMNode(this.refs.canvas);
        // var ctx = canvas.getContext('2d');

        // var exArray = []; //存储设备源ID
        // MediaStreamTrack.getSources(function (sourceInfos) {
        //     for (var i = 0; i != sourceInfos.length; ++i) {
        //         var sourceInfo = sourceInfos[i];
        //         //这里会遍历audio,video，所以要加以区分
        //         if (sourceInfo.kind === 'video') {
        //             exArray.push(sourceInfo.id);
        //         }
        //     }
        // });

        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia; //获取媒体对象（这里指摄像头）
        navigator.getUserMedia({
            // video: {
            //     'optional': [{
            //         'sourceId': exArray[0] //0为前置摄像头，1为后置
            //     }]
            // }
            video:true
        }, (stream)=>{this.gotStream(stream)}, (err)=>alert(err)); //参数1获取用户打开权限；参数二成功打开后调用，并传一个视频流对象，参数三打开失败后调用，传错误信息


        // document.getElementById("snap").addEventListener("click", function () {
        //     ctx.drawImage(video, 0, 0, 640, 480); //将获取视频绘制在画布上
        // });
    }

    gotStream(stream){
      this.video.src = URL.createObjectURL(stream);
            
      this.video.onerror = function () {
        stream.stop();
      };

      stream.onended = (err)=>alert(err);

            // video.onloadedmetadata = function () {
            //     alert('摄像头成功打开！');
            // };
    }
}