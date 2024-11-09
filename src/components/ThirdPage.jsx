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
import { Controller } from "react-hook-form";
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

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  return (
    <>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <Container
            sx={{ height: "62vh", maxHeight: "65vh", overflowY: "auto" }}
          >
            <Box pb={2}>
              <Box pb={1}>
                <Typography sx={{ fontWeight: "bold" }}>
                  CURRENT MEDICAL PROBLEMS:
                </Typography>
                <Controller
                  name="current medical problems"
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
                  name="adaptive equipment"
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
                          name={`medicationName-${index}`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`medicationDosage-${index}`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`purpose-${index}`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          name={`doctorName-${index}`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              size="small"
                              variant="outlined"
                              fullWidth
                              sx={{ fontSize: "0.75rem" }}
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
                name="ambulate independently"
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
                    name="Past Psychiatric History explanation"
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
                name="Past Substance Abuse History"
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
