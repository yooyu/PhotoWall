import React,{Component} from 'react';
import titleStrore from '../../redux/stores/title.store';
import {PIC} from '../../redux/dirtionary/title.dirtionary';

class TitleComponent extends Component{
  constructor(props){
    super(props);
    
    this.state={
      title:PIC
    }
  }

  componentWillMount() {
    titleStrore.subscribe(()=>{
      let data=titleStrore.getState();
      this.setState({title:data.title});
    });
  }

  render(){
    return this.template();
  }

  template(){
    return (<div>{this.state.title}</div>)
  }
}

export default TitleComponent;