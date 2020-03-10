import React, { Component } from 'react'
import { Button } from 'antd';
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
            student: {
                name: '李明',
                age: 56,
            }
        }
    }
    componentDidMount() {
        // console.log('路由', this)
    }
    clickList(name) {  
        console.log('调用点击的父组件', name)
    }
    goDetail(path) {
        console.log('详情', path)
        let name = '北京'
        // this.props.history.push(`/detail/22?name=${name}`, {age: 66})
        this.props.history.push('/list')
    }
    render() {
        return (
            <div>
                首页
                <Button type="primary" onClick={this.goDetail.bind(this, '/detail')}>详情</Button>
                <Button type="primary" onClick={this.goDetail.bind(this, '/list')}>列表</Button>
                {
                    this.state.list.map((curr,index) => {
                        return(
                            <List list={curr} student={this.state.student} key={index} clickList={this.clickList.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;