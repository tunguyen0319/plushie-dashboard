import React from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { IoBookmarksSharp, IoPricetagsSharp, IoPencilSharp, IoFolderSharp, IoBagSharp, IoStatsChart, IoSparklesSharp, IoPeopleSharp } from "react-icons/io5"


import { SideBarItem } from "./styles";


const ProducOptionStyles = styled.ul`
    
`;

function ProductOptions($prop) {
    return ( 
        <ProducOptionStyles>

            <SideBarItem>
                <IoBookmarksSharp/>
                <Link to="/dashboard">All Products</Link>
            </SideBarItem>

            <SideBarItem>
                <IoPricetagsSharp/>
                <Link to="add">Add New Product</Link>
            </SideBarItem>

            <SideBarItem>
                <IoPencilSharp/>
                <Link to="edit">Edit Product</Link>
            </SideBarItem>

            <SideBarItem>
                <IoFolderSharp/>
                <Link to="categories">Categories</Link>
            </SideBarItem>

            <SideBarItem>
                <IoBagSharp/>
                <Link to="orders">Orders</Link>
            </SideBarItem>

            <SideBarItem>
                <IoSparklesSharp/>
                <Link to="discounts">Discounts</Link>
            </SideBarItem>

            <SideBarItem>
                <IoStatsChart/>
                <Link to="analytics">Analytics</Link>
            </SideBarItem>

            <SideBarItem>
                <IoPeopleSharp/>
                <Link to="members">Members</Link>
            </SideBarItem>
        </ProducOptionStyles>
     );
}

export default ProductOptions;