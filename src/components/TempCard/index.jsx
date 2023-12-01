import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ListItemIcon } from "@material-ui/core";
import Clear from "../../assest/image/clear.jpg";
import { ReactComponent as Sunrise } from "../../assest/icon/sunrise.svg";
import { ReactComponent as Sunset } from "../../assest/icon/uv-white.svg";
import { ReactComponent as Humidity } from "../../assest/icon/humidity.svg";
import { ReactComponent as Wind } from "../../assest/icon/wind.svg";
import { ReactComponent as Presserue } from "../../assest/icon/pressure.svg";
import moment from "moment";
import { Link } from "react-router-dom";

const TempCard = (props) => {
  const { current, daily } = props?.data || {};
  const sunriseTime = moment(daily?.sunrise[0]);
  const formattedDate = sunriseTime.format("HH:mm a");
  const sunsetTime = moment(daily?.sunset[0]);
  const formattedDateset = sunsetTime.format("HH:mm a");

  return (
    <>
      <Link to="extradetails" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            borderRadius: "30px",
            background: "D9D9D9",
            height: "330px",
            padding: "10px ",
          }}
        >
          <Grid container>
            <Grid item container xs={4}>
              <Grid item>
                <Typography
                  sx={{
                    background:
                      "linear-gradient(80deg, #292929 -2.93%, rgba(255, 255, 255, 0.00) 212.44%)",
                    fontSize: "80px",
                    backgroundClip: "text",
                    fontWeight: 700,
                    lineHeight: "normal",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {current?.temperature_2m}°C
                </Typography>
                <Typography>
                  <Grid container>
                    <Grid>
                      <Typography
                        sx={{
                          color: "292929",
                          fontSize: "20px",

                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        {" "}
                        Feels like:
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        sx={{
                          color: "292929",
                          fontSize: "32px",
                          fontWeight: 700,
                          lineHeight: "normal",
                        }}
                      >
                        22°C
                      </Typography>
                    </Grid>
                    <Grid>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Sunrise />
                          </ListItemIcon>
                          <ListItemText>
                            <Grid container>
                              <Grid item xs={12}>
                                <Typography
                                  sx={{
                                    color: "292929",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: "normal",
                                  }}
                                >
                                  sunrise
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography
                                  sx={{
                                    color: "292929",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    lineHeight: "normal",
                                  }}
                                >
                                  {formattedDate && formattedDate}
                                </Typography>
                              </Grid>
                            </Grid>
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Sunset />
                          </ListItemIcon>
                          <ListItemText>
                            <Grid container>
                              <Grid item xs={12}>
                                <Typography
                                  sx={{
                                    color: "292929",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: "normal",
                                  }}
                                >
                                  Sunset
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography
                                  sx={{
                                    color: "292929",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    lineHeight: "normal",
                                  }}
                                >
                                  {formattedDateset && formattedDateset}
                                </Typography>
                              </Grid>
                            </Grid>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={4}>
              <Grid xs={12}>
                <img
                  src={Clear}
                  alt="clear"
                  style={{ width: "270px", height: "270px" }}
                />
              </Grid>
              <Grid xs={12}>
                <Typography
                  sx={{
                    color: "292929",
                    fontSize: "32px",
                    textAlign: "center",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  Sunny
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={4}>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Humidity />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          color: "292929",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "normal",
                        }}
                      >
                        Humidity
                      </Typography>
                    </Grid>
                    41%
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Humidity />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    41%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Humidity
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Wind />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    {current?.wind_speed_10m}km/h
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Wind Speed
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Presserue />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    997hpa
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "292929",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Presserue
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Link>
    </>
  );
};

export default TempCard;
