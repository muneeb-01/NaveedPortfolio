import React, { useState } from "react";
import { apiClient } from "../../lib/api-client";
import { useAppStore } from "../../Store";
import {
  ADD_LANDING_PAGE_INFO_ROUTE,
  ADMIN_LOGOUT_ROUTE,
} from "../../utils/constants";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const handleLogout = async () => {
    try {
      const responce = await apiClient.get(ADMIN_LOGOUT_ROUTE, {
        withCredentials: true,
      });
      if (responce.status === 200) {
        setUserInfo(undefined);
        window.location.reload;
      }
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen relative">
      <button
        onClick={handleLogout}
        className="px-3 py-1 rounded-full fixed top-4 right-5 text-white font-poppins text-sm bg-red-600"
      >
        LOGOUT
      </button>
      <LandingPageInfo />
    </div>
  );
};
export default AdminProfile;

const LandingPageInfo = () => {
  const [paragraph_1, setParagraph_1] = useState("");
  const [paragraph_2, setParagraph_2] = useState("");

  const isValid = () => {
    if (paragraph_1.length == 0) {
      toast.info("Enter paragraph 1.");
      return false;
    }
    if (paragraph_2.length == 0) {
      toast.info("Enter paragraph 2.");
      return false;
    }
    return true;
  };

  const updateLandingInfo = async () => {
    if (isValid()) {
      try {
        const responce = await apiClient.post(
          ADD_LANDING_PAGE_INFO_ROUTE,
          { paragraph_1, paragraph_2 },
          {
            withCredentials: true,
          }
        );
        console.log(responce);
      } catch (error) {}
    }
  };
  return (
    <div className="w-full text-white py-6">
      <h1 className="font font-Gilgan text-xl pt-20 pb-6 text-center">
        Add Landing Page Paragraphs
      </h1>
      <form
        onSubmit={updateLandingInfo}
        className="flex flex-col gap-6 font-poppins justify-center items-center"
      >
        <div className="w-[60%]">
          <label
            htmlFor="paragraph_1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Paragraph 1
          </label>
          <textarea
            id="paragraph_1"
            value={paragraph_1}
            onChange={(e) => setParagraph_1(e.target.value)}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="w-[60%]">
          <label
            htmlFor="paragraph_2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Paragraph 2
          </label>
          <textarea
            id="paragraph_2"
            rows="4"
            value={paragraph_2}
            onChange={(e) => setParagraph_2(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </form>
    </div>
  );
};

const AddProjects = () => {
  return <div className="w-full"></div>;
};
