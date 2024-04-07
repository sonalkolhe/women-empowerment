/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  backgroundColor: "var(--background)",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "var(--heading-light)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("0");
  const obj = [
    {
      question: "How can I report a crime if it happens against me?",
      answer: "To report a crime, simply navigate to the 'Report Crime' section of our app and follow the instructions provided. You will be guided through the process of submitting your report securely and confidentially.",
    },
    {
      question: "Can I remain anonymous when reporting a crime?",
      answer: "Yes, you have the option to report a crime anonymously if you prefer. Your privacy and safety are our top priorities, and we respect your decision to remain anonymous if you wish to do so.",
    },
    {
      question: "How can I stay updated on current cases and news related to women's safety?",
      answer: "To stay updated on current cases and news related to women's safety, visit the 'News and Updates' section of our app. Here, you'll find the latest information, updates, and resources to help you stay informed and aware of important developments.",
    },
    {
      question: "Is there a support system available for victims of crime?",
      answer: "Yes, we offer a support system for victims of crime, including counseling services, legal assistance, and access to resources and support groups. Our goal is to provide comprehensive support to help victims navigate their journey towards healing and justice.",
    },
    {
      question: "How can I contribute to the fight against gender-based violence?",
      answer: "You can contribute to the fight against gender-based violence by raising awareness, supporting survivors, advocating for policy change, and being an ally to those affected by violence. Additionally, you can use our app to report incidents, stay informed, and support initiatives aimed at ending violence against women.",
    },
  ];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {obj.map((el, idx) => (
        <Item
          key={idx}
          idx={idx}
          handleChange={handleChange}
          expanded={expanded}
          obj={el}
        />
      ))}
    </div>
  );
}

function Item({ idx, expanded, handleChange, obj }) {
  return (
    <div className='sm:w-[70vw] mx-auto'>
      <Accordion
        expanded={expanded === idx + 1 + ""}
        onChange={handleChange(idx + 1 + "")}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography color='var(--heading-main)'>{obj.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='var(--heading-trival)'>
            {obj.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
