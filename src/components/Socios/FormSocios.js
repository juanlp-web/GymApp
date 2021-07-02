import { Modal, Button } from 'antd';
import React from 'react'
import { useState } from 'react';

export const FormSocios = () => {

    const [state, setState] = useState({modal1Visible: false,
        modal2Visible: false,})

 const setModal1Visible = (modal1Visible) => {
    setState({ modal1Visible });
  }

 const setModal2Visible = (modal2Visible) => {
    setState({ modal2Visible });
  }


    return (
      <>
      
        
      </>
    );
  }

