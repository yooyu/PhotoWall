import React, { Component  } from 'react';
import PropTypes from 'prop-types';

/**
 * @author shenweiwei 
 * @type common component
 * componet 
 *  types:[button,operating,menu]
 *  icons:[add,edit,cloud,menu]
 *  align:[horizontal,vertical]
 *  disabled:[true,false]
 *  color:[red,blue,white...]
 */
class ButtonComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
        //设置按钮Disabled(默认开启)
        buttonDisabled:(!props.disabled?'':'disabled'),
        //设置颜色(默认蓝色)
        buttonColor:(props.color!=='blue'?props.color:'blue'),
        //设置按钮样式（默认button）
        buttonClassName:''
    };
  }

  /**
   * 进入状态之前调用，用于修改state用的。一般用于初始化
   */
  componentWillMount(){
     this.initButtonStyle();
  }

  /**
   * 设置模板
   * @param {*} props 
   */
  template(){
    const props=this.props;

    //设置type
    if(props.type==='operating'||(props.type==='menu'&&(props.disabled==='true'||props.disabled==='disabled'))){
      //带icon模板
      return <a className={this.state.buttonClassName}>{this.initButtonIcon()}</a>
    }else if(props.type==='menu'||props.align.includes('h')){
      //menu模板
      return this.menuTemplate();
    }else{
      //默认
      return <a className={this.state.buttonClassName}>{props.name}</a>
    }
  }

  /**
   * 菜单按钮模板
   */
  menuTemplate(){
    let menuAlignClassName='fixed-action-btn'+(this.props.align.includes('h')?' horizontal':'');

    let template=
      <div className={menuAlignClassName}>
        <a className={this.state.buttonClassName}>
          <i className="large material-icons">{this.props.icon}</i>
        </a>
        
        {this.menuChildrenTemplate(this.props.menuItems)}
      </div>

     return template;
  }

  /**
   * 子菜单按钮模板
   * @param {*} children 
   */
  menuChildrenTemplate(children){
    let rows=children.map(child => ( // 拼装li
      <li key={child.key}><a className={child.className}><i className={child.iconClassName}>{child.iconName}</i></a></li>
    ))

    return <ul>{rows}</ul>;
  }

  /**
   * 渲染模板
   */
  render() {
    return (
      this.template()
    )
  }

  /**
   * 设置按钮样式
   * @param {*} props 
   */
  initButtonStyle(){
    const props=this.props;
    let className='waves-effect waves-light btn';

    if(props.type==='operating'){
      className='btn-floating btn-large waves-effect waves-light';
    }else if(props.type==='menu'){
      className="btn-floating btn-large";
    }

    //拼接样式和状态
    if(props.color!=='blue') className=className.concat(' ').concat(this.state.buttonColor);
    if(props.disabled==='true'||props.disabled==='disabled') className=className.concat(' ').concat(this.state.buttonDisabled);

    this.setState((prevState, props) => ({ // 接受一个表示前次state的参数和一个当前props的参数
      buttonClassName: className// 这里实际上是返回了一个对象，是ES6箭头函数的简写
    }));
  }

  /**
   * 设置按钮icon
   */
  initButtonIcon(){
    const props=this.props;
    let iconClassName='material-icons left';
    if(props.iconAlign&&props.iconAlign==='right') iconClassName.replace('left','right');
    if(props.icon) return <i className={iconClassName}>{props.icon}</i>
  }

}

ButtonComponent.propTypes = {
    type: PropTypes.string.isRequired
};

export default ButtonComponent;