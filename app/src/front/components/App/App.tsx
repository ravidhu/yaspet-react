import * as React from 'react'

import './style.scss'

export default class App extends React.Component {
    render() {

        return (
            <div className="yaspet">
                <div>
                    <h1>Hello YASPET ! <br /> <small>React Edition</small></h1>

                    <h2>YASPET is a starter pack to create glorious Electron app</h2>
                </div>
                <div>
                    <p>It's light like a breeze, it only come with :</p>

                    <ul>
                        <li>Electron 4</li>
                        <li>Typescript 3</li>
                    </ul>

                    <p>And Tooling for development :</p>

                    <ul>
                        <li>Webpack to bundle all front code and hot reload front during development.</li>
                        <li>Nodemon to reload the main process during development.</li>
                        <li>Jest for testing.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
