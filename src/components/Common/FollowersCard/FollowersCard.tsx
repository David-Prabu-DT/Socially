/* eslint-disable array-callback-return */
import React, { Suspense, useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../api/UserRequests";
import { RootState } from "../../../store/ReduxStore";
import FollowersModal from "../../Modals/FollowersModal/FollowersModal";
import { AuthDataType, PersonData } from "../../../types/Global";
const User = React.lazy(() => import("../User/User"));

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState<PersonData | Array<PersonData>>();
  const userData: AuthDataType | null = useSelector(
    (state: RootState) => state["auth"]["authData"]
  );
  const user: any | null = userData && userData["user"];

  const userId: string | null = user && user._id!;

  const cardHeight = location !== "homepage" ? "60vh" : "30vh";

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();

      setPersons(data.users);
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
            {(persons as unknown as any[])?.map((PersonData, id: number) => {
              if (PersonData._id !== userId)
                return (
                  <User
                    person={PersonData}
                    followers={PersonData.followers}
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
