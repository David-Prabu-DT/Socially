import React, { useContext, useMemo } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { GlobalContext } from "../../../context/GlobalState";

const TrendCard = () => {
  const getTrendData = useContext(GlobalContext);
  const TrendData = useMemo(() => getTrendData["trendData"], [getTrendData]);
  return (
    <div>
      <Card elevation={0} style={{ marginTop: 25 }}>
        <CardHeader center title="Trends For You !!" />
        <CardContent>
          {TrendData &&
            TrendData.map((_data, _id) => {
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
    </div>
  );
};

export default TrendCard;
