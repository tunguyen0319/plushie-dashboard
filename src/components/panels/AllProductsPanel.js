import React, { forwardRef } from 'react';
import { PanelStyles, PanelBody, PanelHeader } from './styles';

import { AllProduct } from 'components/products/widget/AllProduct'

function AllProductsPanel({title, ...$prop}) {
    return ( 
        <PanelStyles>
            <PanelHeader>
                <h2>{ title || "Display Panel" }</h2>
            </PanelHeader>
            <PanelBody>
                <AllProduct/>
            </PanelBody>
        </PanelStyles>
     );
}

export default AllProductsPanel;