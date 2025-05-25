import React, { Component } from 'react';
import { Table, Tooltip } from 'antd';
import type { TableColumnsType } from 'antd';

/*interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}*/

class AntDTable2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayProp: [],
            dataSrc: [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            },]
        };
    }
    render() {
        const { arrayProp } = this.state.dataSrc;

        const columns: TableColumnsType<DataType> = [
            {
                title: 'aid',
                dataIndex: 'aid',
                key: 'aid',
                render: (text) => <a>{text}</a>,
                width: 150,
            },
            {
                title: 'catid',
                dataIndex: 'catid',
                key: 'catid',
                width: 80,
            },
            {
                title: 'dateline',
                dataIndex: 'dateline',
                key: 'dateline',
                ellipsis: {
                    showTitle: false,
                },
                render: (address) => (
                    <Tooltip placement="topLeft" title={address}>
                        {address}
                    </Tooltip>
                ),
            },
            {
                title: 'pic',
                dataIndex: 'pic',
                key: 'pic',
                ellipsis: {
                    showTitle: false,
                },
                render: (address) => (
                    <Tooltip placement="topLeft" title={address}>
                        {address}
                    </Tooltip>
                ),
            },
            {
                title: 'title',
                dataIndex: 'title',
                key: 'title',
                /*ellipsis: {
                    showTitle: false,
                },*/
                render: (text) => <a>{text}</a>,
                /*
                render: (address) => (
                    <Tooltip placement="topLeft" title={address}>
                        {address}
                    </Tooltip>
                ),*/
            },
            {
                title: 'username',
                dataIndex: 'username',
                key: 'username',
                ellipsis: {
                    showTitle: false,
                },
                render: (address) => (
                    <Tooltip placement="topLeft" title={address}>
                        {address}
                    </Tooltip>
                ),
            },
        ];

        const data: DataType[] = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 2 Lake Park, London No. 2 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
            },
        ];
        this.state.dataSrc = this.props;

        console.log('dataSrc:', this.state.dataSrc.dataSrc);
        console.log('props:', this.props);
        const isArray = Array.isArray(data)
        console.log("DataIsArray", isArray);
        const putTable = (dataSrcValue: DataType[]) => {
            console.log(dataSrcValue);
            const isArray = Array.isArray(dataSrcValue)
            console.log("IsArray", isArray);
            if (!Array.isArray(dataSrcValue.dataSrc)) {
                return <div>table1</div>
            }
            else {
                //return <ul>{dataSrcValue.dataSrc.map((value)=>{
                    //return <li>{value.address}</li> 
                    return <Table columns={columns} dataSource={dataSrcValue.dataSrc} />
                //})}
                //</ul>
                //return <div>table2</div>
                }
            
        };

        const isArrayData = Array.isArray(this.state.dataSrc.dataSrc)
        console.log("IsArray", isArrayData);
        return (
            //<Table columns={columns} dataSource={dataSrc} />
            //<div>dataSrc</div>

            /*<ul>{this.state.dataSrc.map((value)=>{
                    return <li>{value.title}</li> 
                })}
                </ul>*/
            putTable(this.state.dataSrc)

            //<div></div>
        );
    }
}

export default AntDTable2;