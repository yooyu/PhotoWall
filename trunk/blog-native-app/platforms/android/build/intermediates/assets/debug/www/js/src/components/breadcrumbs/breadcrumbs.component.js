import React, { Component } from 'react';

export default class BreadcrumbsComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            currentState:'Home',
            currentStateIndex:0
        };

        //作用域绑定为当前组件，否则该函数作用域相当于当前函数
        this.goBackHome = this.goBackHome.bind(this);
    }

    /**
     * 初始化当前最新的导航栏为最后一条数据
     */
    componentDidMount(){
        const breadcrumbs=this.props.breadcrumbs;
        this.setCurrentBreadcrumbs(breadcrumbs[breadcrumbs.length-1]['key'],breadcrumbs[breadcrumbs.length-1]['index']);
    }

    /**
     * 初始化导航栏
     * @param {*} breadcrumbs 
     */
    initBreadcrumbs(breadcrumbs){
        let breadcrumbList;
        if(this.state.currentState==='Home') return <a key="Home" href="#!" onClick={this.goBackHome} className="breadcrumb">Home</a>
        else{
            breadcrumbList=this.props.breadcrumbs.filter(breadcrumb=>{
                if(this.state.currentStateIndex>=breadcrumb.index) return breadcrumb;
            });
        }

        breadcrumbList=breadcrumbList.map(breadcrumb =>{
            if(breadcrumb.key==='Home') return <a key={breadcrumb.key} href={breadcrumb.href} onClick={this.goBackHome} className="breadcrumb">{breadcrumb.name}</a>
            
            return <a key={breadcrumb.key} href={breadcrumb.href} onClick={this.setCurrentBreadcrumbs.bind(this,breadcrumb.key,breadcrumb.index)} className="breadcrumb">{breadcrumb.name}</a>
        });

        return breadcrumbList;
    }
  
    /**
     * 渲染
     */
    render(){
        return (
            this.template()
        )
    }

    /**
     * 导航栏模板
     */
    template(){
        return <article>
            <nav>
                <div className="nav-wrapper">
                    <div className="col s12">
                        {this.initBreadcrumbs(this.props.breadcrumbs)}
                    </div>
                </div>
            </nav>
        </article>
    }

    /**
     * 设置当前最新的导航栏
     * @param {*} key 
     */
    setCurrentBreadcrumbs(key,index){
        this.setState((prevState, props) => (            
            { // 接受一个表示前次state的参数和一个当前props的参数
                currentState: key,// 这里实际上是返回了一个对象，是ES6箭头函数的简写
                currentStateIndex:index
            }
        ));
    }

    /**
     * 回到Home
     * @param {*} event 
     */
    goBackHome(event){
        this.setCurrentBreadcrumbs('Home',0);
    }
}