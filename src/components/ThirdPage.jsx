import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Controller, useFieldArray } from "react-hook-form";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme?.palette?.primary?.main || "#000",
    color: theme?.palette?.text?.primary || "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ThirdPage = ({ control }) => {
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([{ id: 1 }]);
  const [tableData, setTableData] = useState([]);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "thirdPage.medications",
  });

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
    append({ name: "", dosage: "", purpose: "", doctor: "" });
  };

  const handleRemoveRow = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };
  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setTableData(updatedData);
  };
  return (
    <>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <Container sx={{ height: "65vh", overflowY: "auto" }}>
            <Box pb={2}>
              <Box pb={1}>
                <Typography sx={{ fontWeight: "bold" }}>
                  CURRENT MEDICAL PROBLEMS:
                </Typography>
                <Controller
                  name="thirdPage.currentMedicalProblems"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      //   sx={{ width: "50%" }}
                      fullWidth
                      rows={2}
                      multiline
                      size="small"
                      label="Current Medical Problems"
                    />
                  )}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", paddingBottom: "2px" }}>
                  ADAPTIVE EQUIPMENT:
                  <Typography fontSize={13}>
                    (i.e. splint, kitchen/bathroom/grooming equipment, etc.)
                  </Typography>
                </Typography>

                <Controller
                  name="thirdPage.adaptiveEquipment"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      //   sx={{ width: "50%" }}
                      fullWidth
                      rows={2}
                      multiline
                      size="small"
                      label="Adaptive Equipment"
                    />
                  )}
                />
              </Box>
            </Box>
            <TableContainer sx={{ borderRadius: "5px", maxWidth: 1200, mb: 2 }}>
              <Table aria-label="customized table" size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left">Dosage</StyledTableCell>
                    <StyledTableCell align="left">Purpose</StyledTableCell>
                    <StyledTableCell align="left">
                      Doctor Name & Telephone Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ border: "Highlight" }}>
                  {rows.map((row, index) => (
                    <TableRow sx={{ padding: 0 }} key={row.id}>
                      <TableCell sx={{ padding: 0 }}>
                        <Controller
                          name={`thirdPage.medications[${index}].name`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                              // value={tableData[index]?.name || ""}
                              // onChange={(e) =>
                              //   handleInputChange(index, "name", e.target.value)
                              // }
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`thirdPage.medications[${index}].dosage`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                              // value={tableData[index]?.dosage || ""}
                              // onChange={(e) =>
                              //   handleInputChange(
                              //     index,
                              //     "dosage",
                              //     e.target.value
                              //   )
                              // }
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`thirdPage.medications[${index}].purpose`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                              // value={tableData[index]?.purpose || ""}
                              // onChange={(e) =>
                              //   handleInputChange(
                              //     index,
                              //     "purpose",
                              //     e.target.value
                              //   )
                              // }
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`thirdPage.medications[${index}].doctor`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                              // value={tableData[index]?.doctor || ""}
                              // onChange={(e) =>
                              //   handleInputChange(
                              //     index,
                              //     "doctor",
                              //     e.target.value
                              //   )
                              // }
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ display: "flex" }}>
                        <IconButton onClick={handleAddRow} color="primary">
                          <AddIcon />
                        </IconButton>
                        {rows.length > 1 && (
                          <IconButton
                            onClick={() => handleRemoveRow(index)}
                            color="secondary"
                          >
                            <RemoveIcon />
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box mb={1}>
              <Typography
                mt={0.5}
                variant="subtitle1"
                sx={{ fontWeight: "bold" }}
              >
                Can consumer ambulate independently?
              </Typography>
              <Controller
                name="thirdPage.ambulateIndependently"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    row
                    onChange={(event) => {
                      field.onChange(event.target.value === "true");
                      setShow(event.target.value === "true");
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    If yes, explain:
                  </Typography>
                  <Controller
                    name="thirdPage.PastPsychiatricHistoryExplanation"
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
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Past Substance Abuse History:
              </Typography>
              <Controller
                name="thirdPage.PastSubstanceAbuseHistory"
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
            </Box>
          </Container>
        </React.Fragment>
      </Box>
    </>
  );
};

export default ThirdPage;
