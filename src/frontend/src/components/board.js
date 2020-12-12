import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import DiceStatsBoard from './diceStatsBoard';

class Board extends Component {
    //
    constructor(props) {
        super(props);
        // State.
        this.state = {
            list: []
        };
        // Ref.
        this.refDiceBoard = React.createRef();
    }

    //
    componentDidMount() {
        //
        let list = [
            {
                score1: 1,
                score2: 2,
                score3: 3,
                scoreAll: 6,
                status: 'low',
                color: 'green',
            },
            {
                score1: 4,
                score2: 5,
                score3: 3,
                scoreAll: 6,
                status: 'high',
                color: 'yello',
            },
            {
                score1: 4,
                score2: 5,
                score3: 3,
                scoreAll: 6,
                status: 'high',
                color: 'yello',
            },
            {},{},{},{},{},{},{},{},{},{},{},{},
        ];

        // Update to boards.
        this.refDiceBoard.current.refresh(list);
    }

    //
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DiceStatsBoard ref={this.refDiceBoard} data={this.state.list} />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        );
    }
}

export default Board