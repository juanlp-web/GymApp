import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { title } from 'process';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'test1',
      value: 27,
    },
    {
      type: 'test2',
      value: 25,
    },
    {
      type: 'test3',
      value: 18,
    },
    {
      type: 'test5',
      value: 15,
    },
    {
      type: 'test6',
      value: 10,
    },
    {
      type: 'test7',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'outer' },
    interactions: [{ type: 'element-active' }],
    title:"test"
  };
  return (
  <>
 
  <Pie {...config} />
  <h3 style={{display:'flex', alignItems: "center", justifyContent: "center"}}>Productos Vendidos</h3>
  </>
  )
};

export default DemoPie;