import React from 'react'
import './UI.less'
import {
  Form,
  Input,
  Select,
  AutoComplete
} from 'antd';

import countries from './phone'
type countryType = keyof typeof countries;

const UI: React.FunctionComponent = () => {

  const [form] = Form.useForm();

  const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
  ];

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <div className="ui-container">
      <div className="setting-mask">
        <div className="setting-title">
          <div className="line"></div>
          个人信息设置-陈洪1
        </div>
        <div className="setting-container">
          <div className="info-title">
            <div className="icon-base"></div>
            基本信息
          </div>
          <Form.Item label="头像">
            <div className="user-avatar">
              <img src="https://pic1.zhimg.com/v2-25b6b7f4fc5d5cf9ebf2e65658bd9824_b.png" alt="" />
              <div className="icon-upload"></div>
            </div>
          </Form.Item>
          <Form.Item
            label="工作状态"
            hasFeedback
            rules={[{ required: true, message: '请选择工作状态' }]}
          >
            请选择工作状态
          </Form.Item>
          <div className="form-inline-group">
            <Form.Item
              label="昵称"
            >
              <Input placeholder="请输入传真昵称" />
            </Form.Item>
            <Form.Item
              label="电子邮箱"
              rules={[{ required: true }]}
            >
              <Input placeholder="Input birth month" disabled />
            </Form.Item>
          </div>
          <Form.Item
            label="办公位置"
            rules={[{ required: true }]}
          >
            <Select options={areas} onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="岗位名称"
            rules={[{ required: true }]}
          >
            <Input placeholder="Input birth month" style={{ width: '50%' }} disabled />
          </Form.Item>
          <Form.Item
            label="岗位描述"
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder="请输入岗位描述" allowClear />
          </Form.Item>
          <div className="info-title">
            <div className="icon-base"></div>
            联系方式
          </div>
          <div className="form-inline-group">
            <Form.Item
              label="座机"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入传真昵称" />
            </Form.Item>
            <Form.Item
              label="手机号码"
              rules={[{ required: true }]}
            >
              <Input.Group compact>
                <Select defaultValue="86" style={{ width: '30%' }}>
                  {countries && Object.keys(countries).map((item) => {
                    return <Select.Option key={`${countries[item as countryType].name}`} value={countries[item as countryType].dialCode}>{countries[item as countryType].name}</Select.Option>
                  })}
                </Select>
                <AutoComplete
                  style={{ width: '70%' }}
                  placeholder="Email"
                  options={[{ value: 'text 1' }, { value: 'text 2' }]}
                />
              </Input.Group>
            </Form.Item>
          </div>
          <div className="form-inline-group">
            <Form.Item
              label="IP电话"
            >
              <Input placeholder="请输入紧急联系电话" />
            </Form.Item>
            <Form.Item
              label="家庭电话"
            >
              <Input placeholder="请输入家庭电话" />
            </Form.Item>
          </div>
          <div className="form-inline-group">
            <Form.Item
              label="传真"
            >
              <Input placeholder="请输入传真号码" />
            </Form.Item>
            <Form.Item
              label="紧急联系人"
            >
              <Input placeholder="请输入紧急联系人" />
            </Form.Item>
          </div>
          <Form.Item
            label="其他联系方式："
          >
            <Input placeholder="请输入紧急联系人" style={{ width: '50%' }} />
          </Form.Item>
          <div className="info-title">
            <div className="icon-base"></div>
            代理信息
          </div>
          <Form.Item
            label="代理人"
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder="请输入紧急联系人" allowClear />
          </Form.Item>
          <Form.Item
            label="代理描述"
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder="请输入代理说明" allowClear />
          </Form.Item>
          <div className="btn-group">
            <div className="btn-close">取消</div>
            <div className="btn-confirm">确定</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI