import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#202020]">
          Let's Create
        </h1>
        <p className="max-w-[500px] text-[16px] text-[#666e75] mt-2">
          Create imaginative and visually stunning images through OpenAPI's
          DALL-E AI and share them with your friends.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Yusuf Tomilola"
            value={form.prompt}
            handleChange={handleChange}
          />

          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="panda mad scientist mixing sparkling chemicals, digital art"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6464] focus:border-[#ff6464] w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="image-preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
