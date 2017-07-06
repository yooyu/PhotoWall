import React, { Component } from 'react';
import cameraStore from '../redux/stores/camera.store';
import { GO , BACK } from '../redux/actions/camera.action';
import titleStore from '../redux/stores/title.store';
import { CHANGE } from '../redux/actions/title.action';
import { SHARE_PIC }from '../redux/dirtionary/title.dirtionary';
import screenStore from '../redux/stores/screen.store';
import {OPEN,CLOSE} from '../redux/actions/screen.action';
import {SHOW,HIDDEN} from '../redux/states/screen.state';

export default class CameraShareComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      width: 100 ,
      height: 100 * (4 / 3) ,
    };
  }

  componentWillMount() {
    //设置img 宽度和高度
    this.content=document.querySelector('#content');

    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;
    this.fullHeight = screenHeight;//(screenHeight-(screenHeight-this.content.offsetHeight)*2);
    this.fullWeight = screenWidth;

    cameraStore.subscribe(() => {
      titleStore.dispatch({ type: CHANGE, title: SHARE_PIC });

      let imgdata = "data:image/jpeg;base64,".concat(cameraStore.getState().img);
      let img = this.refs.img;

      if (!img.getAttribute('src') || imgdata !== img.getAttribute('src')) img.setAttribute("src", imgdata);
    });
  }

  componentDidMount() {
    this.setImg();
  }

  componentDidUpdate() {
    this.setImg();
  }

  render() {
    return this.template();
  }
  
  template(){
    return (<article>
              <img ref="img" width={this.state.width} height={this.state.height} onTouchTap={() => this.showFullScreen()}/>
            </article>);
  }

  setImg() {
    var imgData = this.props.location.state.img;
    cameraStore.dispatch({
      type: GO,
      img: imgData
    });
  }

  showFullScreen() {
    if (screenStore.getState().state === SHOW) {
      screenStore.dispatch({ type: CLOSE });
      this.setState({ width: this.fullWeight, height: this.fullWeight*(4/3) });
    } else {
      screenStore.dispatch({ type: OPEN });
      this.setState({ width: 100 , height: 100 * (4 / 3)});
    }
  }
}