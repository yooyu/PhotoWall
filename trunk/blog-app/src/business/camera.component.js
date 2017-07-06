import React,{Component} from 'react';

export default class CameraComponent extends Component{
    render(){
        return this.template();
    }

    template(){
        return (<article>
                  Camera
                </article>);
    }
}