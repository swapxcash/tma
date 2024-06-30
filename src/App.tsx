import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
import {
    useBackButton,
    useBiometryManagerRaw,
} from '@tma.js/sdk-react';


function App() {
    const [count, setCount] = useState(0)


    console.log(WebApp.initData)
    console.log(WebApp.initDataUnsafe)
    const bb = useBackButton();
    const bm = useBiometryManagerRaw();

    // backButton.show()
    const clickHandler = async () => {
        console.log('s')
        bb.show()
        bm?.result?.openSettings()
        await bm?.result?.authenticate({ reason: 'Authorize to unlock the storage' })

        console.log('x', bm?.result)

        // const bm = await biometryManager;
        // bm
        //     .authenticate({ reason: 'Authorize to unlock the storage' })
        //     .then(token => {
        //         console.log('Token received', token);
        //     });
    }


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <button type="button" onClick={clickHandler} >click</button>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {/* Here we add our button with alert callback */}
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}.`)}>
                    Show Alert
                </button>
            </div>
        </>
    )
}

export default App