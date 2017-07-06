import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import bottomNavStore from '../../redux/stores/bottom-nav.store';
import cameraStore from '../../redux/stores/camera.store';
import {CAMERA} from '../../redux/states/bottom-nav.state';
import {PHOTOGRAPH} from '../../redux/states/camera.state';

class BottomNavComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedIndex: 0,
    };
  }

  select = (navItem) =>{
    console.log(234);
    if(navItem.name.toLowerCase()===CAMERA.toLowerCase()){
      navigator.camera.getPicture((data)=>{
        this.context.router.history.replace('/camera',{img:data});//主动路由跳转
      }, (data)=>{
        console.log('error:'+data)
      });
    }else{
      this.setState({selectedIndex: navItem.index});
      bottomNavStore.dispatch({type:navItem.key});
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

      if(!navItem.href){
        return item
      }
      
      return <Link id={navItem.name} to={navItem.href}>{item}</Link>
    });

    return navItems;
  }

  getStyle(){
    const style={
      'position':'fixed',
      'bottom':'0',
      'width':'100%',
      'height':'inherit',
      'padding-top':'3px'
    }

    return style
  }
}

BottomNavComponent.contextTypes= {
    router: PropTypes.object
};

export default BottomNavComponent;