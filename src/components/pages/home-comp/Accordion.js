import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
 
function Icon({ id, open }) {
  return (
    <div>
        { id === open ?  <FiMinusCircle/>  : <FiPlusCircle /> }
    </div>
  );
}
 
export default function MyAccordion() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="lg:px-6 border shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-6 text-primary">Q.</span>How can I request delivery ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="lg:px-6 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-6 text-primary">Q.</span>Is there refund for failed delivery ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="lg:px-6 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-6 text-primary">Q.</span>Can I make purchase on 5M Logistics ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="lg:px-6 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-6 text-primary">Q.</span>How long does delivery take ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className="lg:px-6 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-6 text-primary">Q.</span>Do I pay before or after delivery ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}