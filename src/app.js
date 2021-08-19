import React, { Component, useEffect } from 'react';
import Grass from './components/ViewObjects/grass';
import Road from './components/ViewObjects/road';
import Divider from './components/ViewObjects/divider';
import { Button } from 'react-bootstrap';
import styles from './mystyles.css';
import TrafficManager from './components/ViewObjects/trafficManager';



class App extends Component {

    constructor (props){
        super(props);
        this.state = {
            seen: false,
            traffic: false,
            directions: [],
            button: true
        }
        this.renderWays = this.renderWays.bind(this);
    }  

    enableTraffic(){
        this.setState({
            traffic : true
        })
        this.setState({
            button : false
        })
    }

    renderWays(){
        var ways = ["northLeft", "northRight", "northUturn", "northStraight","southLeft", "southRight", "southUturn", "southStraight",
        "eastLeft", "eastRight", "eastUturn", "eastStraight","westLeft", "westRight", "westUturn", "westStraight"]
        var invalidValues = [];
        var invalidRange = [];
        var emptyValues= []
        ways.forEach(element=>{
            var v = parseInt(document.getElementById(element).value)
            if(document.getElementById(element).value == ""){
                emptyValues.push(element);
            }
            else if(isNaN(v)){
                invalidValues.push(element);
            }
            else if(v<0 || v>100){
                invalidRange.push(element);
            }
        });
        if(invalidValues.length !=0 || invalidRange.length != 0 || emptyValues.length != 0){
            var invalidO = "";
            if(invalidValues.length !=0){
                invalidO = invalidO.concat("Invalid Values in : ");
                invalidO = invalidO.concat(JSON.stringify(invalidValues));
                invalidO = invalidO.concat("\n");
            }
            if(invalidRange.length != 0){
                invalidO = invalidO.concat("Invalid Range Values in : (value E (0, 100))");
                invalidO = invalidO.concat(JSON.stringify(invalidRange));
                invalidO = invalidO.concat("\n");
            }
            if(emptyValues.length != 0){
                invalidO = invalidO.concat("Empty Values in : ");
                invalidO = invalidO.concat(JSON.stringify(emptyValues));
                invalidO = invalidO.concat("\n");
            }
            window.alert(invalidO);
        }
        else{
            var input = {
                west_left : document.getElementById("westLeft").value,
                west_right : document.getElementById("westRight").value,
                west_straight : document.getElementById("westStraight").value,
                west_uturn : document.getElementById("westUturn").value,
                east_left : document.getElementById("eastLeft").value,
                east_right : document.getElementById("eastRight").value,
                east_straight : document.getElementById("eastStraight").value,
                east_uturn : document.getElementById("eastUturn").value,
                north_left : document.getElementById("northLeft").value,
                north_right : document.getElementById("northRight").value,
                north_straight : document.getElementById("northStraight").value,
                north_uturn : document.getElementById("northUturn").value,
                south_left : document.getElementById("southLeft").value,
                south_right : document.getElementById("southRight").value,
                south_straight : document.getElementById("southStraight").value,
                south_uturn : document.getElementById("southUturn").value
            };
            
            const _this = this

            fetch("http://localhost:5000/traffic-enable", {
                method: "POST",
                headers: {"Content-Type" :  "application/json", "Access-Control-Allow-Origin" : "*"},
                body: JSON.stringify(input)
            }).then(response=>response.json())
              .then(function(json) {
                  _this.setState({
                      directions: json
                  })
                  _this.enableTraffic()
              })
            
            // if(content) {
            //     console.log(content)
            // }
            // this.enableTraffic();
        }
    }

    
    render() { 
        var w = window.innerWidth;
        var h = window.innerHeight;
        return (
        <div>
            <div style = {{position: 'absolute', left: 0.05*w, top: 0.05*h, zIndex : 4}}>
                <input id = "northLeft" type ="text" placeholder = "left" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0}}></input>
                <input id = "northRight" type ="text" placeholder = "right" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0}}></input>
                <input id = "northStraight" type ="text" placeholder = "straight" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0.1*h}}></input>
                <input id = "northUturn" type ="text" placeholder = "uturn" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0.1*h}}></input>
                <Button  style = {{position: 'absolute', left: 0.05*w, top: 0.05*h, width: 0.03*w, height: 0.03*h, alignItems: 'center'}}>
                    North
                </Button>
            </div>
            <div style = {{position: 'absolute', left: 0.05*w, top: 0.85*h, zIndex : 4}}>
                <input id = "westLeft" type ="text" placeholder = "left" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0}}></input>
                <input id = "westRight" type ="text" placeholder = "right" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0}}></input>
                <input id = "westStraight" type ="text" placeholder = "straight" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0.1*h}}></input>
                <input id = "westUturn" type ="text" placeholder = "uturn" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0.1*h}}></input>
                <Button  style = {{position: 'absolute', left: 0.05*w, top: 0.05*h, width: 0.03*w, height: 0.03*h, alignItems: 'center'}}>
                    West
                </Button>
            </div>
            <div style = {{position: 'absolute', left: 0.8*w, top: 0.85*h, zIndex : 4}}>
                <input id = "southLeft" type ="text" placeholder = "left" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0}}></input>
                <input id = "southRight" type ="text" placeholder = "right" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0}}></input>
                <input id = "southStraight" type ="text" placeholder = "straight" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0.1*h}}></input>
                <input id = "southUturn" type ="text" placeholder = "uturn" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0.1*h}}></input>
                <Button  style = {{position: 'absolute', left: 0.05*w, top: 0.05*h, width: 0.03*w, height: 0.03*h, alignItems: 'center'}}>
                    South
                </Button>
            </div>
            <div style = {{position: 'absolute', left: 0.8*w, top: 0.05*h, zIndex : 4}}>
                <input id = "eastLeft" type ="text" placeholder = "left" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0}}></input>
                <input id = "eastRight" type ="text" placeholder = "right" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0}}></input>
                <input id = "eastStraight" type ="text" placeholder = "straight" size = {0.005 *w} style = {{position: 'absolute', left: 0, top: 0.1*h}}></input>
                <input id = "eastUturn" type ="text" placeholder = "uturn" size = {0.005 *w} style = {{position: 'absolute', left: 0.1*w, top: 0.1*h}}></input>
                <Button  style = {{position: 'absolute', left: 0.05*w, top: 0.05*h, width: 0.03*w, height: 0.03*h, alignItems: 'center'}}>
                    East
                </Button>
            </div>
            <Road style = {{zIndex : 1}}/>
            <Grass style = {{zIndex : 0}}/>
            <Divider style = {{zIndex : 2}}/>
            {this.state.button?
            <Button onClick={this.renderWays} style = {styles.btn}>
                <h1 style = {{color: 'grey'}}>
                    Manage Traffic
                </h1>
            </Button>:null}
            {this.state.traffic && <TrafficManager timeline = {this.state.directions} style = {{zIndex: 15}}></TrafficManager>}
        </div>
        );
        }
}

export default App;