import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        console.log('props', props.list.city)
        this.state = {
            city: props.list,
        }
    }
    componentDidMount() {
        // console.log(this.state.city.city)
    }
    changeClick(item) {
        // console.log('测试点击')
        this.props.clickList(item)
    }
    render() {
        const { clickList } = this.props;
        // console.log(clickList(66))
        return (
            <div>
                {/* 列表数据 */}
                {/* {this.props.list} */}
                <div onClick={clickList.bind(this, this.props.list.city)}>
                    {this.props.list.city}
                </div>
            </div>
        )
    }
}
