import React, { useState } from 'react'
import Header from './Header'
import Page1 from './Pages/HomePage'
import Page2 from './Pages/SideBar'
import Footer from './Footer'
import SideButtonLeft from './Side Menu/SideButtonLeft.jsx'
import SideButtonRight from './Side Menu/SideButtonRight.jsx'

const Hero = ({ onToggle }) => {
    const [menuopen, setMenuOpen] = React.useState(false)
    const [footerbottomleft, FooterBottomLeft] = React.useState(false)
    const [footerbottomright, FooterBottomRight] = React.useState(false)
    const [handleclick, setHandleClick] = useState(false)

    const menuFunction = () => {
        setMenuOpen(!menuopen)

        setHandleClick(!handleclick)
    }

    return (
        <div className="">
            <Header menu={menuFunction} onRotate={menuopen} />
            <div className="pt-20 pb-20 flex justify-between">
                {!footerbottomleft && !footerbottomright ? <Page1 onOutput={handleclick} /> : footerbottomleft ? <SideButtonLeft /> : <SideButtonRight />}
                <Page2 onToggle={onToggle} onOpen={menuopen} />
            </div>
            <Footer
                PathLeft={!footerbottomright}
                PathRight={!footerbottomleft}
                buttonLeft={() => FooterBottomLeft(!footerbottomleft)}
                buttonRight={() => FooterBottomRight(!footerbottomright)}
            />
        </div>
    )
}

export default Hero
