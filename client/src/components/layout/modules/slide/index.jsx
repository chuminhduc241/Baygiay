import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import giay5 from "../../../../assets/images/giay5.jpg"
import giay6 from "../../../../assets/images/giay6.jpg"
import "./style.scss"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: {
      text1: "New for",
      text2: "Snewker"
    },
    imgPath:
      giay5
  },
  {
    label: {
      text1: "New for",
      text2: "TUyefn"
    },
    imgPath:
    giay6
  }
];

function Slide() {
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="slider">
      <Box sx={{ flexGrow: 1 }}>
        <h1 className="title-slider">
          <span className="text" >{images[activeStep].label["text1"]}</span>
          <b className="text text-2"  >{images[activeStep].label["text2"]}</b>
        </h1>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    overflow: "hidden",
                    width: "100%"
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
         
        />
      </Box>
    </div>
  );
}

export default Slide;
