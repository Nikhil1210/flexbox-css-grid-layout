import * as React from 'react';
import './index.css';
interface GridContProps {
    containerClass: string;
    item1Class?: string;
    item2Class?: string;
    item3Class?: string;
    item4Class?: string;
}
export const CSSGrid: React.SFC < GridContProps > = props => {
    return (
           <div className={props.containerClass} >
            <div className={`grid-item grid-item-01 ${props.item1Class}`}>
                <em>Grid Item</em>
                <strong>01</strong> 
            </div>
            <div className={`grid-item grid-item-02 ${props.item2Class}`}>
                <em>Grid Item</em>
                <strong>02</strong>
            </div>
            <div className={`grid-item grid-item-03 ${props.item3Class}`}>
                <em>Grid Item</em>
                <strong>03</strong>
            </div>
            <div className={`grid-item grid-item-04 ${props.item4Class}`}>
                <em>Grid Item</em>
                <strong>04</strong>
            </div>
            </div>
    );
};

export const CSSGridExtended: React.SFC < GridContProps > = props => {
    return (
           <div className={props.containerClass} >
            <div className="grid-item grid-item-01">
                <em>Grid Item</em>
                <strong>01</strong> 
            </div>
            <div className="grid-item grid-item-02">
                <em>Grid Item</em>
                <strong>02</strong>
            </div>
            <div className="grid-item grid-item-03">
                <em>Grid Item</em>
                <strong>03</strong>
            </div>
            <div className="grid-item grid-item-04">
                <em>Grid Item</em>
                <strong>04</strong>
            </div>
            <div className="grid-item grid-item-05">
                <em>Grid Item</em>
                <strong>05</strong>
            </div>
            <div className="grid-item grid-item-06">
                <em>Grid Item</em>
                <strong>06</strong>
            </div>
            <div className="grid-item grid-item-07">
                <em>Grid Item</em>
                <strong>07</strong> 
            </div>
            <div className="grid-item grid-item-08">
                <em>Grid Item</em>
                <strong>08</strong>
            </div>
            </div>
    );
};
