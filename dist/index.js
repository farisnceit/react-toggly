import{jsxs as e,jsx as t}from"react/jsx-runtime";import o from"react";import i,{css as a}from"styled-components";const r=i.label`
  display: inline-block;
  position: relative;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};

  ${({theme:e})=>"ios"===e&&a`
      width: 60px;
      height: 34px;
    `}

  ${({theme:e})=>"bootstrap"===e&&a`
      width: 50px;
      height: 24px;
    `}

  ${({theme:e})=>"tailwind"===e&&a`
      width: 56px;
      height: 32px;
    `}
`,n=i.input`
  opacity: 0;
  width: 0;
  height: 0;
`,d=i.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;

  ${({theme:e})=>"ios"===e&&a`
      background-color: #ccc;

      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${({theme:e})=>"bootstrap"===e&&a`
      background-color: #6c757d;

      &:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${({theme:e})=>"tailwind"===e&&a`
      background-color: #d1d5db;

      &:before {
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${n}:checked + & {
    ${({theme:e})=>"ios"===e&&a`
        background-color: #4caf50;
      `}

    ${({theme:e})=>"bootstrap"===e&&a`
        background-color: #0d6efd;
      `}

    ${({theme:e})=>"tailwind"===e&&a`
        background-color: #3b82f6;
      `}
  }

  ${n}:checked + &:before {
    ${({theme:e})=>"ios"===e&&a`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"bootstrap"===e&&a`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"tailwind"===e&&a`
        transform: translateX(24px);
      `}
  }
`,c=i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`,l=i(c)`
  left: 6px;
`,s=i(c)`
  right: 6px;
`,h=({checked:i,defaultChecked:a=!1,onChange:c,onFocus:h,onBlur:p,name:b,value:m,id:u,icons:x,"aria-labelledby":f,"aria-label":g,disabled:k,className:$,theme:w="ios"})=>{const y=void 0!==i,[v,C]=o.useState(a),N=y?i:v;return e(r,{disabled:k,className:$,theme:w,children:[t(n,{type:"checkbox",checked:N,onChange:e=>{k||(y||C(e.target.checked),c?.(e))},onFocus:h,onBlur:p,name:b,value:m,id:u,"aria-labelledby":f,"aria-label":g,disabled:k}),e(d,{className:"slider",theme:w,children:[x?.checked&&N&&t(l,{children:x.checked}),x?.unchecked&&!N&&t(s,{children:x.unchecked})]})]})};export{h as Toggle};
//# sourceMappingURL=index.js.map
