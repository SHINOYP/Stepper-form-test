"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 50,
  },
  wrapperCol: {
    span: 100,
  },
};

const selectBefore = (
  <Select defaultValue="+10">
    <Option value="+1">+1</Option>
    <Option value="+91">+91</Option>
  </Select>
);
export default function PersonalDetails({
  onFinish,
  handleAddNewCourse,
  formValues,
  currentStep,
}) {
  const formRef = React.useRef(null);
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    console.log(value);
  };

  const {
    name = "",
    mobileNumber = "",
    emailId = "",
    state = "",
    country = "",
    current = "",
  } = formValues || {};

  useEffect(() => {
    form.setFieldsValue({
      name,
      mobileNumber,
      emailId,
      country,
      state,
    });
  }, [formValues, current, name, country, emailId, state, mobileNumber]);

  return (
    <div className="flex w-2/3 rounded-lg shadow-2xl p-10">
      <Form
        {...layout}
        onFinish={onFinish}
        form={form}
        layout="vertical"
        className="w-full"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="mobileNumber"
          label="Mobile number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input addonBefore={selectBefore} />
        </Form.Item>

        <Form.Item
          name="emailId"
          label="Email Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="flex">
          <Form.Item
            name="state"
            label="State"
            rules={[
              {
                required: true,
              },
            ]}
            className="w-1/2"
          >
            <Select placeholder="Course" onChange={onGenderChange} allowClear>
              <Option value="male">India</Option>
              <Option value="female">America</Option>
              <Option value="other">South Africa</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#800080] w-full"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
