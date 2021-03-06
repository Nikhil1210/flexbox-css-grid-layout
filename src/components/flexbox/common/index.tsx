import * as React from 'react';
import './index.css';
interface FlexContProps {
    containerClass: string;
    itemClass?: string;
    item2Class?: string;
    item3Class?: string;
}
export const Flex: React.SFC < FlexContProps > = props => {
    return (
           <div className={props.containerClass} >
            <div className="flex-item flex-item-01">
                <em>Flex Item</em>
                <strong>01</strong>
            </div>
            <div className={`flex-item flex-item-02 ${props.item2Class}`}>
                <em>Flex Item</em>
                <strong>02</strong>
            </div>
            <div className={`flex-item flex-item-03 ${props.item3Class}`}>
                <em>Flex Item</em>
                <strong>03</strong>
            </div>
            <div className={`flex-item flex-item-04`}>
                <em>Flex Item</em>
                <strong>04</strong>
            </div>
            </div>
    );
};

export const FlexExtended: React.SFC < FlexContProps > = props => {
    return (
           <div className={props.containerClass} >
            <div className="flex-item flex-item-01">
                <em>Flex Item</em>
                <strong>01</strong> 
            </div>
            <div className="flex-item flex-item-02">
                <em>Flex Item</em>
                <strong>02</strong>
            </div>
            <div className="flex-item flex-item-03">
                <em>Flex Item</em>
                <strong>03</strong>
            </div>
            <div className="flex-item flex-item-04">
                <em>Flex Item</em>
                <strong>04</strong>
            </div>
            <div className="flex-item flex-item-05">
                <em>Flex Item</em>
                <strong>05</strong>
            </div>
            <div className="flex-item flex-item-06">
                <em>Flex Item</em>
                <strong>06</strong>
            </div>
            <div className="flex-item flex-item-07">
                <em>Flex Item</em>
                <strong>07</strong> 
            </div>
            <div className="flex-item flex-item-08">
                <em>Flex Item</em>
                <strong>08</strong>
            </div>


            
            </div>
    );
};

export const Flex2EqualItems: React.SFC < {} > = props => {
    return (
           <div style={{display: 'flex'}}>
            <div className="flex-item flex-item-01 flex-1">
                <em>Flex Item</em>
                <strong>01</strong> 
            </div>
            <div className={`flex-item flex-item-02 flex-1`}>
                <em>Flex Item</em>
                <strong>02</strong>
            </div>
            </div>
    );
};

export const Flex2UnEqualItems: React.SFC < {} > = props => {
    return (
           <div style={{display: 'flex'}}>
            <div className="flex-item flex-item-01 flex-1">
                <em>Flex Item</em>
            </div>
            <div className={`flex-item flex-item-02 flex-1`}>
                <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ab
                     veritatis nihil nesciunt repellendus</em>
            </div>
            </div>
    );
};

export const Flex3DifferWidth: React.SFC < {} > = props => {
    return (
           <div style={{display: 'flex'}}>
            <div className="flex-item flex-item-01 flex-1">
                <em>Flex Item</em>
                <strong>01</strong> 
            </div>
            <div className={`flex-item flex-item-02 flex-twice`}>
                <em>Flex Item</em>
                <strong>02</strong>
            </div>
              <div className={`flex-item flex-item-03 flex-1`}>
                <em>Flex Item</em>
                <strong>03</strong>
            </div>
            </div>
    );
};