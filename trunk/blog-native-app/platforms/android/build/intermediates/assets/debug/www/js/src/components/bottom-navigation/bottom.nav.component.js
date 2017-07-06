import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import bottomNavStore from '../../redux/stores/bottom-nav.store';
import cameraStore from '../../redux/stores/camera.store';
import titleStore from '../../redux/stores/title.store';
import {GO} from '../../redux/actions/bottom-nav.action';
import {CHANGE} from '../../redux/actions/title.action';
import {SHARE_PIC} from '../../redux/dirtionary/title.dirtionary';

class BottomNavComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount(){
    this.screenWidth=window.screen.width;
  }

  select = (navItem) =>{
    if(navItem.name===SHARE_PIC){
      const cameraOptions={
        quality:100,
        sourceType:Camera.PictureSourceType.CAMERA,
        destinationType:Camera.DestinationType.DATA_URL,
        encodingType:Camera.EncodingType.JPEG,
        targetHight:(this.screenWidth*4*(4/3)),
        targetWidth:this.screenWidth*4,
        correctOrientation:true,
        popoverOptions:CameraPopoverOptions,
        saveToPhotoAlbum:true
      };

      navigator.camera.getPicture((data)=>{
        this.context.router.history.replace('/camera_share',{img:data});//主动路由跳转
      }, (data)=>{
        console.log('error:'+data)
      },cameraOptions);
    }else{
      this.setState({selectedIndex: navItem.index});
      bottomNavStore.dispatch({type:GO,nav:navItem.key});
      titleStore.dispatch({type:CHANGE,title:navItem.name});
    }
  } 

  render() {
    return this.template();
  }

  template(){
      return (<Paper id="nav" zDepth={1} style={this.getStyle()}>
            <BottomNavigation selectedIndex={this.state.selectedIndex} children={this.navItemsTemplate()}/>
        </Paper>)
  }

  navItemsTemplate(){
    let navItems=this.props.navItems.map(navItem=>{
      let item=<BottomNavigationItem id={"navitem-".concat(navItem.name)}
              key={navItem.key}
              label={navItem.name}
              icon={<FontIcon className="material-icons">{navItem.icon}</FontIcon>}
              onTouchTap={() => this.select(navItem)}
            />

      // if(!navItem.href){
      //   return item
      // }
      
      return <Link id={navItem.name} to={navItem.href}>{item}</Link>
    });

    return navItems;
  }

  getStyle(){
    const style={
      'position':'fixed',
      'bottom':'0',
      'width':'100%',
      'height':'inherit'
    }

    return style
  }
}

BottomNavComponent.contextTypes= {
    router: PropTypes.object
};

export default BottomNavComponent;