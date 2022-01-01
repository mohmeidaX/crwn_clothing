import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollections from "../../components/preview-collections/preview.collections.components";
    
class ShopPage extends React.Component{

    constructor(props){
        
        super(props);
        
        this.state = {  
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
            return (
                    <div classname = "shop-page">
                    {
                        collections.map(({id , ...otheritems}) => (
                            <PreviewCollections key = {id} {...otheritems}></PreviewCollections>
                        ))
                    }
                    </div>
                );
            }         
    }

export default ShopPage;