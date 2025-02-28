"use strict";var e=require("react/jsx-runtime"),t=require("react"),o=require("styled-components");const s=o.label`
  display: inline-block;
  position: relative;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};

  ${({theme:e})=>"ios"===e&&o.css`
      width: 60px;
      height: 34px;
    `}

  ${({theme:e})=>"bootstrap"===e&&o.css`
      width: 50px;
      height: 24px;
    `}

  ${({theme:e})=>"tailwind"===e&&o.css`
      width: 56px;
      height: 32px;
    `}
`,i=o.input`
  opacity: 0;
  width: 0;
  height: 0;
`,r=o.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;

  ${({theme:e})=>"ios"===e&&o.css`
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

  ${({theme:e})=>"bootstrap"===e&&o.css`
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

  ${({theme:e})=>"tailwind"===e&&o.css`
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

  ${i}:checked + & {
    ${({theme:e})=>"ios"===e&&o.css`
        background-color: #4caf50;
      `}

    ${({theme:e})=>"bootstrap"===e&&o.css`
        background-color: #0d6efd;
      `}

    ${({theme:e})=>"tailwind"===e&&o.css`
        background-color: #3b82f6;
      `}
  }

  ${i}:checked + &:before {
    ${({theme:e})=>"ios"===e&&o.css`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"bootstrap"===e&&o.css`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"tailwind"===e&&o.css`
        transform: translateX(24px);
      `}
  }
`,a=o.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`,c=o(a)`
  left: 6px;
`,n=o(a)`
  right: 6px;
`;exports.Toggle=({checked:o,defaultChecked:a=!1,onChange:d,onFocus:l,onBlur:h,name:b,value:p,id:u,icons:x,"aria-labelledby":m,"aria-label":g,disabled:k,className:f,theme:$="ios"})=>{const w=void 0!==o,[y,j]=t.useState(a),v=w?o:y;return e.jsxs(s,{disabled:k,className:f,theme:$,children:[e.jsx(i,{type:"checkbox",checked:v,onChange:e=>{k||(w||j(e.target.checked),d?.(e))},onFocus:l,onBlur:h,name:b,value:p,id:u,"aria-labelledby":m,"aria-label":g,disabled:k}),e.jsxs(r,{className:"slider",theme:$,children:[x?.checked&&v&&e.jsx(c,{children:x.checked}),x?.unchecked&&!v&&e.jsx(n,{children:x.unchecked})]})]})};
//# sourceMappingURL=index.cjs.map
