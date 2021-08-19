import React, { Component } from 'react';

class Grass extends Component {
    componentDidMount(){
        this.updateCanvas();
    }

    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        var w = this.refs.canvas.width;
        var h = this.refs.canvas.height;
        ctx.beginPath();
        ctx.rect(0 ,0 ,0.26*w, 0.26*h);
        ctx.rect(0.74*w ,0 ,0.26*w, 0.26*h)
        ctx.rect(0 ,0.74*h ,0.26*w, 0.26*h)
        ctx.rect(0.74*w ,0.74*h ,0.26*w, 0.26*h)
        ctx.fillStyle = "#00FF00"
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
 
export default Grass;