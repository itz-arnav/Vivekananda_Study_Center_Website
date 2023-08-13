import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import css from "./FaqAccordion.module.css";

function FaqAccordion({ question, answer }) {
    return (
        <Accordion className={css.accordion}>
            <Accordion.Item eventKey="0" className={css.accordionItem}>
                <Accordion.Header  className={css.accordionHeader}>{question}</Accordion.Header>
                <Accordion.Body  className={css.accordionBody}>{answer}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FaqAccordion;