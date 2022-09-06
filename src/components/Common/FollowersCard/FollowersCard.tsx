/* eslint-disable array-callback-return */
import React, { Suspense, useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../api/UserRequests";
import { RootState } from "../../../store/ReduxStore";
import FollowersModal from "../../Modals/FollowersModal/FollowersModal";
import { authDataType, personData } from "../../../types/Global";
const User = React.lazy(() => import("../User/User"));

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState<personData | Array<personData>>();
  const user: authDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );

  const userId: string | null = user && user._id!;

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
        <Suspense fallback={<CircularProgress style={{ display: "flex" }} />}>
          <div style={{ height: cardHeight, overflow: "scroll" }}>
            {(persons as unknown as any[])?.map((personData, id: number) => {
              if (personData._id !== userId)
                return (
                  <User
                    person={personData}
                    followers={personData.followers}
                    key={id}
                    _id={""}
                  />
                );
            })}
          </div>
        </Suspense>
      </div>
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </>
  );
};

export default FollowersCard;
