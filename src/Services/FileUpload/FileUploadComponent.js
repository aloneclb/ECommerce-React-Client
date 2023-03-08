import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { useState } from 'react';
import { paste } from '@testing-library/user-event/dist/paste';

function FileUploadComponent() {
   
   const selectedFileList = []
   const nextState = {};
   var datas = new FormData()
  
   const dummyRequest = ({ file, onSuccess }) => {
      datas.append("images", file)
      console.log(datas.getAll("images"))
      onSuccess("ok");
   };

   const imageRemove = () =>{
      console.log(datas.getAll("images"))
   }

   const Deneme = (info) => {
      switch (info.file.status) {
         case "uploading":
            break;
         case "error":
            break;

         case "done":
            selectedFileList.push(info.file)
            nextState.selectedFileList = selectedFileList;
            break;

         case "removed":
            imageRemove();
            break;

         // default:
         //    break;

      }
   }

   const deneme = (e) => {
      const url = new URL("http://localhost:5268/api/products/upload")

      const requestOptions = {
         method: 'POST',
         // headers: { 'Content-Type': 'application/json' },
         body: datas
      };
      fetch(url, requestOptions)
         .then(response => response.json())
         .then(datas => console.log("data"));
   };

  return (
      <div>
      <Form.Item label="Upload" valuePropName="fileList">
         <Upload action="/upload.do" listType="picture-card" customRequest={dummyRequest} multiple onChange={Deneme}>
         <div>
            <PlusOutlined />
            <div
               style={{
               marginTop: 8,
               }}
            >
               Upload
            </div>
         </div>
         </Upload>
      </Form.Item>
      <button onClick={deneme}>gönder</button>
      </div>
  )
}

export default FileUploadComponent
