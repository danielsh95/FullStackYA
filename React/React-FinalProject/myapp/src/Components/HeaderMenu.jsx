import React, { useState } from 'react'

const HeaderMenuComp = ({ titles }) => {
    const [indexShowUnderLine, setIndexShowUnderLine] = useState(0)
    return (
        <div>
            {
                titles.map((title, index) => {
                    return <label onClick={() => setIndexShowUnderLine(index)} key={index} style={{ margin: '10px' }}>
                        {
                            indexShowUnderLine == index ? <u>{title}</u> : title
                        }
                    </label>
                })
            }
        </div>
    )
}

export default HeaderMenuComp