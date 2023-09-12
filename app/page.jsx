"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Divider, Steps, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useFormUpdate } from "../context/course.context";
import CourseForm from "./componets/CourseForm";
import PersonalDetails from "./componets/PersonalDetails";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const [btnNewCourse, setBtnNewCourse] = useState(true);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form, setForm] = useFormUpdate();
  const [items, setItems] = useState([
    {
      title: "Personal Details",
    },
    {
      title: "Course one",
    },
  ]);
  // State to store form values
  const [formValues, setFormValues] = useState({
    courseName: "",
    expectedSkills: "",
    preferredLanguage: "",
    description: "",
  });
  const router = useRouter();

  // Update formValues when data or current changes
  React.useEffect(() => {
    if (data[current]) {
      setFormValues({
        courseName: data[current]?.courseName,
        expectedSkills: data[current]?.expectedSkills,
        preferredLanguage: data[current]?.preferredLanguage,
        description: data[current]?.whydoyou,
        current: data[current]?.current,
        courseLevel: data[current]?.courseLevel,
      });
    }
  }, [data, current]);

  const onChange = (value) => {
    setCurrent(value);
  };

  const onFormSubmit = async (values) => {
    const indexToUpdate = data.findIndex((obj) => obj.current === current);

    if (indexToUpdate !== -1) {
      const updatedData = [...data];
      updatedData[indexToUpdate] = { ...values, current: current };
      setData(updatedData);
    } else {
      const newData = [...data, { ...values, current: current }];
      setData(newData);
    }

    setCurrent(current + 1);
    setBtnNewCourse(true);
    if (items.length != current + 2) {
      setOpen(true);
    }
  };

  const onAddNewCourse = () => {
    const courseTitles = ["Course two", "Course three", "Course four"];

    if (current >= 1 && current <= courseTitles.length) {
      const newItem = [
        ...items,
        {
          title: courseTitles[current - 1],
        },
      ];
      setItems(newItem);
    } else {
      console.log("Invalid current value.");
    }
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setForm(data);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    router.push(`/displayPage`);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setCurrent(data.length - 1);
    setOpen(false);
  };
  return (
    <main className="flex min-h-screen max-w-[1200px] mx-auto items-center justify-between p-24">
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={items}
        className="mb-[30%] "
      />
      <div className="flex w-screen">
        {current === 0 ? (
          <PersonalDetails onFinish={onFormSubmit} formValues={data[0]} />
        ) : (
          ""
        )}
        {data.length >= 1 && current != 0 ? (
          <CourseForm
            onFinish={onFormSubmit}
            handleAddNewCourse={onAddNewCourse}
            formValues={formValues}
            currentStep={current}
            btnDisable={btnNewCourse}
            setBtnDisable={setBtnNewCourse}
          />
        ) : null}

        <Modal
          title="Submit Form"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Are your sure ? </p>
        </Modal>
      </div>
    </main>
  );
}
