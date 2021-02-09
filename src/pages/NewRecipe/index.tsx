import { Button, Form, Input } from "antd";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  formats,
  modules,
} from "../../components/EditorToolbar";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/lib/upload/Dragger";
import { UploadChangeParam } from "antd/lib/upload";
import { RcCustomRequestOptions, UploadFile } from "antd/lib/upload/interface";
import { gql, useMutation } from "@apollo/client";

interface Props {}

export const NewRecipe = (props: Props) => {
  const addImage = (info: UploadChangeParam<UploadFile<any>>) => {
    console.log(info);
  };
  const dummyRequest = ({ file, onSuccess }: RcCustomRequestOptions) => {
    setTimeout(() => {
      onSuccess({ status: 200 }, file);
    }, 0);
  };

  const ADD_RECIPE = gql`
    mutation addRecipe($title: String!, $description: String!) {
        addRecipe(title: $title, description: $description) {
            id,
            title
        }
    }
  `;

  const [addRecipe] = useMutation(ADD_RECIPE);

  const submit = (values: any) => {
    addRecipe({variables: values}).then(result => {
        console.log(result);
    }).catch(e =>  {
        console.log(e);
    });
  };

  const [form] = Form.useForm();

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        form={form}
        wrapperCol={{ span: 14 }}
        onFinish={submit}
      >
        <Form.Item label="Título" name="title" required>
          <Input />
        </Form.Item>
        <EditorToolbar />
        <Form.Item name="description" required wrapperCol={{ span: 24 }}>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={"Digite aqui sua receita..."}
          />
        </Form.Item>
        <Dragger onChange={addImage} customRequest={dummyRequest}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Clique ou arraste para essa para adicionar uma imagem da sua receita
          </p>
        </Dragger>
        <Form.Item style={{ marginTop: 10, float: "right" }}>
          <Button type="primary" htmlType="submit" onClick={submit}>
            Salvar
          </Button>
        </Form.Item>
        <Form.Item style={{ marginTop: 10, float: "right" }}>
          <Button onClick={() => resetForm()}>Cancelar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
