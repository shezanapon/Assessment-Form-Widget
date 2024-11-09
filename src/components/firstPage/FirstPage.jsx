import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";
import { RadioGroup } from "@mui/material";
const FirstPage = ({ control }) => {
  const c = control;

  return (
    <>
      <React.Fragment>
        {/* <CssBaseline /> */}
        <Container
          sx={{
            height: "62vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box sx={{ textAlign: "center", marginBottom: 2 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Traumatic Brain Injury Services/ NHTD
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
                Independent Living Skills Training
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
                Assessment Tool
              </Typography>
            </Box>

            <Box sx={{ maxHeight: "65vh", overflowY: "auto", pt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Consumer's Name"
                      />
                    )}
                    name="Consumer's Name"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Diagnosis"
                      />
                    )}
                    name="diagnosis"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Onset "
                      />
                    )}
                    name="onset"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Age"
                      />
                    )}
                    name="age"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Disability"
                      />
                    )}
                    name="disability"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Date of Assessment"
                      />
                    )}
                    name="Date of Assessment"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                    Assessment Type
                  </Typography>
                  <Controller
                    render={({ field }) => (
                      <RadioGroup {...field}>
                        <div style={{ display: "flex", gap: "20px" }}>
                          <FormControlLabel
                            value="INITIAL"
                            control={<Radio />}
                            label="INITIAL"
                          />
                          <FormControlLabel
                            value="REVISED"
                            control={<Radio />}
                            label="REVISED"
                          />
                          <FormControlLabel
                            value="NO CHANGES"
                            control={<Radio />}
                            label="NO CHANGES"
                          />
                        </div>
                      </RadioGroup>
                    )}
                    name="assessment_type"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Initial Assessment Conducted By"
                      />
                    )}
                    name="Initial Assessment Conducted By"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Title"
                      />
                    )}
                    name="title"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Date of Review"
                      />
                    )}
                    name="Date of Review"
                    control={c}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        label="Reviewer Name"
                      />
                    )}
                    name="Reviewer Name"
                    control={c}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default FirstPage;
