import React, { PureComponent } from "react";
import { MDBDataTableV5 } from "mdbreact";
import DataTable from "react-data-table-component"


class DisplayData extends PureComponent {
    constructor(props) {
        super(props);
      }
    
      state = {
          data: [],
          date: 1,
          count: 1
            
      };

      HandleCount = () => {
        const { count } = this.state;
        this.setState({count: count + 1});
        console.log('count', count)
    }

    componentDidMount(){
        fetch('https://score-dev-7836.firebaseio.com/games/nba/seasons/week1.json')
        .then(response => response.json())
        .then(data => this.setState({data}))
    }


    render(){
        const { data, date, count } = this.state;
        console.log(data);
        return (
            <div>
{                    console.log('key', Object.entries(data))
}                
                {Object.values(data).map(e=>{
                    console.log("e date",e);
                    return (
                    <div>
                        <hr />
                        <text style={{ color: 'black' }}>
                            Date 
                        </text>
                        <hr />      
                            {Object.values(e).map(e=>{
                                console.log("e game",e);
                                    return (
                                        <div>
                                            <text style={{ color: 'blue' }}>
                                                Game 
                                            </text>
                                            <hr /> 
                                            <div>
                                                <p>
                                                    <text style={{ color: 'green' }}>
                                                        Team1: {e.team1.teamID} 
                                                    </text>
                                                        {' / '}
                                                    <text style={{ color: 'red' }}>
                                                        Team2: {e.team2.teamID}
                                                    </text>
                                                </p>
                                                <p>
                                                    {e.team1.score}{' - '}{e.team2.score}
                                                </p>
                                                <p style={{ color: 'red' }}>{e.time}</p>
                                                <hr />
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DisplayData;