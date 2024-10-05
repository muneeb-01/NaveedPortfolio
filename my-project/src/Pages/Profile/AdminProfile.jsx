import React from "react";
import { apiClient } from "../../lib/api-client";
import { useAppStore } from "../../Store";
import { ADMIN_LOGOUT_ROUTE } from "../../utils/constants";

const AdminProfile = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const handleLogout = async () => {
    const responce = await apiClient.get(ADMIN_LOGOUT_ROUTE, {
      withCredentials: true,
    });
    if (responce.status === 200) {
      setUserInfo(undefined);
      window.location.reload;
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
  const updateLandingInfo = () => {};
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
