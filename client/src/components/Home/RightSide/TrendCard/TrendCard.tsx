import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import { TrendsData } from "../../../../Data/TrendsData";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
const TrendCard = () => {
  return (
    <div>
      <Card style={{ marginTop: 25 }}>
        <CardHeader center title="Trends For You !!" />
        <CardContent>
          {TrendsData.map((_data, _id) => {
            return (
              <>
                <div style={{ marginBottom: 15 }}>
                  <Typography variant="body1">#{_data.name}</Typography>
                  <Typography variant="caption">
                    {" "}
                    {_data.shares}k shares{" "}
                  </Typography>
                </div>
              </>
            );
          })}
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ShareTwoToneIcon />}
        style={{ marginTop: 25 }}
        fullWidth
      >
        Share
      </Button>
    </div>
  );
};

export default TrendCard;
