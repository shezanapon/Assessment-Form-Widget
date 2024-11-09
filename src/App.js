import { useEffect, useState } from "react";
import "./App.css";
import AssessmentForm from "./components/AssesmentForm";
import { useForm } from "react-hook-form";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { FirstPage } from "@mui/icons-material";


const ZOHO = window.ZOHO;
function App() {
  const [show, setShow] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      // setInitialized(true);
      // setEntity(data?.Entity);
      // setEntityID(data?.EntityId);
      ZOHO.CRM.UI.Resize({ height: "100%", width: "50%" });
    });

    ZOHO.embeddedApp.init();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            minHeight: "80vh",
            marginTop: "30px",
            marginBottom: "30px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <Box sx={{ bgcolor: "black", color: "white" }}>
            <Typography
              variant="h5"
              sx={{
                bgColor: "black",
                color: "white",
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "10px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              PBIS BLANK Functional Assessment Tool
            </Typography>
          </Box>
          <br />
          <Box component={Box} p={4}>
            <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
              <AssessmentForm control={control} setValue={setValue} />
              {/* <FirstPage control={control}/> */}
              {/* <LastPage control={control} /> */}
              {/* <SecondPage control={control} /> */}
              {/* <ThirdPage control={control} /> */}
              {/* <FourthPage control={control} /> */}
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
