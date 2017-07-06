import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import moment from 'moment';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class MessagesListComponent extends Component{
  constructor(props){
    super(props);

    this.state={
      messages:null
    };
  }

  componentWillMount() {
    axios.get('/manage/sharepic/messages/findAll')
      .then(response => this.setState({messages:this.convertData(response.data)}))
      .catch(error=> console.log(error));
  }

  render(){
    return this.template();
  }

  template(){
    return (<Paper zDepth={1} rounded={false}>
        {this.getList()}
      </Paper>)
    
  }

  getList(){
    const messages=this.state.messages;
    if(!messages) return ;

    const list=[];
    for(let day in messages){
      if(messages[day].length<=0) continue;

      const message=
        <div key={day}>
          <List>
            <Subheader>{this.castDayName(day)}</Subheader>
            {this.getListItemByList(messages[day])}
          </List>
          <Divider />
        </div>
      list.push(message);
    }
    
    return list;
  }

  getListItemByList(messages){
    const listItems=[];

    listItems.push(
      messages.map(message=>{
        const item=<div key={message.pk}>
            <ListItem
              leftAvatar={<Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497515506299&di=2043302a5fbc2b28ca5783d4c0ba5e8e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd1a20cf431adcbef5ed70a21a6af2edda3cc9f31.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText={message.fields.title}
              secondaryText={
                <p>
                  {message.fields.body}
                </p>
              }
              secondaryTextLines={2}
            />
          </div>
        return item;
      })
    )

    return listItems;
  }

  convertData(datalist){
    if(!datalist) return;

    let dateObj={
      'today':[],//今天
      'yesterday':[],//昨天
      'acquired':[],//前天
      'earlier':[]//更早
    };

    const sysdate=moment().format('YYYY-MM-DD');
    const yesterday=moment().subtract(1, 'days').format('YYYY-MM-DD');
    const acquired=moment().subtract(2, 'days').format('YYYY-MM-DD');
    
    for(let data of datalist){
      const createDate=data.fields['create_date'].substring(0,10);
      
      switch (createDate){
        case sysdate:dateObj['today'].push(data); break;
        case yesterday:dateObj['yesterday'].push(data); break;
        case acquired:dateObj['acquired'].push(data); break;
        default: dateObj['earlier'].push(data); break;
      }
    }

    return dateObj;
  }

  castDayName(day){
    switch (day) {
      case 'today': return '今天';
      case 'yesterday': return '昨天'
      case 'acquired': return '前天'
      default : return '更早'
    }
  }
}
