import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaImages } from "react-icons/fa";

const Category = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const data = [
    {
      id: 1,
      image: "http://localhost:3000/images/category/1.jpg",
      name: "Category 1",
    },
    {
      id: 2,
      image: "http://localhost:3000/images/category/2.jpg",
      name: "Category 2",
    },
    {
      id: 3,
      image: "http://localhost:3000/images/category/3.jpg",
      name: "Category 3",
    },
    {
      id: 4,
      image: "http://localhost:3000/images/category/4.jpg",
      name: "Category 4",
    },
    {
      id: 5,
      image: "http://localhost:3000/images/category/5.jpg",
      name: "Category 5",
    },
  ];

  return (
    <div className="px-4 lg:px-8 pt-5">
      <div className="flex flex-wrap gap-5">
        {/* Category List Section */}
        <div className="w-full lg:w-7/12 bg-white shadow-md rounded-md">
          {/* Table Header */}
          <div className="h-14 bg-slate-600 rounded-t-md flex justify-between items-center px-4">
            <select
              onChange={(e) => setPerPage(parseInt(e.target.value))}
              className="px-3 py-2 rounded font-semibold"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="hidden md:block bg-white border border-gray-300 h-10 px-3 py-1 rounded focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Search"
            />
          </div>
          {/* Table Body */}
          <div className="p-4">
            <table className="table-auto w-full text-center border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">No</th>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Category Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-100 h-[60px] border-t"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex justify-center gap-3">
                        <Link
                          to="#"
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <LiaEditSolid />
                        </Link>
                        <Link
                          to="#"
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <MdAutoDelete />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                perPage={perPage}
                showItem={3}
              />
            </div>
          </div>
        </div>

        {/* Add New Category Section */}
        <div className="w-[320px] lg:w-4/12 bg-slate-600 shadow-md rounded-md p-5">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white text-center">
              Add New Category
            </h2>
          </div>

          {/* Add Category Form Placeholder */}
          <form className="mt-10 flex flex-col gap-3">
            <div>
              <label htmlFor="categoryName " className="text-white">
                Category Name
              </label>
              <input
                id="categoryName"
                name="categoryName"
                type="text"
                placeholder="Category Name"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex w-full border border-dashed ">
              <label
                htmlFor="image"
                className=" h-[238px] w-full flex flex-col justify-center items-center cursor-pointer text-white "
              >
                <span>
                  <FaImages />
                </span>
                <span>Upload image</span>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
