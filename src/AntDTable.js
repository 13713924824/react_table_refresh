import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface User {
  key: number;
  name: string;
}

const columns: TableColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
  },
    {
    key: 0,
    name: 'Jack',
  },
    {
    key: 0,
    name: 'Jack',
  },
    {
    key: 0,
    name: 'Jack',
  },
    {
    key: 0,
    name: 'Jack',
  },
];

const AntDTable: React.FC = () => (
  <>
    <Table columns={columns} dataSource={data} />
    {/* 使用 JSX 风格的 API */}
    <Table dataSource={data}>
      <Table.Column key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);

export default AntDTable;