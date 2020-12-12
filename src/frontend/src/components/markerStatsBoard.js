import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class MarkerStatsBoard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    //
    refresh(list) {
        this.setState({
            list: list
        });
    }

    //
    render() {
        //
        if(this.state.list.length === 0) {
            return <Card>
                <CardContent>
                    <h1>กำลังโหลด ....</h1>
                </CardContent>
            </Card>
        }
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
                                                return <td key={index} style={{width: "6.67%"}} align="center">
                                                    <div style={{
                                                        width: '104px', height: '104px', 
                                                        backgroundColor: '#dee2e6', 
                                                        marginBottom: '10px',
                                                        }}>
                                                        <img src={"./images/dice/" + item.status + ".png"} width="100%" alt="Score" />
                                                    </div>
                                                    <div style={{
                                                        width: '104px', height: '100px', 
                                                        backgroundColor: '#6c757d', 
                                                        marginBottom: '10px',
                                                        paddingTop: '15px'
                                                        }}>
                                                        <span style={{fontSize: 50, fontWeight: 'bold'}}>{item.score1 + item.score2 + item.score3}</span>
                                                    </div>
                                                    <div style={{
                                                        width: '104px', height: '200px', 
                                                        backgroundColor: item.color, 
                                                        // marginLeft: '10px', marginRight: '10px', marginBottom: '10px',
                                                        paddingTop: '15px'
                                                        }}>
                                                    </div>
                                                </td>;
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

export default MarkerStatsBoard