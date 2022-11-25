import React, { useEffect, useState } from "react";
import CardUser from "../../components/CardUser/Index";
import { useApi } from "../../services/api";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/reducers/actions";
import Pagination from "../../components/Pagination/Index";
import { useNavigate } from "react-router-dom";
import { User } from "../../store/reducers/types";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = useApi();
  const [user, setUser] = useState([]);

  const [itensPerpage, setItensPerpage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = user.length / itensPerpage;

  const startIndex = currentPage * itensPerpage;
  const endIndex = startIndex + itensPerpage;
  const currentItens = user.slice(startIndex, endIndex);

  async function GetUser() {
    const data = await api.getUser();
    setUser(data.results);
  }

  useEffect(() => {
    setTimeout(() => {
      GetUser();
    }, 1000);
  }, []);

  function HandleViewProfile(profile: User) {
    dispatch(updateUser(profile));
    navigate(`/profile/${profile.login.md5}`);
  }

  return (
    <div className="py-5 items-center flex  flex-col justify-center ">
      <Header />
      <div className="z-50">
        {currentItens &&
          currentItens.map((user: any) => (
            <CardUser
              key={user.id.value}
              image={user.picture.medium}
              city={user.location.city}
              country={user.location.country}
              email={user.email}
              name={user.name.first + " " + user.name.last}
              phone={user.phone}
              action={() => HandleViewProfile(user)}
            />
          ))}
      </div>
      {user && (
        <Pagination
          next={() =>
            currentPage === pages ? "" : setCurrentPage(currentPage + 1)
          }
          previus={() =>
            currentPage > 0 ? setCurrentPage(currentPage - 1) : ""
          }
        />
      )}
    </div>
  );
};
export default Home;
