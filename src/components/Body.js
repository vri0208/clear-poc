import React ,{ useState }  from 'react';
import '../Styles.css';
import Dropdown from 'react-bootstrap/Dropdown';



function Body() {
    const [selectedVal, setSelectedVal] = useState('');

    const Values = [
        { name: 'Vessel Arrival Date', code: 'NY' },
        { name: 'test2', code: 'RM' },
        { name: 'test3', code: 'LDN' },
       
    ];
    

    return (
        <div className="toggle">
<Dropdown onChange={(e) => setSelectedVal(e.value)} value={selectedVal} placeholder="Sort by:" options={Values} className="dropdown"/>
</div>
   
    );
}

export default Body;