import React, { Component } from 'react';
import EastOne from '../CanvasDirections/eastOne';
import EastTwo from '../CanvasDirections/eastTwo';
import WestOne from '../CanvasDirections/westOne';
import WestTwo from '../CanvasDirections/westTwo';
import NorthOne from '../CanvasDirections/northOne';
import NorthTwo from '../CanvasDirections/northTwo';
import SouthOne from '../CanvasDirections/southOne';
import SouthTwo from '../CanvasDirections/southTwo';

class TrafficManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            eastOne : false,
            eastTwo : false,
            westOne : false,
            westTwo : false,
            northOne : false,
            northTwo : false,
            southOne : false,
            southTwo : false
        }
    }

    timereo(toggle){
        this.setState({
            eastOne: false
        })
    }

    timeret(){
        this.setState({
            eastTwo: false
        })
    }
    
    timerwo(){
        this.setState({
            westOne: false
        })
    }

    timerwt(){
        this.setState({
            westTwo: false
        })
    }

    timerno(){
        this.setState({
            northOne: false
        })
    }

    timernt(){
        this.setState({
            northTwo: false
        })
    }

    timerso(){
        this.setState({
            southOne: false
        })
    }

    timerst(){
        this.setState({
            southTwo: false
        })
    }

    settimereo(){
        this.setState({
            eastOne: true
        })
    }

    settimeret(){
        this.setState({
            eastTwo: true
        })
    }
    
    settimerwo(){
        this.setState({
            westOne: true
        })
    }

    settimerwt(){
        this.setState({
            westTwo: true
        })
    }

    settimerno(){
        this.setState({
            northOne: true
        })
    }

    settimernt(){
        this.setState({
            northTwo: true
        })
    }

    settimerso(){
        this.setState({
            southOne: true
        })
    }

    settimerst(){
        this.setState({
            southTwo: true
        })
    }

    refresh(){
        window.location.reload(true)
    }

    componentDidMount(){
        var to = 0
        console.log("###############################")
        console.log(this.props.timeline)
        Object.entries(this.props.timeline).map(it => {
            Object.entries(it[1]).map(item=>{
            if(item[0] == "eastOne"){
                setTimeout(this.settimereo.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timereo.bind(this), to)
            }
            else if(item[0] == "eastTwo"){
                setTimeout(this.settimeret.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timeret.bind(this), to)
            }
            else if(item[0] == "westOne"){
                setTimeout(this.settimerwo.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timerwo.bind(this), to)
            }
            else if(item[0] == "westTwo"){
                setTimeout(this.settimerwt.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timerwt.bind(this), to)
            }
            else if(item[0] == "northOne"){
                setTimeout(this.settimerno.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timerno.bind(this), to)
            }
            else if(item[0] == "northTwo"){
                setTimeout(this.settimernt.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timernt.bind(this), to)
            }
            else if(item[0] == "southOne"){
                setTimeout(this.settimerso.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timerso.bind(this), to)
            }
            else if(item[0] == "southTwo"){
                setTimeout(this.settimerst.bind(this), to)
                to = to+(parseInt(item[1])*1000)
                setTimeout(this.timerst.bind(this), to)
            }
            })
        })
        // setTimeout(this.refresh.bind(this), to + 1000)
    }

    render() { 
        return ( 
            <div>
                {this.state.eastOne ? <EastOne></EastOne> : null}
                {this.state.eastTwo ? <EastTwo></EastTwo> : null}
                {this.state.westOne ? <WestOne></WestOne> : null}
                {this.state.westTwo ? <WestTwo></WestTwo> : null}
                {this.state.northOne ? <NorthOne></NorthOne> : null}
                {this.state.northTwo ? <NorthTwo></NorthTwo> : null}
                {this.state.southOne ? <SouthOne></SouthOne> : null}
                {this.state.southTwo ? <SouthTwo></SouthTwo> : null}
            </div>
         );
    }
}
 
export default TrafficManager;