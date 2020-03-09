import React, { Component } from 'react'

class Detail extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        // let obj = this.props.match.params;
        let search = this.props.location.search;
        // console.log(obj, search)

        // console.log('获取路由参数', this.props)
        // let a = search.split('?')[1].split('=')[1];
        let arr = ['name', 'city', 'age'];
        let obj = {
            name: '小明',
            father: '阿萨',
            mouth: '2019-2-9'
        }
        let arr1 = [{
            name: '成都',
            age: 22,
        },{
            name: '北京',
            age: 88,
        }]
        // let res = this.pick(obj, arr);
        // console.log('结果', res)
        let res1 = this.changList(arr1);
        console.log('res1', res1)

    }
    pick (obj, arr) {
        return arr.reduce((acc, curr) => {
            if (curr in obj) {
                acc[curr] = obj[curr]
            }
            return acc
        }, {})
    }
    changList(arr) {
        return arr.reduce((acc, item) => {
            let obj = Object.assign({}, item, { checked: true });
            console.log([...acc, obj])
            return [...acc, obj];
        }, []);
    }
    render() {
        return (
            <div>
                详情
            </div>
        )
    }
}

export default Detail;