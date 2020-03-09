import React, { useState } from 'react';

function List() {
    // 声明一个新的叫做 “count” 的 state 变量
    let arr = [{
        name: '小明',
        city: '成都',
    },{
        name: '小红',
        city: '重庆'
    }]
    const [count, setState] = useState(arr);

    const changeArr = () => {
        console.log('结果', count[0].name)
        let arr1 = [{
            name: '小明',
            city: '成都',
        }]
        setState(arr1)
    }
    
    return (
        <div>
            {/* <p>You clicked {count} times</p> */}
            <button onClick={changeArr}>
                Click me
            </button>
            {
                count.map((curr,index) => {
                    return(
                        <div key={index}>{curr.name}</div>
                    )
                })
            }
        </div>
    );
}

export default List;