import React, {
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardCard from
"../components/common/DashboardCard";

import {
  getUsers,
} from "../redux/slices/userSlice";

const Dashboard = () => {

  const dispatch = useDispatch();

  const {
    users,
    loading,
  } = useSelector(
    (state) => state.users
  );

  // Load Users
  useEffect(() => {

    dispatch(getUsers());

  }, [dispatch]);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <DashboardCard
            title="Total Users"
            value={users.length}
          />

          <DashboardCard
            title="Admins"
            value={
              users.filter(
                (user) =>
                  user.role === "Admin"
              ).length
            }
          />

          <DashboardCard
            title="Editors"
            value={
              users.filter(
                (user) =>
                  user.role === "Editor"
              ).length
            }
          />

        </div>

      )}

    </div>
  );
};

export default Dashboard;