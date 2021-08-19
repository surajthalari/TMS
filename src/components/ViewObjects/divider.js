import React, { Component } from 'react';

class Divider extends Component {
    componentDidMount(){
        this.updateCanvas();
    }

    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        var w = this.refs.canvas.width;
        var h = this.refs.canvas.height;
        ctx.beginPath();
        ctx.rect(0.45*w ,0 ,w*0.1, h*0.1);
        ctx.rect(0.45*w ,0.9*h ,w*0.1, h*0.1);
        ctx.rect(0 ,0.45*h ,w*0.1, h*0.1);
        ctx.rect(0.9*w ,0.45*h ,w*0.1, h*0.1);
        ctx.fillStyle = "#FFFFFF"
        ctx.fill();
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
 
export default Divider;