import React, { useEffect, useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../../api/UserRequests";
import { RootState } from "../../../../store/ReduxStore";
import FollowersModal from "../FollowersModal/FollowersModal";

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const user: any = useSelector((state: RootState) => state.auth.authData);

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
        <Typography variant="h6" align="center" mt={2}>
          Who is following you
        </Typography>
        <div style={{ height: "30vh", overflow: "scroll" }}>
          {persons.map((person: any, _id: number) => {
            if (person._id !== user._id) {
              return (
                <>
                  <Paper
                    elevation={2}
                    style={{ margin: 5, padding: 5 }}
                    key={_id}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Avatar src={person.img} />
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                      >
                        <Typography variant="body2" gutterBottom>
                          {person.name}
                          quibusdam.
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        display="flex"
                        justifyContent="end"
                        alignItems="center"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          Follow
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </>
              );
            }
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
