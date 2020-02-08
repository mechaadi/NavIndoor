import React, { Component } from 'react'

export class Mapwize extends Component {
    render() {
        return (
            <div>
                 <div class="row">
                    <iframe src='https://maps.mapwize.io/#/v/sharda_university' height={window.innerHeight} width={window.innerWidth+20}></iframe>
              </div>
            </div>
        )
    }
}

export default Mapwize
