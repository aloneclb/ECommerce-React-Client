import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import { useState } from 'react';

function FileUploadComponent() {
   const dummyRequest = ({ file, onSuccess }) => {
      // console.log(file)
      onSuccess("ok");
   };
   const selectedFileList = []
   const nextState = {};
   
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

         default:
            const index = selectedFileList.indexOf(info.file);
            const x = selectedFileList.splice(index, 1);
            // error or removed
            selectedFileList.map((item) => {
               console.log(item.uid)
            })

      }
      console.log(nextState);
   }

  return (
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
  )
}

export default FileUploadComponent
