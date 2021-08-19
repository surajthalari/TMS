import { ReactDOM } from 'react-dom';
import React, { Component } from 'react';

class SouthTwo extends Component {

    constructor (props){
        super(props);
        this.state = {
            colors : new Array("#000000", "#00FFFF"),
            color: "#00FFFF",
            index: 0,
        }
    }

    timer(){
        this.setState({
            index: (this.state.index+1)%2
          })
    }


    componentDidMount(){
        this.intervalId = setInterval(this.timer.bind(this), 1000); 
        this.updateCanvas();
    }

    componentDidUpdate(){
        this.updateCanvas();
    }   

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = this.state.colors[this.state.index];
        var start = {x: this.refs.canvas.width *(0.3), y: this.refs.canvas.height};
        var endPoint = {x: this.refs.canvas.width *(0.3), y: 0};
        var startz = {x: this.refs.canvas.width *(0.4), y: this.refs.canvas.height};
        var endPointz = {x: this.refs.canvas.width *(0.4), y: 0};

        ctx.moveTo(start.x, start.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.lineTo(endPointz.x, endPointz.y);
        ctx.lineTo(startz.x, startz.y);
        ctx.fill();
        start = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height};
        var controlPoint1 = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height * (0.7)};
        var controlPoint2 = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height * (0.7)};
        var endPoint = {x: 0, y: this.refs.canvas.height * (0.7)};
        startz = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height};
        var controlPoint1z = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height * (0.6)};
        var controlPoint2z = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height * (0.6)};
        endPointz = {x: 0, y: this.refs.canvas.height * (0.6)};

        ctx.moveTo(start.x, start.y); //Move to start point
        ctx.bezierCurveTo(
            controlPoint1.x, controlPoint1.y,
            controlPoint2.x, controlPoint2.y,
            endPoint.x, endPoint.y
        ); //Draw curve

        ctx.lineTo(endPointz.x, endPointz.y);
        ctx.bezierCurveTo(
            controlPoint2z.x, controlPoint2z.y,
            controlPoint1z.x, controlPoint1z.y,
            startz.x, startz.y
        );
        ctx.lineTo(start.x, start.y);
        ctx.fill();
        start = {x: this.refs.canvas.width *(0.3), y: this.refs.canvas.height};
        controlPoint1 = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height * (0.45)};
        controlPoint2 = {x: this.refs.canvas.width * (0.7), y: this.refs.canvas.height * (0.45)};
        endPoint = {x: this.refs.canvas.width *(0.7), y: this.refs.canvas.height};
        startz = {x: this.refs.canvas.width *(0.4), y: this.refs.canvas.height};
        controlPoint1z = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height * (0.55)};
        controlPoint2z = {x: this.refs.canvas.width * (0.6), y: this.refs.canvas.height * (0.55)};
        endPointz = {x: this.refs.canvas.width *(0.6), y: this.refs.canvas.height};

        ctx.moveTo(start.x, start.y); //Move to start point
        ctx.bezierCurveTo(
            controlPoint1.x, controlPoint1.y,
            controlPoint2.x, controlPoint2.y,
            endPoint.x, endPoint.y
        ); //Draw curve

        ctx.lineTo(endPointz.x, endPointz.y);
        ctx.bezierCurveTo(
            controlPoint2z.x, controlPoint2z.y,
            controlPoint1z.x, controlPoint1z.y,
            startz.x, startz.y
        );
        ctx.lineTo(start.x, start.y);
        ctx.fill();
        start = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height};
        controlPoint1 = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height * (0.3)};
        controlPoint2 = {x: this.refs.canvas.width * (0.3), y: this.refs.canvas.height * (0.3)};
        endPoint = {x: this.refs.canvas.width, y: this.refs.canvas.height * (0.3)};
        startz = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height};
        controlPoint1z = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height * (0.4)};
        controlPoint2z = {x: this.refs.canvas.width * (0.4), y: this.refs.canvas.height * (0.4)};
        endPointz = {x: this.refs.canvas.width, y: this.refs.canvas.height * (0.4)};

        ctx.moveTo(start.x, start.y); //Move to start point
        ctx.bezierCurveTo(
            controlPoint1.x, controlPoint1.y,
            controlPoint2.x, controlPoint2.y,
            endPoint.x, endPoint.y
        ); //Draw curve

        ctx.lineTo(endPointz.x, endPointz.y);
        ctx.bezierCurveTo(
            controlPoint2z.x, controlPoint2z.y,
            controlPoint1z.x, controlPoint1z.y,
            startz.x, startz.y
        );
        ctx.lineTo(start.x, start.y);
        ctx.fill();
        ctx.strokeStyle = this.state.colors[this.state.index];
        ctx.stroke();
    }
    render() { 

        return (
        <div>
            <canvas ref= "canvas" width={window.innerWidth} height={window.innerHeight} style={{position: 'absolute', left: 0, top: 0, zIndex: 0}}/>
        </div>
        );
        }
}
export default SouthTwo;