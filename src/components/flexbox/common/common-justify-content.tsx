import * as React from 'react';

export const JustifyFlexStart : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'flex-start'}}>
            <div className="flex-item">
                <em>Flex Item</em>
                <strong>01</strong> 
            </div>
            <div className="flex-item">
                <em>Flex Item</em>
                <strong>02</strong>
            </div>
            <div className="flex-item">
                <em>Flex Item</em>
                <strong>03</strong>
            </div>
            </div>
    );
};
export const JustifyFlexEnd : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>01</strong> 
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>02</strong>
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>03</strong>
                        </div>     
            </div>
        );
};
export const JustifyFlexCenter : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>01</strong> 
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>02</strong>
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>03</strong>
                        </div>     
            </div>
        );
};
export const JustifyFlexSpaceBetween : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>01</strong> 
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>02</strong>
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>03</strong>
                        </div>     
            </div>
        );
};
export const JustifyFlexSpaceAround : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>01</strong> 
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>02</strong>
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>03</strong>
                        </div>     
            </div>
        );
};
export const JustifyFlexSpaceEvenly : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>01</strong> 
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>02</strong>
                        </div>
                        <div className="flex-item">
                            <em>Flex Item</em>
                            <strong>03</strong>
                        </div>     
            </div>
        );
};
