import * as React from 'react';

export const Flex : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex'}}>
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
export const InlineFlex : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'inline-flex'}}>
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
export const FlexDirectionColumn : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', flexDirection: 'column'}}>
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
export const FlexDirectionColumnReverse : React.SFC < {} > = props => {
    return (
           <div className="flex-container" style={{display: 'flex', flexDirection: 'column-reverse'}}>
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
