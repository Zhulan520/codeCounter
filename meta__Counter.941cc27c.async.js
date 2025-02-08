"use strict";(self.webpackChunkqingyi_code_counter=self.webpackChunkqingyi_code_counter||[]).push([[98],{61021:function(C,n,e){e.r(n),e.d(n,{demos:function(){return m}});var a=e(17061),t=e.n(a),i=e(17156),r=e.n(i),d=e(67294),p=e(42047),c=e(619),m={"counter-demo-0":{component:d.memo(d.lazy(r()(t()().mark(function u(){var s,_;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,619));case 2:return s=o.sent,_=s.default,o.abrupt("return",{default:function(){return d.createElement(_,null)}});case 5:case"end":return o.stop()}},u)})))),asset:{type:"BLOCK",id:"counter-demo-0",refAtomIds:["Counter"],dependencies:{"index.jsx":{type:"FILE",value:`import Counter from '../Counter';

export default () => <Counter />;`},"../Counter.tsx":{type:"FILE",value:e(90834).Z}},entry:"index.jsx"},context:{"../Counter.tsx":c,"/Users/eleme/Desktop/codeCounter/src/Counter/index.tsx":c},renderOpts:{compile:function(){var u=r()(t()().mark(function _(){var E,o=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(335).then(e.bind(e,37335));case 2:return l.abrupt("return",(E=l.sent).default.apply(E,o));case 3:case"end":return l.stop()}},_)}));function s(){return u.apply(this,arguments)}return s}()}}}},619:function(C,n,e){e.r(n);var a=e(27424),t=e.n(a),i=e(67294),r=e(85893),d=function(){var c=(0,i.useState)(0),m=t()(c,2),u=m[0],s=m[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Current Count: ",u]}),(0,r.jsx)("button",{type:"button",onClick:function(){return s(u+1)},children:"Increment"}),(0,r.jsx)("button",{type:"button",onClick:function(){return s(u-1)},children:"Decrement"})]})};n.default=d},27335:function(C,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(42047);const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},90834:function(C,n){n.Z=`// src/Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
`}}]);
