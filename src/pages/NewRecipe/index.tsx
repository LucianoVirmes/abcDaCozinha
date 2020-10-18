import { Form, Input } from 'antd';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { formats, modules } from '../../components/EditorToolbar';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import { UploadChangeParam } from 'antd/lib/upload';
import { RcCustomRequestOptions, UploadFile } from 'antd/lib/upload/interface';


interface Props {

}

export const NewRecipe = (props: Props) => {
    const [value, setValue] = useState('');

    const addImage = (info: UploadChangeParam<UploadFile<any>>) => {
       console.log(info)
      } 
      const dummyRequest = ({ file, onSuccess }: RcCustomRequestOptions) => {
        setTimeout(() => {
          onSuccess({status:200}, file);
        }, 0);
      };  

    return (
        <div>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                <Form.Item label="Título" required >
                    <Input />
                </Form.Item>
                <EditorToolbar />
                <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} placeholder={"Digite aqui sua receita..."} />
                <Dragger onChange={addImage} customRequest={dummyRequest}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Clique ou arraste para essa para adicionar uma imagem da sua receita</p>
                </Dragger>
            </Form>

        </div>
    )
}
