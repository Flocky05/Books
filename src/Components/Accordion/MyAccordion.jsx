import React from 'react';
import { Collapse } from 'daisyui';
const MyAccordion = (args) => {
    return (
        <Collapse {...args}>
            <Collapse.Title className="text-xl font-medium">
                Focus me to see content
            </Collapse.Title>
            <Collapse.Content>
                tabindex="0" attribute is necessary to make the div focusable
            </Collapse.Content>
        </Collapse>
    );
};

export default MyAccordion;