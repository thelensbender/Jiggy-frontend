import React from 'react';
import {ChevronRight} from 'lucide-react';

export default function DropDown({value,Index}) {
   return (
      <div className="flex items-center">
         <div>{value[Index]}</div>
         <ChevronRight color="#717171" size={20}/>
      </div>
   )
}
