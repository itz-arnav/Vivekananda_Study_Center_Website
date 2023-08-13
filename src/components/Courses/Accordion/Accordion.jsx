import React from 'react';
import {
    Accordion as RAAccordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css'; // Importing default styles
import css from "./Accordion.module.css";

function Accordion({ question, answer }) {

    return (
        <RAAccordion allowZeroExpanded={true} className={css.accordion}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                        {answer}
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </RAAccordion>
    );
}

export default Accordion;
