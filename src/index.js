//import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import {CardChecklist} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
//import { Button } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
//import { UploadOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, message, Upload } from 'antd';
import Axios from "./Axios";
import AntDTable from './AntDTable';
import AntDTable1 from "./AntDTable1"
import AntDtable2 from "./AntDTable2"
//import { process } from 'process/browser';
//window.process = process;
// 先导入 polyfill 修复原型链问题
import 'core-js/stable'; // 包含 Object.assign 等核心 polyfill
import 'object.assign'; // 确保 Object.create 正确处理原型
const { Header, Sider, Content } = Layout;
/*const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();}*/
const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function fetchTodos(){
  return[
    {
      id:1,
      title:"吃饭",
      completed:false,
    },
    {
      id:2,
      title:"刷牙",
      completed:false,
    },
    {
      id:3,
      title:"喝水",
      completed:false,
    },
    {
      id:4,
      title:"洗澡,睡觉,做梦,遐想",
      completed:true,
    }
  ]
}

function App() {
  const todos = fetchTodos();
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
    <Container>
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '用户组件',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '产能规划',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '需求规划',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 900,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
           {todos.map((todo) => (
          <InputGroup key={todo.id}>
            <InputGroup.Checkbox checked={todo.completed} />
            <FormControl
             value={todo.title}
             style={{textDecoration:todo.completed ? "line-through 4px" : "nine"}}
            />
          </InputGroup>
          
        /*<li>
          <input type="checknox" defaultChecked={todo.completed}/>
          <label>(todo.completed)</label>
        </li>)*/))}
        <Button type="primary">Primary Button</Button>
        <Upload {...props}>          
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  <Axios/>

  
        </Content>
      </Layout>
    </Layout>
       
        
      </Container>
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
