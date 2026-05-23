import React from "react";

const DashboardCard = ({
  title,
  value,
}) => {

  console.log(
    `${title} rendered`
  );

  return (
    <div className="
      bg-white
      dark:bg-gray-800
      dark:text-white
      shadow-md
      rounded-xl
      p-6
    ">

      <h3 className="text-gray-500 dark:text-gray-300 text-lg">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>

    </div>
  );
};

export default React.memo(
  DashboardCard
);