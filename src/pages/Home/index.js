import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import List from '../../components/Home/List'

@withRouter

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                city: '重庆',
                age: 26,
            },{
                city: '北京',
                age: 25,
            },{
                city: '成都',
                age: 35,
            }],
        }
    }
    componentDidMount() {
        console.log('路由', this)
    }
    clickList(name) {  
        console.log('调用点击的父组件', name)
    }
    render() {
        return (
            <div>
                首页
                {
                    this.state.list.map((curr,index) => {
                        return(
                            <List list={curr} key={index} clickList={this.clickList.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;