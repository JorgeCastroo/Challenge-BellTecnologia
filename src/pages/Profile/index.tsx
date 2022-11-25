import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../store/reducers/types";

interface Props {
  user: User;
}
const Profile: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="items-center flex  flex-col justify-center p-40">
      <img className="w-96 rounded-full" src={user.picture.large}></img>
      <div className="overflow-hidden bg-white w-full shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-3xl font-bold leading-6 text-gray-900">
            {user.login.username}
          </h3>
          <p className="mt-4 max-w-2xl text-sm text-gray-500">
            {user.login.uuid}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.name.first + " " + user.name.last}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Gender:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.gender[0].toUpperCase() + user.gender.substring(1)}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.dob.age} years
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">E-mail:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.cell}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.location.street.name +
                  ", " +
                  user.location.street.number +
                  ", " +
                  user.location.state +
                  ", " +
                  user.location.country}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <button onClick={() => navigate("/")}>
        <div className="flex p-32 items-center">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="text-md font-bold">Voltar</div>
        </div>
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.userReducer.userMode,
});

export default connect(mapStateToProps)(Profile);
