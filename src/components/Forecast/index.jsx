import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Clouds from "../../assest/image/clouds.jpg";
import moment from "moment";

// ... (other imports)

const ForeCast = (props) => {
  const { data } = props;

  return (
    <>
      <Card
        sx={{
          borderRadius: "30px",
          background: "D9D9D9",
          maxWidth: "414px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "292929",
                fontSize: "20px",
                textAlign: "center",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              5 Days Forecast
            </Typography>
          </Grid>
          {data.daily && data.daily.time ? (
            data.daily.time.slice(0, 5).map((time) => {
              const formattedDate = moment(time).format("dddd, D MMM");
              return (
                <Grid item xs={12} key={formattedDate}>
                  <List>
                    <ListItem
                      style={{
                        gap: "10px",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          src={Clouds}
                          alt="Clouds"
                          style={{ width: "24px", height: "24px" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={"20°C"} />
                      <ListItemText primary={formattedDate} />
                    </ListItem>
                  </List>
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "292929",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                No forecast data available.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Card>
    </>
  );
};

export default ForeCast;
