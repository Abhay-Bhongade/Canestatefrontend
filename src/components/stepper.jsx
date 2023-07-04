import React, { useState } from "react";
import { Typography, TextField, Button, MenuItem, Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import GpsFixedTwoToneIcon from "@mui/icons-material/GpsFixedTwoTone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachmentIcon from "@mui/icons-material/Attachment";
import BallotIcon from "@mui/icons-material/Ballot";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Padding } from "@mui/icons-material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import BedIcon from "@mui/icons-material/Bed";
import DomainIcon from "@mui/icons-material/Domain";
import checkicon from "../assets/checkcircle.png";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

// redio-btn
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressDetailsInProperty from "./Property/AddressDetailsInProperty";
import FeatureDetailsInProperty from "./Property/FeatureDetailsInProperty";
import RentDetailsInProperty from "./Property/RentDetailsInProperty";
import FeatureDetailsInProperty2 from "./Property/FeatureDetailsInProperty2";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 31,
  height: 16,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    color: "#616161",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#DB1516",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#fff",
        opacity: 1,
        border: "0.6px solid #DB1516",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#39393D",
    opacity: 1,
    border: "0.6px solid #616161",
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(233,64,87) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(233,64,87) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#b8b8b8",
  zIndex: 1,
  color: "#fff",
  width: 35,
  height: 35,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#DB1516",
    color: "#FFFFFF",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#DB1516",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <LocationOnIcon sx={{ fontSize: "19px" }} />,
    2: <ChecklistIcon />,
    3: <ListAltIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

function getSteps() {
  return ["", "", ""];
}

const StepperFrom = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === 2) {
      // Show popup when reaching the last step and clicking "Next"
      handleOpenSuccessDialog(); // Call the handleOpenSuccessDialog function to show the dialog box
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    // Remove the useState for isChecked here (line removed)
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    switch (step) {
      case 0:
        return (
          <>
            <AddressDetailsInProperty />
          </>
        );
      case 1:
        return isChecked ? (
          <FeatureDetailsInProperty onCheckboxChange={handleCheckboxChange} />
        ) : (
          <>
            <FeatureDetailsInProperty2
              onCheckboxChange={handleCheckboxChange}
            />
          </>
        );

      default:
        return <RentDetailsInProperty />;
    }
  }

  const [isSuccessDialogOpen, setisSuccessDialogOpen] = useState(false);
  const handleOpenSuccessDialog = () => {
    console.log("function called");
    setisSuccessDialogOpen(true);
  };
  const handleCloseSuccessDialog = () => {
    setisSuccessDialogOpen(false);
  };

  return (
    <div>
      <div className="stepper-area mb-3">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                  onClick={() => setActiveStep(index)}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </div>
      {activeStep === 4 ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <div className="address-details-container">
          <form>{getStepContent(activeStep)}</form>
          <div className="address-bottom-btn ">
            {activeStep !== 0 && (
              <Button
                className="back-btn-steper"
                onClick={handleBack}
                variant="contained"
              >
                Back
              </Button>
            )}
            <Button
              className="next-save-btn"
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === 2 ? "Save" : "Next"}
            </Button>
          </div>
        </div>
      )}
      <Dialog
        open={isSuccessDialogOpen}
        onClose={handleCloseSuccessDialog}
        className="custom-dialog"
        PaperProps={{
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "30vh",
            borderRadius: "16px",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseSuccessDialog}
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
            backgroundColor: "grey",
            width: "25px",
            height: "25px",
          }}
        >
          <CloseIcon sx={{ color: "white", fontSize: "16px" }} />
        </IconButton>

        <DialogContent
          style={{
            height: "500px",
            paddingTop: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <DialogTitle className="mb-2">
            <img src={checkicon} height={83} width={83} />
          </DialogTitle>
          <DialogContentText
            className="my-1"
            style={{
              textAlign: "left",
              fontWeight: "700",
              fontSize: "1rem",
              padding: "0px",
              color: "#000000",
              letterSpacing:"1px"
            }}
          >
            Your Property Has Been
          </DialogContentText>
          <DialogContentText
            className=""
            style={{
              textAlign: "left",
              fontWeight: "700",
              fontSize: "1rem",
              padding: "0px",
              color: "#41A728",
              letterSpacing:"1px"
            }}
          >
            Saved Successfully
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StepperFrom;
