import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import DrawerComponent from '../drawer/drawer.component';
import IconMenuComponent from '../button/icon-menu.component';
import '../../static/css/common.css';
import bottomNavStore from '../../redux/stores/bottom-nav.store';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarComponent extends Component {
  constructor(props){
    super(props);

    this.state={
      title:"Home"
    };
  }

  componentDidMount () {
    bottomNavStore.subscribe(()=>{
      this.setState({title:bottomNavStore.getState()});
    });
  }
  

  render() {
    return (
      <div>
        <AppBar
          className="text-center"
          title={this.state.title}
          iconElementLeft={<IconButton iconClassName="material-icons" onTouchTap={this.handleToggle.bind(this)}>menu</IconButton>}
          iconElementRight={<IconMenuComponent/>}
        />
        <DrawerComponent ref="drawer" drawerItems={this.getDrawerItmes()} />
      </div>
    );
  }

  getDrawerItmes(){
    let drawerItems=[
      {index:0,key:'menu',name:'menu'},
      {index:1,key:'menu 2',name:'menu 2'},
    ]
    return drawerItems;
  }


  handleToggle(event){
    this.refs.drawer.handleToggle();
  }

}

export default AppBarComponent;