import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavComponent from './components/bottom-navigation/bottom.nav.component';
import AppBarComponent from './components/bar/app-bar.component';
import MessagesListComponent from './business/messages.component';
import PictureComponent from './business/picture.component';
import VideoComponent from './business/video.component';
import CameraComponent from './business/camera.component';
import AccountComponent from './business/account.component';

class AppComponent extends Component {
  render() {
    return <MuiThemeProvider>
            <article id="app">
              <section id="header">
                <AppBarComponent></AppBarComponent>
              </section>
              <section id="content">
                  <Route id="messages" path="/messages" component={MessagesListComponent}></Route>
                  <Route id="camera" path="/camera" component={CameraComponent}></Route>
                  <Route id="picture" path="/picture" component={PictureComponent}></Route>
                  <Route id="video" path="/video" component={VideoComponent}></Route>
                  <Route id="account" path="/account" component={AccountComponent}></Route>
              </section>
              <section id="bottom">
                <BottomNavComponent navItems={this.getBottomNavItmes()}></BottomNavComponent>
              </section>
              {/*<section>
                <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" hidden="true"/>
              </section>*/}
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
      {index:0,key:'Picture',icon:'image',name:'picture',href:'/picture'},
      {index:1,key:'Video',icon:'videocam',name:'video',href:'/video'},
      {index:2,key:'Camera',icon:'camera_alt',name:'camera'},
      {index:3,key:'Message',icon:'message',name:'message',href:'/messages'},
      {index:4,key:'Account',icon:'person',name:'account',href:'/account'},
    ]
    return navItems;
  }
}

export default AppComponent;
