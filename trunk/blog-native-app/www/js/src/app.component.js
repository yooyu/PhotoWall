import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavComponent from './components/bottom-navigation/bottom.nav.component';
import AppBarComponent from './components/bar/app-bar.component';
import MessagesListComponent from './business/messages.component';
import PictureComponent from './business/picture.component';
import VideoComponent from './business/video.component';
import CameraShareComponent from './business/camera.share.component';
import AccountComponent from './business/account.component';
import screenStore from './redux/stores/screen.store';
import {PIC,VIDEO,ACCOUNT,MESSAGE,SHARE_PIC} from './redux/dirtionary/title.dirtionary';
import {SHOW,HIDDEN} from './redux/states/screen.state';

class AppComponent extends Component {

  componentDidMount() {
    this.subscriptionScreen();
    this.context.router.history.replace('/picture');//主动路由跳转
    this.fullWidth=window.screen.width;
    this.fullHeight=window.screen.height;
  }

  render() {
    return <MuiThemeProvider>
            <article id="app">
              <section id="header" ref="header">
                <AppBarComponent></AppBarComponent>
              </section>
              <section id="content" ref="content">
                <Route id="picture" path="/picture" component={PictureComponent}></Route>
                <Route id="messages" path="/messages" component={MessagesListComponent}></Route>
                <Route id="camera_share" path="/camera_share" component={CameraShareComponent}></Route>
                <Route id="video" path="/video" component={VideoComponent}></Route>
                <Route id="account" path="/account" component={AccountComponent}></Route>
              </section>
              <section id="bottom" ref="bottom">
                <BottomNavComponent navItems={this.getBottomNavItmes()}></BottomNavComponent>
              </section>
              {/*<section>
                <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" hidden="true"/>
              </section>*/}
              <section id="hidden">
              </section>
            </article>
            
           </MuiThemeProvider>
  }

  getMenuChildren(){
    //<ButtonComponent type="menu" name="提交" icon="menu" color="pink" align="horizontal" disabled="false" menuItems={this.getMenuChildren()}/>
    let children=[
      {key:'cloud', iconName:'cloud',className:'btn-floating red',iconClassName:'material-icons'},
      {key:'format_quote', iconName:'format_quote',className:'btn-floating yellow darken-1',iconClassName:'material-icons'},
      {key:'publish', iconName:'publish',className:'btn-floating green',iconClassName:'material-icons'},
      {key:'attach_file', iconName:'attach_file',className:'btn-floating blue',iconClassName:'material-icons'}
    ];

    return children;
  }

  getBreadcrumbs(){
    //<BreadcrumbsComponent breadcrumbs={this.getBreadcrumbs()}></BreadcrumbsComponent>
    let breadcrumbs=[
      {index:0,key:'Home',href:'#!',name:'Home'},
      {index:1,key:'UserManage',href:'#!',name:'UserManage'},
      {index:2,key:'UserSearch',href:'#!',name:'UserSearch'},
    ]
    return breadcrumbs;
  }

  getBottomNavItmes(){
    let navItems=[
      {index:0,key:'Picture',icon:'image',name:PIC,href:'/'},
      {index:1,key:'Video',icon:'videocam',name:VIDEO,href:'/video'},
      {index:2,key:'Camera',icon:'camera_alt',name:SHARE_PIC,href:'/camera'},
      {index:3,key:'Message',icon:'message',name:MESSAGE,href:'/messages'},
      {index:4,key:'Account',icon:'person',name:ACCOUNT,href:'/account'},
    ]
    return navItems;
  }

  subscriptionScreen() {
    screenStore.subscribe(() => {
      let state = screenStore.getState().state;
      let header = this.refs.header;
      let content = this.refs.content;
      let img = content.querySelector('img');
      let bottom = this.refs.bottom;

      if (state === HIDDEN) {
        header.setAttribute('hidden', 'hidden');
        content.style.overflowY = 'visible';
        img.style.marginTop = (this.fullHeight - this.fullWidth * (4 / 3))/2+'px';
        bottom.setAttribute('hidden', 'hidden');
      } else {
        header.removeAttribute('hidden');
        content.style.overflowY = 'scroll';
        img.style.marginTop = 0;
        bottom.removeAttribute('hidden');
      }
    });
  }
}

AppComponent.contextTypes= {
    router: PropTypes.object
};

export default AppComponent;
