import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  close = () => this.setState({open: false});

  render() {
    return this.template();
  }

  template(){
    return (
      <article>
        <Drawer open={this.state.open} docked={false} width={200} children={this.setDrawerItems()} />
      </article>
    );
  }

  setDrawerItems(){
      let drawerItems=this.props.drawerItems.map(drawerItem=>(
        <MenuItem key={drawerItem.key} onTouchTap={this.close}>{drawerItem.name}</MenuItem>
      ));
      return drawerItems
  }
}