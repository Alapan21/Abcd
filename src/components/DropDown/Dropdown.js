import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dropdown.scss';

//! Component Imports
import DropDownItem from '../DropDownItem/DropDownItem';

//! SVG imports
import { ChevronIcon, PlusIcon, ArrowIcon } from '../../resources/assets/index';

function Dropdown() {

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(ele) {
    const height = ele.offsetHeight + 32;
    setMenuHeight(height);
  }

  const goToMenu = (menuItem) => {
    menuItem && setActiveMenu(menuItem);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem> My Profile </DropDownItem>
          <DropDownItem
            left={<PlusIcon />}
            right={<ChevronIcon />}
            goTo={() => goToMenu('settings')}>
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem
            left={<ArrowIcon />}
            goTo={() => goToMenu('main')}>
            Go Back
          </DropDownItem>
          <DropDownItem> Item 1 </DropDownItem>
          <DropDownItem> Item 2 </DropDownItem>
          <DropDownItem> Item 3 </DropDownItem>
          <DropDownItem> Item 4 </DropDownItem>
          <DropDownItem> Item 5 </DropDownItem>
          <DropDownItem> Item 6 </DropDownItem>
          <DropDownItem> Item 7 </DropDownItem>
        </div>
      </CSSTransition>
    </div >
  )
}

export default Dropdown
