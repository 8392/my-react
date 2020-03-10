import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        console.log('props', props)
        this.state = {
            city: props.list.city,
            name: '小红'
        }
    }
    componentDidMount() {
        // console.log(this.state.city.city)
    }
    changeClick(item) {
        // console.log('测试点击')
        this.props.clickList(item)
    }
    clickBtn = () => {
        this.setState({ city: {city: '罗马'} }, () => {
            console.log('点击', this.state.city)
        })
    }
    render() {
        const { clickList } = this.props;
        // console.log(clickList(66))
        return (
            <div>
                {/* 列表数据 */}
                {/* {this.props.list} */}
                <div onClick={clickList.bind(this, this.state.city)}>
                    {this.state.city.city}
                </div>
                <div onClick={this.clickBtn}>点击修改</div>?
            </div>
        )
    }
}
