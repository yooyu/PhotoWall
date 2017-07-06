import React,{Component} from 'react';
import GridListComponent from '../components/grid-list/grid-list.component';

export default class VideoComponent extends Component{

    render(){
        return this.template();
    }

    template(){
        return (<div><GridListComponent /></div>);
    }
}