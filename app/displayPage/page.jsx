"use client";
import { useFormUpdate } from "../../context/course.context";

export default function Page() {
  const [form, setForm] = useFormUpdate();
  return (
    <section className="flex  flex-col max-w-[1300px] mx-auto">
      <div className="flex gap-10 mt-6 p-6  w-full ">
        <h2>
          Name: <span className="font-bold text-lg">{form[0]?.name}</span>
        </h2>
        <h2>
          Mobile Number:{" "}
          <span className="font-bold text-lg">{form[0]?.mobileNumber}</span>
        </h2>
        <h2>
          Email Id:{" "}
          <span className="font-bold text-lg">{form[0]?.emailId}</span>
        </h2>
        <h2>
          State: <span className="font-bold text-lg">{form[0]?.state}</span>
        </h2>
        <h2>
          Country: <span className="font-bold text-lg">{form[0]?.country}</span>
        </h2>
      </div>
      <div>
        {form?.slice(1).map((item, index) => (
          <div
            className="flex flex-wrap gap-5 p-6 bg-gray-100 w-full shadow-xl rounded-lg mt-4"
            key={index}
          >
            <h2>
              Course Level:{" "}
              <span className="font-bold text-lg">{item?.courseLevel}</span>
            </h2>
            <h2>
              Course Name:{" "}
              <span className="font-bold text-lg">{item?.courseName}</span>
            </h2>
            <h2>
              Expected Skills:{" "}
              <span className="font-bold text-lg">{item?.expectedSkills}</span>
            </h2>
            <h2>
              Preferred Language:{" "}
              <span className="font-bold text-lg">
                {item?.preferredLanguage}
              </span>
            </h2>
            <h2>
              Why do you want to join us:{" "}
              <span className="font-bold text-lg">{item?.whydoyou}</span>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
