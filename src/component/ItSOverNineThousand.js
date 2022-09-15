import React from 'react';
import '../css/AmazingNumberButton.css';
;

function ItSOverNineThousand(props){


return(
    <div className='woaw'>
        {props.nineThousand > 9000 &&

<p>it's over 9000</p>

        }
        
    </div>
)


}

export default ItSOverNineThousand
