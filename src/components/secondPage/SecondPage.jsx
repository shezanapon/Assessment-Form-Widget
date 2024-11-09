import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const SecondPage = ({ control }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Box sx={{ height: "62vh", maxHeight: "65vh", overflowY: "auto" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  PRECAUTIONS
                </Typography>

                <Typography
                  mt={0.5}
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Can consumer ambulate independently?
                </Typography>
                <Controller
                  name="ambulate independently"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                      row
                      onChange={(event) => {
                        field.onChange(event.target.value === "true");
                        setShow(event.target.value === "false");
                      }}
                    >
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
                {show && (
                  <>
                    {" "}
                    <Typography sx={{ fontWeight: "bold" }}>
                      If no, assistive device needed:
                    </Typography>
                    <Controller
                      name="assistive device"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel
                            value="wheelchair"
                            control={<Radio />}
                            label="wheelchair"
                          />
                          <FormControlLabel
                            value="walker"
                            control={<Radio />}
                            label="walker"
                          />
                          <FormControlLabel
                            value="cane"
                            control={<Radio />}
                            label="cane"
                          />
                          <FormControlLabel
                            value="crutches"
                            control={<Radio />}
                            label="crutches"
                          />
                          <FormControlLabel
                            value="prosthesis"
                            control={<Radio />}
                            label="prosthesis"
                          />
                        </RadioGroup>
                      )}
                    />
                  </>
                )}
              </Box>

              <Box>
                <Typography
                  mt={0.5}
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Does consumer need a device for at-home mobility as well as
                  community mobility?
                </Typography>
                <Controller
                  name="consumer need a device"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
              </Box>

              <Box>
                <Controller
                  name="comments on need of a device"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "50%" }}
                      rows={2}
                      multiline
                      size="small"
                      label="Comments on need of a device"
                    />
                  )}
                />
              </Box>

              <Grid pt={1} container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="Falls/Decreased Safety Awareness/Other"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Falls/Decreased Safety Awareness/Other"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Visual Limitations"
                      />
                    )}
                    name="Visual Limitations"
                    control={control}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Hearing Deficits"
                      />
                    )}
                    name="Hearing Deficits"
                    control={control}
                  />
                </Grid>

                <Grid item xs={12} md={6} display={"flex"}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    pt={1}
                    pr={1}
                    component="legend"
                  >
                    Hearing Aid
                  </Typography>
                  <Controller
                    name="Hearing Aid"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        // onChange={(event) => {
                        //   field.onChange(event.target.value === "true");
                        //   setShow(event.target.value === "false");
                        // }}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Sensory Deficits"
                      />
                    )}
                    name="Sensory Deficits"
                    control={control}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Motor Skills Deficits"
                      />
                    )}
                    name="Motor Skills Deficits"
                    control={control}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Does consumer have a Neuropsychological Evaluation?
                  </Typography>
                  <Controller
                    name="Neuropsychological Evaluation"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        onChange={(event) => {
                          field.onChange(event.target.value === "true");
                          setShow2(event.target.value === "false");
                        }}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    )}
                  />
                  {show2 && (
                    <>
                      <Typography sx={{ fontWeight: "bold" }}>
                        If No, has a referral been made by Service Coordinator?
                      </Typography>
                      <Controller
                        name="referral by Service Coordinator"
                        control={control}
                        render={({ field }) => (
                          <RadioGroup {...field} row>
                            <FormControlLabel
                              value="true"
                              control={<Radio />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="false"
                              control={<Radio />}
                              label="No"
                            />
                          </RadioGroup>
                        )}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Does consumer drive?
                  </Typography>
                  <Controller
                    name="consumer drive"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        onChange={(event) => {
                          field.onChange(event.target.value === "true");
                          setShow3(event.target.value === "true");
                        }}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    )}
                  />
                  {show3 && (
                    <>
                      <Typography sx={{ fontWeight: "bold" }}>
                        If yes, has he obtained medical clearance and DMV
                        informed:
                      </Typography>
                      <Controller
                        name="obtained medical clearance and DMV    
                    informed"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            //   sx={{ width: "50%" }}
                            fullWidth
                            rows={2}
                            multiline
                            size="small"
                            // label="Current Medical Problems"
                          />
                        )}
                      />
                    </>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      </Box>
    </>
  );
};

export default SecondPage;
