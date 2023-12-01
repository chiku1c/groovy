import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import moment from "moment";

const TimeCard = () => {
  return (
    <div>
      <Card
        sx={{
          borderRadius: "30px",
          background: "D9D9D9",
          height: "330px",
          padding: "10px ",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "cetner",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <Typography
              sx={{
                color: "292929",
                fontSize: "36px",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Athens
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "292929",
                  fontSize: "66px",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: "normal",
                }}
              >
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "292929",
                  fontSize: "20px",
                  fontWeight: 400,
                  textAlign: "center",
                  lineHeight: "normal",
                }}
              >
                {moment(new Date()).format("dddd, D MMMM")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TimeCard;
