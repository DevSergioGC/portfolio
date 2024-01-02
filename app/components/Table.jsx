import React from "react";

const Table = ({ data }) => {
  return (
    <div class="relative overflow-x-auto max-h-100">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-light-shadow-box dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(data[0]).map((title, index) => (
              <th scope="col" class="px-6 py-3" key={index}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td class="px-6 py-4">{item.description}</td>
              <td class="px-6 py-4">{item.link}</td>
              <td class="px-6 py-4">{item.image}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
