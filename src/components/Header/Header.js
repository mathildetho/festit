import React, {useState} from 'react';
import Burger from "./Burger";
import Menu from './Menu';


const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    );
  };


export default Header;