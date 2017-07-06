import React,{Component} from 'react';
import cameraStore from '../redux/stores/camera.store';
import {PHOTOGRAPH} from '../redux/states/camera.state';

export default class CameraComponent extends Component{
    componentWillMount(){
        cameraStore.subscribe(()=>{
            this.refs.img.setAttribute("src","data:image/png;base64,"+cameraStore.getState().img);
        });
    }

    componentDidMount() {
        this.setImg();
    }

    componentDidUpdate() {
        this.setImg();
    }

    render(){
        return this.template();
    }

    template(){
        return (<article>
                  <img ref="img"/>
                </article>);
    }

    setImg(){
        var imgData=this.props.location.state.img;
        cameraStore.dispatch({type:PHOTOGRAPH,img:imgData});
    }
}