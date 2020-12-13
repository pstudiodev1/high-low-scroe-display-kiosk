import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DiceStatsBoard from './diceStatsBoard';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Board extends Component {
    //
    constructor(props) {
        super(props);
        //
        this.list = [];
        this.newDice = [];
        // State.
        this.state = {
            list: [],
            newDice: [],
            isOpen: false,
        };
        // Ref.
        this.refDiceBoard = React.createRef();
    }

    //
    componentDidMount() {
        // Init.
        for(let i=0; i<15; i++) {
            this.list.push({});
        }

        // Update event handler.
        document.addEventListener("keydown", this.keyPress, false);

        // Update to boards.
        this.refDiceBoard.current.refresh(this.list);
    }

    //
    keyPress = (event) => {
        if(event.keyCode === 27 || event.keyCode === 67) {
            // ESC
            this.handleCloseDialog();
            return;
        }
        if(event.keyCode === 46) {
            // Del
            this.list = [];
            for(let i=0; i<15; i++) {
                this.list.push({});
            }
            this.refDiceBoard.current.refresh(this.list);
        }
        if(this.state.isOpen === true) {
            if(event.keyCode >= 97 && event.keyCode <= 102) {
                this.newDice.push(event.keyCode - 96);
            }
            //
            if(this.newDice.length > 3) {
                this.newDice.shift();
            }
            // Set state.
            this.setState({ newDice: this.newDice });
            // console.log(this.newDice);
        } else {
            if(event.keyCode === 107) {
                // +
                this.newDice = [];
                this.setState({ newDice: this.newDice });
                this.handleOpenDialog();
            } else if(event.keyCode === 109) {
                // -
                this.list[14] = {};
                // Update to boards.
                this.refDiceBoard.current.refresh(this.list);
            }    
        }
    }

    //
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPress, false);
    }

    //
    handleOpenDialog = () => {
        this.setState({ isOpen: true });
    };
    
    //
    handleCloseDialog = () => {
        this.setState({ isOpen: false });
    };

    //
    handleNewRecord = () => {
        // Check dice must be 3 values;
        if(this.newDice.length < 3) {
            return;
        }

        let status = '';
        let color = '#fca311';
        let colorFont = '#000000';
        let colorFontBG = '#ffffff';
        let scoreAll = this.newDice[0] + this.newDice[1] + this.newDice[2];
        if(scoreAll === 11) {
            status = 'highlow';
            colorFont = '#ffffff';
            colorFontBG = '#0ea201';
        } else if(scoreAll < 11) {
            status = 'low';
        } else if(scoreAll > 11) {
            status = 'high';
        }

        if((scoreAll % 2) === 1) {
            color = '#0ea201';
        }

        if(this.list[14].score1 === undefined) {
            this.list[14] = {
                score1: this.newDice[0],
                score2: this.newDice[1],
                score3: this.newDice[2],
                scoreAll: scoreAll,
                status: status,
                color: color,
                colorFont: colorFont,
                colorFontBG: colorFontBG,
            };
        } else {
            // New record.
            this.list.push({
                score1: this.newDice[0],
                score2: this.newDice[1],
                score3: this.newDice[2],
                scoreAll: scoreAll,
                status: status,
                color: color,
                colorFont: colorFont,
                colorFontBG: colorFontBG,
            });

            // Remove old record.
            this.list.shift();
        }

        // Update to boards.
        this.refDiceBoard.current.refresh(this.list);

        //
        this.handleCloseDialog();
    }

    //
    render() {
        return (
            <>
                <Dialog
                    open={this.state.isOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        เพิ่มรายการใหม่
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <table>
                                <tbody>
                                    {
                                        (this.state.newDice.length === 0) ? 
                                        <tr>
                                            <td>
                                                <img src={"./images/dice/what.png"} width="100" alt="Score" />
                                            </td>
                                            <td>
                                                <img src={"./images/dice/what.png"} width="100" alt="Score" />
                                            </td>
                                            <td>
                                                <img src={"./images/dice/what.png"} width="100" alt="Score" />
                                            </td>
                                        </tr> : 
                                        <tr>
                                            <td>
                                                {
                                                    (this.state.newDice[0] === undefined) ? 
                                                    <img src={"./images/dice/what.png"} width="100" alt="Score" /> :
                                                    <img src={"./images/dice/" + this.state.newDice[0] + ".png"} width="100" alt="Score" />
                                                }
                                            </td>
                                            <td>
                                                {
                                                    (this.state.newDice[1] === undefined) ? 
                                                    <img src={"./images/dice/what.png"} width="100" alt="Score" /> :
                                                    <img src={"./images/dice/" + this.state.newDice[1] + ".png"} width="100" alt="Score" />
                                                }
                                            </td>
                                            <td>
                                                {
                                                    (this.state.newDice[2] === undefined) ? 
                                                    <img src={"./images/dice/what.png"} width="100" alt="Score" /> :
                                                    <img src={"./images/dice/" + this.state.newDice[2] + ".png"} width="100" alt="Score" />
                                                }
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" variant="contained" onClick={this.handleCloseDialog}>
                            ยกเลิก (c)
                        </Button>
                        <Button color="primary" variant="contained" onClick={this.handleNewRecord} autoFocus>
                            ตกลง (&#x23CE;)
                        </Button>
                    </DialogActions>
                </Dialog>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <DiceStatsBoard ref={this.refDiceBoard} data={this.list} />
                    </Grid>
                    <Grid item xs={12}>
                        <span style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold'}}>
                            ปุ่ม + เพื่อเพิ่มรายการใหม่, 
                            ปุ่ม - เพื่อลบรายการล่าสุด, 
                            ปุ่ม Delete เพื่อลบรายการทั้งหมด, 
                        </span>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Board