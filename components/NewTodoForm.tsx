'use client';

import { useState } from 'react';

const NewTodoForm = ({ onChange }: { onChange: () => void }) => {
  const [state, updateStatedata] = useState('');

  return (
    <div className="">
      <form className="mx-auto flex flex-col items-center">
        <input type="text" onChange={onChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
