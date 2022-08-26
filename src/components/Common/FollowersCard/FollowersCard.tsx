import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../api/UserRequests";
import { RootState } from "../../../store/ReduxStore";
import FollowersModal from "../../Modals/FollowersModal/FollowersModal";
import User from "../User/User";

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const user: any = useSelector((state: RootState) => state.auth.authData);

  const cardHeight = location !== "homepage" ? "40vh" : "25vh";

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <>
      <div>
        {location !== "modal" && (
          <Typography variant="subtitle1" align="center" mt={2} mb={1}>
            Who is following you{" "}
            <Button
              variant="contained"
              size="small"
              onClick={() => setModalOpened(true)}
            >
              Show More
            </Button>
          </Typography>
        )}

        <div style={{ height: cardHeight, overflow: "scroll" }}>
          {persons.map((person: any, id) => {
            if (person._id !== user._id)
              return <User person={person} key={id} />;
          })}
        </div>
      </div>
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </>
  );
};

export default FollowersCard;
