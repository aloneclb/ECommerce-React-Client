import { useEffect, useState } from 'react'
import { Button, Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom'


const columns = [
   {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
   },
   {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
   },
   {
      title: 'Created Date',
      dataIndex: 'created_date',
      key: 'created_date',
   },
   {
      title: 'Updated Date',
      dataIndex: 'updated_date',
      key: 'updated_date',
   },
   // {
   //    title: 'Tags',
   //    key: 'tags',
   //    dataIndex: 'tags',
   //    render: (_, { tags }) => (
   //       <>
   //       {tags.map((tag) => {
   //          let color = tag.length > 5 ? 'geekblue' : 'green';
   //          if (tag === 'loser') {
   //             color = 'volcano';
   //          }
   //          return (
   //             <Tag color={color} key={tag}>
   //             {tag.toUpperCase()}
   //             </Tag>
   //          );
   //       })}
   //       </>
   //    ),
   // },
   {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
         <Space size="middle">
         <a>Edit</a>
         <a>Delete</a>
         </Space>
      ),
   },
 ];
 var data = [
   {
      key: '1',
      name: 'John Brown',
      stock: 32,
      updated_date: 'New York No. 1 Lake Park',
      created_date: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
   },
   {
      key: '2',
      name: 'Jim Green',
      stock: 42,
      updated_date: 'London No. 1 Lake Park',
      created_date: 'New York No. 1 Lake Park',
      tags: ['loser'],
   },
   {
      key: '3',
      id: 4,
      name: 'Joe Black',
      stock: 32,
      updated_date: 'Sydney No. 1 Lake Park',
      created_date: 'New York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
   },
 ];

function ProductListPage() {
   const navigate = useNavigate()
   const [productList, setproductList] = useState(data);

   useEffect(() => {
      var a = [];
      const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      fetch('http://localhost:5268/api/products', requestOptions)
         .then(response => response.json())
         .then(datas => setproductList(datas));
   }, []);

   return (
      <div>
         <div className='d-flex justify-content-end'>
            <Button onClick={() => {navigate(`/admin/products/add/`)}} className='m-2 me-2' type="primary" ghost>Ürün Ekle +</Button>
         </div>
         <Table columns={columns} dataSource={productList} 
            pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
         />
      </div>
   )
}

export default ProductListPage