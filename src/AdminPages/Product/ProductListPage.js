import { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom'




function ProductListPage() {
   const navigate = useNavigate()
   const [productList, setproductList] = useState(data);
   const [totalCount, settotalCount] = useState(5);
   const [page, setpage] = useState(0);
   const [pageSize, setpageSize] = useState(5);

   // For Pagination And List
   useEffect(() => {
      const url = new URL("http://localhost:5268/api/products")
      const params = { page:page, pageSize:pageSize }
      url.search = new URLSearchParams(params).toString();

      const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      fetch(url, requestOptions)
         .then(response => response.json())
         .then(datas => {
            setproductList(datas.products)
            settotalCount(datas.totalCount)
         });
   }, [pageSize, page]);

   const onChange = (pageNumber, pageSize) => {
      //pagination için
      setpage(pageNumber - 1)
      setpageSize(pageSize)
   };


   const DeleteBtnClick = (e) =>{
      const product_id = e.target.id
      const url = new URL("http://localhost:5268/api/products/" + product_id.toString())
      const requestOptions = {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
      };
      fetch(url, requestOptions)
         .then(response => response.json())
         .then(window.location.reload());
   }
   
   const columns = [
      {
         title: '#',
         dataIndex: 'id',
         key: 'id',
         render: (text, record) => (
            <a href={record.id + "/edit"}>{text}</a>
         ),
      },
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
         dataIndex: 'createdAt',
         key: 'createdAt',
      },
      {
         title: 'Updated Date',
         dataIndex: 'updatedAt',
         key: 'updatedAt',
      },
      {
         title: 'Action',
         key: 'action',
         render: (_, record) => (
            <Space size="middle">
               <a href={record.id + "/edit"}>Edit</a>
               <a onClick={DeleteBtnClick} id={record.id}>Delete</a>
            </Space>
         ),
      }
    ];
    var data = [
      // {
      //    key: '3',
      //    id: 4,
      //    name: 'Joe Black',
      //    stock: 32,
      //    updated_date: 'Sydney No. 1 Lake Park',
      //    created_date: 'New York No. 1 Lake Park',
      //    tags: ['cool', 'teacher'],
      // },
   ];

   


   return (
      <div>
         <div className='d-flex justify-content-end'>
            <Button onClick={() => {navigate(`/admin/products/add/`)}} className='m-2 me-2' type="primary" ghost>Ürün Ekle +</Button>
         </div>
         <Table columns={columns} dataSource={productList} rowKey={(record) => record.id}
            pagination={{ defaultPageSize: pageSize, showSizeChanger: true, pageSizeOptions: ['10', '25', '50'], total:totalCount, onChange:onChange }}
         />
      </div>
   )
}

export default ProductListPage

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