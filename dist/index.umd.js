!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react/jsx-runtime"),require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react","styled-components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).reactToggly={},e.ReactJSXRuntime,e.React,e.styled)}(this,(function(e,t,o,s){"use strict";const i=s.label`
  display: inline-block;
  position: relative;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};

  ${({theme:e})=>"ios"===e&&s.css`
      width: 60px;
      height: 34px;
    `}

  ${({theme:e})=>"bootstrap"===e&&s.css`
      width: 50px;
      height: 24px;
    `}

  ${({theme:e})=>"tailwind"===e&&s.css`
      width: 56px;
      height: 32px;
    `}
`,a=s.input`
  opacity: 0;
  width: 0;
  height: 0;
`,r=s.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;

  ${({theme:e})=>"ios"===e&&s.css`
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

  ${({theme:e})=>"bootstrap"===e&&s.css`
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

  ${({theme:e})=>"tailwind"===e&&s.css`
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

  ${a}:checked + & {
    ${({theme:e})=>"ios"===e&&s.css`
        background-color: #4caf50;
      `}

    ${({theme:e})=>"bootstrap"===e&&s.css`
        background-color: #0d6efd;
      `}

    ${({theme:e})=>"tailwind"===e&&s.css`
        background-color: #3b82f6;
      `}
  }

  ${a}:checked + &:before {
    ${({theme:e})=>"ios"===e&&s.css`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"bootstrap"===e&&s.css`
        transform: translateX(26px);
      `}

    ${({theme:e})=>"tailwind"===e&&s.css`
        transform: translateX(24px);
      `}
  }
`,c=s.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`,n=s(c)`
  left: 6px;
`,d=s(c)`
  right: 6px;
`;e.Toggle=({checked:e,defaultChecked:s=!1,onChange:c,onFocus:l,onBlur:h,name:p,value:b,id:u,icons:m,"aria-labelledby":x,"aria-label":f,disabled:g,className:k,theme:y="ios"})=>{const $=void 0!==e,[w,j]=o.useState(s),v=$?e:w;return t.jsxs(i,{disabled:g,className:k,theme:y,children:[t.jsx(a,{type:"checkbox",checked:v,onChange:e=>{g||($||j(e.target.checked),c?.(e))},onFocus:l,onBlur:h,name:p,value:b,id:u,"aria-labelledby":x,"aria-label":f,disabled:g}),t.jsxs(r,{className:"slider",theme:y,children:[m?.checked&&v&&t.jsx(n,{children:m.checked}),m?.unchecked&&!v&&t.jsx(d,{children:m.unchecked})]})]})}}));
//# sourceMappingURL=index.umd.js.map
