import React, { useContext , useEffect } from 'react'
import noteContext from '../Context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
       a.update()
       // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is About {a.state.name} and he is in {a.state.class}
        </div>
    )
}

export default About
