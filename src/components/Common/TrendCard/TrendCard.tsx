import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { TrendsData } from "../../../Data/TrendsData";

const TrendCard = () => {
  const TrendData = useMemo(() => TrendsData, []);

  return (
    <div>
      <Card style={{ marginTop: 25 }}>
        <CardHeader center title="Trends For You !!" />
        <CardContent>
          {TrendData.map((_data, _id) => {
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
