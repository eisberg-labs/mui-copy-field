import React from 'react';
import {CopyField, DefaultCopyField} from './copy-field';

export default {component: CopyField, title: 'Examples / CopyField'};

export const Basic = () => {
  const [out, setOut] = React.useState('');
  return (
    <>
      <CopyField label="Click on copy Button" value={"Enter text"} onCopySuccess={setOut}/>
      <p>{out}</p>
    </>
  );
}

export const Readonly = () => {
  const [out, setOut] = React.useState('');
  return (
    <>
      <CopyField disabled={true} label="Click on copy Button" value={"Read only val"} onCopySuccess={setOut}/>
      <p>{out}</p>
    </>
  );
}


export const Default = () => <DefaultCopyField label="Click on copy Button" value={"Enter text"} />;
