"use client";
import React, { useEffect, useState } from "react";
import { Button, Descriptions, Form, Input, Select } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import { data } from "autoprefixer";

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

function CourseForm({
  onFinish,
  handleAddNewCourse,
  formValues,
  currentStep,
  btnDisable,
  setBtnDisable,
}) {
  const formRef = React.useRef(null);

  // Destructure values directly from formValues prop
  const {
    courseName = "",
    expectedSkills = "",
    preferredLanguage = "",
    description = "",
    current,
    courseLevel,
  } = formValues || {};

  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    console.log(value);
  };
  useEffect(() => {
    // Set initial values for form
    if (formValues && currentStep === current) {
      form.setFieldsValue({
        courseName,
        expectedSkills,
        preferredLanguage,
        whydoyou: description,
        courseLevel,
      });
    } else {
      form.setFieldsValue({
        courseName: "",
        expectedSkills: "",
        preferredLanguage: "",
        whydoyou: "",
        courseLevel: "",
      });
    }
  }, [
    form,
    formValues,
    currentStep,
    current,
    courseName,
    expectedSkills,
    preferredLanguage,
    description,
  ]);

  const handleAddCourse = () => {
    handleAddNewCourse();
    setBtnDisable(false);
  };

  return (
    <div className="flex w-2/3 rounded-lg shadow-2xl p-10">
      <Form
        {...layout}
        layout="vertical"
        className="w-full"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="courseLevel"
          label="Course level"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Course" onChange={onGenderChange} allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="courseName"
          label="Course Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="expectedSkills"
          label="Expected Skills"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="preferredLanguage"
          label="Preferred Language"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="whydoyou" label="Why do you want to join us">
          <TextArea rows={4} />
        </Form.Item>
        <div className="flex ">
          {currentStep === 4 ? null : btnDisable ? (
            <Button
              htmlType="button"
              className="mr-4"
              onClick={handleAddCourse}
            >
              Add Course
            </Button>
          ) : (
            <Button
              htmlType="button"
              className="mr-4"
              disabled
              onClick={handleAddCourse}
            >
              Add Course
            </Button>
          )}

          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#800080] w-full"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default CourseForm;
