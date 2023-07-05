
import { useEffect, useState } from 'react'
import { Number } from './number'
import { Word } from './word'
import { style } from 'motion'
import styled from 'styled-components'
const Hour = styled.div`
    display: flex;
    flex-direction: row;`
export const Clock = () => {

    const [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day   , setDay   ] = useState(0);

    useEffect(()=> {
        const update = () => {
            const date = new Date();
            let hour = date.getHours();
            setHour(hour);
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());
        }

        update();

        const interval = setInterval(()=> {
            update();
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    return (
        <Hour className='clock'>
            <Hour>
                    <Number value={hour}/>
                    <Word value={':'} />
                    <Number value={minute}/>
                    <Word value={':'} />
                    <Number value={second}/>
                </Hour>
        </Hour>
    )
    
}