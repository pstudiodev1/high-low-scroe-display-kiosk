import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class DiceStatsBoard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    //
    refresh(list) {
        this.setState({ list: list });
    }

    //
    render() {
        //
        return (
            <>
                <Card>
                    <CardContent>
                        <table border={0} style={{width: "100%"}}>
                            <tbody>
                                <tr>
                                    <td colSpan={15} align="left">
                                        <span style={{fontSize: 24, fontWeight: 'bold'}}>
                                            สถิติ
                                        </span>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    {
                                        this.state.list.map((item, index) => {
                                            if(item.score1 === undefined) {
                                                return <td key={index} style={{width: "6.67%"}}></td>
                                            }
                                            else {
                                                return <td key={index} align="center" style={{width: "6.67%"}}>
                                                    <img src={"./images/dice/" + item.score1 + ".png"} width="100" alt="Score" />
                                                    <img src={"./images/dice/" + item.score2 + ".png"} width="100" alt="Score" />
                                                    <img src={"./images/dice/" + item.score3 + ".png"} width="100" alt="Score" />
                                                </td>;
                                            }
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td colSpan="15" align="left">
                                        <br/>
                                        <span style={{fontSize: 24, fontWeight: 'bold'}}>
                                            สูง ต่ำ แต้ม และ สี
                                        </span>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    {
                                        this.state.list.map((item, index) => {
                                            if(item.score1 === undefined) {
                                                return <td key={index} style={{width: "6.67%"}}></td>
                                            }
                                            else {
                                                if(item.status === 'high') {
                                                    return <td key={index} align="center" style={{width: "6.67%"}}>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                            <img src={"./images/dice/" + item.status + ".png"} width="100%" alt="Score" />
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '100px', 
                                                            backgroundColor: item.colorFontBG, 
                                                            marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                            <span style={{fontSize: 50, fontWeight: 'bold', color: item.colorFont}}>
                                                                {item.scoreAll}
                                                            </span>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '150px', 
                                                            backgroundColor: item.color, 
                                                            // marginLeft: '10px', marginRight: '10px', marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                        </div>
                                                    </td>;
                                                } else if(item.status === 'low') {
                                                    return <td key={index} align="center" style={{width: "6.67%"}}>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                            <img src={"./images/dice/" + item.status + ".png"} width="100%" alt="Score" />
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '100px', 
                                                            backgroundColor: item.colorFontBG, 
                                                            marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                            <span style={{fontSize: 50, fontWeight: 'bold', color: item.colorFont}}>
                                                                {item.scoreAll}
                                                            </span>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '150px', 
                                                            backgroundColor: item.color, 
                                                            // marginLeft: '10px', marginRight: '10px', marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                        </div>
                                                    </td>;
                                                } else {
                                                    return <td key={index} align="center" style={{width: "6.67%"}}>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '104px', 
                                                            backgroundColor: '#dee2e6', 
                                                            marginBottom: '10px',
                                                            }}>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '100px', 
                                                            backgroundColor: item.colorFontBG, 
                                                            marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                            <span style={{fontSize: 50, fontWeight: 'bold', color: item.colorFont}}>
                                                                {item.scoreAll}
                                                            </span>
                                                        </div>
                                                        <div style={{
                                                            width: '104px', height: '150px', 
                                                            backgroundColor: item.color, 
                                                            // marginLeft: '10px', marginRight: '10px', marginBottom: '10px',
                                                            paddingTop: '15px'
                                                            }}>
                                                        </div>
                                                    </td>;
                                                }
                                            }
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default DiceStatsBoard