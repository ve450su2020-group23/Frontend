import React from 'react'


import Live from 'components/Live'
import MEC from 'components/MultiEntrancesCharts'

export default class D1 extends React.Component {
    render() {
        return (
            <div className="myContainer">
                <h2>
                    Deliverable 2: People counting system with automatic entrances detection and separated counting
            </h2>


                <div className="content">

                    <div className="column">
                        <div className="content-box">
                            <h3>
                                Human traffic statistics
  </h3 >
                        < MEC/>
                        </div>


                    </div>

                    <div className="column">
                        <div className="content-box">
                            <h3>
                                Live
                  </h3>
                            < Live />
                        </div>
                    </div>

                </div>


            </div>

        )
    }
}