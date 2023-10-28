"use client"

import React, { useState ,useEffect } from "react";
import ContactSuccess from "../component/ContactSuccess"
import Requests from "../component/Requests"
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Button } from "../../components/ui/button";


const ContactFormDetails = [
  {
    field: "username",
    placeholder: "John Smith",
  },
  {
    field: "email",
    placeholder: "name@flowbite.com",
  },
  {
    field: "phone",
    placeholder: "+91- - - - - - - - - -",
  },
];


const  Contacts = () => {
  const [isclient,setIsclient] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(()=>{
    setIsclient(true)
  },[])

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        console.log("Message sent successfully!");
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleInputChange = (event, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  let content;
  if (showSuccessMessage) {
    content = <ContactSuccess/>;
  } else {
    content = (
      <>
      <section className="bg-white dark:bg-gray-900">
      
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <div className="flex flex-row-reverse my-2 ">
      <Requests/>
              </div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {"Share your thought here .."}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
         {" Got a Thought and share with your friends ? Happy sharing."}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {ContactFormDetails.map((item, index) => (
            <div key={index}>
              <label
                htmlFor={`field-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.field}
              </label>
              <input
                type="text"
                id={`field-${index}`}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={item.placeholder}
                required
                onChange={(event) => handleInputChange(event, item.field.toLowerCase())}
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              onChange={(event) => handleInputChange(event, "subject")}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
            {"  Your message"}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              onChange={(event) => handleInputChange(event, "message")}
            ></textarea>
          </div>
          <Button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-200 sm:w-fit dark:bg-gray-700
            hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-400 dark:focus:ring-primary-800"
          >
          {"  Send message"}
          </Button>
        </form>
      </div>
    </section>
    </>
    );
  }

  return (
  <>
     {content}
  </>
  );
}

export default Contacts;