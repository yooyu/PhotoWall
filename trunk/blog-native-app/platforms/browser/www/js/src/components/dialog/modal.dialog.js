import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const TYPE={DIALOG:'dialog',ALERT:'alert'}

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class ModalDialogComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false
    }

    this.title='information';
    this.msg='';
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return this.template();
  }

  template(){
    let actions = [<FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />];

    if(this.props.type===TYPE.DIALOG) actions.push(<FlatButton label="Submit" primary={true} disabled={true} onTouchTap={this.handleClose} />)

    return (<div>
      <Dialog title={this.title} actions={actions} modal={true} open={this.state.open}>
        {this.msg}
      </Dialog>
    </div>);
  }

  show(...params){
    this.msg=params[0];
    if(params.length===2) this.title=params[1];
    this.handleOpen();
  }
  
}
