import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Followers } from "../../../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <>
      <div>
        <Typography variant="h6" align="center" mt={2}>
          Who is following you
        </Typography>

        {Followers.map((_follower, _id) => {
          return (
            <>
              <Paper elevation={2} style={{ margin: 5, padding: 5 }} key={_id}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar src={_follower.img} />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                  >
                    <Typography variant="body2" gutterBottom>
                      {_follower.name}
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
                    <Button variant="contained" color="primary" size="small">
                      Follow
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FollowersCard;
