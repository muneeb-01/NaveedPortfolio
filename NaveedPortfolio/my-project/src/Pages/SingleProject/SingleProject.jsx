<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
const SingleProject = () => {
  document.body.setAttribute("theme", "white");
=======
import React,{useEffect, useState} from "react";
import { motion } from "framer-motion";
import {useParams} from "react-router-dom";
import {apiClient} from "../../lib/api-client";
import {GET_PROJECT_BY_ID,HOST} from "../../utils/constants";

const SingleProject = () => {
  document.body.setAttribute("theme", "white");
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    if(!project){
      getProjectById(id);
    }
  },[project])

  const getProjectById = async (id) => {
    try {
      const response = await apiClient.get(GET_PROJECT_BY_ID + id, {withCredentials: true});  
      if(response.status === 200){
        const project = response.data.project;
        setProject(prevProject => ({...prevProject, ...project }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if(!project){
    return <div>Loading...</div>;
  }
  console.log(project);
>>>>>>> e504340 (updated repository using laptop)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      className=" w-full"
    >
<<<<<<< HEAD
      <LandingPage />
      <TextContainer />
      <PictureContainer1 />
      <PictureContainer2 />
      <PictureContainer1 />
=======
      <LandingPage title = {project.title} imageUrl = {project.imagesUrl[0]} />
      <TextContainer description = {project.description} type={project.Type} />
      <PictureContainer1 imageUrl = {project.imagesUrl[1]} />
      <PictureContainer2 imageUrls = {project.imagesUrl.slice(2,4)} />
      <PictureContainer1 imageUrl = {project.imagesUrl[4]} />
>>>>>>> e504340 (updated repository using laptop)
    </motion.div>
  );
};

export default SingleProject;

<<<<<<< HEAD
const LandingPage = () => {
  return (
    <div className="w-full h-screen relative">
      <img src="/images/ext_2.jpg" className="w-full h-screen" alt="" />
      <div className="w-full h-screen bg-black opacity-15 absolute top-0 left-0"></div>
      <h1 className="text-6xl font-signature font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        Urban Oasis
=======
const LandingPage = ({title,imageUrl}) => {
  return (
    <div className="w-full h-screen relative">
      <img src={HOST+imageUrl} className="w-full h-screen" alt="" />
      <div className="w-full h-screen bg-black opacity-15 absolute top-0 left-0"></div>
      <h1 className="text-6xl font-signature font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {title}
>>>>>>> e504340 (updated repository using laptop)
      </h1>
    </div>
  );
};

<<<<<<< HEAD
const TextContainer = () => {
  return (
    <div className="w-full grid grid-cols-[65%_35%] text-lg text-slate-600 px-[10rem] py-[5rem]">
      <div className="font-Gilgan">
        Interior design and architecture aim to weave functionality and
        aesthetics into a tapestry of innovation, comfort, and expression. By
        embracing sustainability, adapting to evolving needs, and honoring
        cultural contexts, these disciplines transform spaces into living art,
        enriching the human experience with purpose and beauty.
      </div>
      <div className="font-Gilgan text-right">Residential</div>
=======
const TextContainer = ({description,type}) => {
  return (
    <div className="w-full grid grid-cols-[65%_35%] text-lg text-slate-600 px-[10rem] py-[5rem]">
      <div className="font-Gilgan">
        {description}
      </div>
      <div className="font-Gilgan text-right">{type}</div>
>>>>>>> e504340 (updated repository using laptop)
    </div>
  );
};

<<<<<<< HEAD
const PictureContainer1 = () => {
  return (
    <div className="w-full flex justify-center">
      <img src="/images/ext_2.jpg" className="w-[70%] h-[70%]" alt="" />
=======
const PictureContainer1 = ({imageUrl}) => {
  return (
    <div className="w-full flex justify-center">
      <img src={HOST+imageUrl} className="w-[70%] h-[70%]" alt="" />
>>>>>>> e504340 (updated repository using laptop)
    </div>
  );
};

<<<<<<< HEAD
const PictureContainer2 = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[65%_35%] text-lg text-slate-600 px-[5rem] py-[5rem]">
      <div>
        <img src="/images/ext_2.jpg" className="w-full h-full" alt="" />
      </div>
      <div className="flex justify-end items-center">
        <img src="/images/ext_2.jpg" className="w-[60%] h-[30%]" alt="" />
=======
const PictureContainer2 = ({imageUrls}) => {
  return (
    <div className="w-full h-screen grid grid-cols-[65%_35%] text-lg text-slate-600 px-[5rem] py-[5rem]">
      <div>
        <img src={HOST+imageUrls[0]} className="w-full h-full" alt="" />
      </div>
      <div className="flex justify-end items-center">
        <img src={HOST+imageUrls[1]} className="w-[60%] h-[30%]" alt="" />
>>>>>>> e504340 (updated repository using laptop)
      </div>
    </div>
  );
};
