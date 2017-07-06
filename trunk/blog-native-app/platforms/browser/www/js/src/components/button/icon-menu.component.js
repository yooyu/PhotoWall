import React,{Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {COMMON_FONT_COLOR} from '../../static/js/common-default-style';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
class IconMenuComponent extends Component{
  render(){
    return this.template();
  }

  template(){
     return (
      <div>
        <IconMenu iconButtonElement={<IconButton><MoreVertIcon color={COMMON_FONT_COLOR}/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
        </IconMenu>
      </div>
    )
  }
}

export default IconMenuComponent;