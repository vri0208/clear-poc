import React from 'react';
import '../Styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header() {
    return (
        <header className="header">
        <img src="https://cprca.sharepoint.com/_api/siteiconmanager/getsitelogo?type=%271%27&hash=638170477765484232" alt="Company Logo" className="logo" />
        <div className="appName" >Customer Station</div>

    <DropdownButton         variant="secondary"
  
         title="Clear Poc">
      <Dropdown.Item  href="https://cprca.sharepoint.com/">Home</Dropdown.Item>
      <Dropdown.Item  href="https://cprca.sharepoint.com/">All my Apps</Dropdown.Item>
    </DropdownButton>
    </header>
    );
}

export default Header;