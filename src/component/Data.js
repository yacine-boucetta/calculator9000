
import React, { useState } from 'react';
import { useEffect } from 'react';

function Data() {
    const [test, setTest] = useState([])

    useEffect(() => {
        fetch("http://localhost/project/calculator9000/src/php/db.php")
            .then(res => res.json())
            .then((result) => setTest(result))
    }
        ,)

    return (<div className="val">
        {test.map((value,index) => <p key={index}>{value.cacul}={value.value}</p>)}
    </div>)
}

export default Data