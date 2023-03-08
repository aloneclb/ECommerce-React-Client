import React from 'react'
import {	Form } from 'antd';
import FileUploadComponent from './../../../Services/FileUpload/FileUploadComponent'

function ProductAddForm() {
  return (
		<div>
			<Form labelCol={{ span: 4 }}
			wrapperCol={{
				span: 14,
			}}
			layout="horizontal"
			style={{
				maxWidth: 600,
			}}>

			<FileUploadComponent />
			</Form>
		
		</div>
  )
}

export default ProductAddForm
