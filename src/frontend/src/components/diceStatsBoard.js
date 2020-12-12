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
                    <h1>Loading ....</h1>
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
                                    <td style={{width: "6.25%"}} valign="top">
                                        Stats
                                    </td>
                                    {
                                        this.state.list.map((item, index) => {
                                            if(item.score1 === undefined) {
                                                return <td style={{width: "6.25%"}}></td>
                                            }
                                            else {
                                                return <td style={{width: "6.25%"}}>
                                                    <img src={"./images/dice/" + item.score1 + ".png"} width="80" />
                                                    <img src={"./images/dice/" + item.score2 + ".png"} width="80" />
                                                    <img src={"./images/dice/" + item.score3 + ".png"} width="80" />
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

export default DiceStatsBoard