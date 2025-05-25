import React, { Component } from 'react';
import { Button, Layout, Menu, theme, message, Upload } from 'antd';
import axios from "axios";
import AntDTable2 from './AntDTable2';
//import { response } from 'express';
//resolve.fallback: { "url": require.resolve("url/") };
class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
            .then(response => {
                // 处理成功的响应
                console.log('Data:', response.data.result);
                this.setState(
                    {
                        list: response.data.result
                    }
                )
            })
            .catch(error => {
                // 处理错误
                console.error('Error:', error);
            })
    }
    render() {
        const dataSrcValue = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park Primary After',
        },]
        return (
            <div>
                <Button type="primary" onClick={this.getData}>Primary Button</Button>
                <AntDTable2 dataSrc={this.state.list} />

                <ul>{this.state.list.map((value, key) => {
                    return <li key={key}>{value.title}</li>
                })}
                </ul>


            </div>
        );
    }
}

export default Axios;