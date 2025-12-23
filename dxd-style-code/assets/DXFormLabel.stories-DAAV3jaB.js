import{_ as r}from"./DXFormLabel-Drk-51Wk.js";import"./vue.esm-bundler-Nfu98kES.js";import"./DXIcon-DQdlGsO1.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";const k={title:"Atoms/DXFormLabel",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text"},error:{control:"text",description:"Error message"},helper:{control:"text",description:"Helper text"},success:{control:"text",description:"Success message"},required:{control:"boolean",description:"Show required asterisk"},showValidationIcon:{control:"boolean",description:"Show validation icon in messages"},maxLength:{control:"number",description:"Maximum length for character count"},currentLength:{control:"number",description:"Current length for character count"},showCount:{control:"boolean",description:"Show character count"}}},t={args:{label:"Email Address",helper:"We will never share your email with anyone else."},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `})},n={args:{label:"Username",error:"Username is already taken",showValidationIcon:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    `})},o={args:{label:"Full Name",required:!0,helper:"Please enter your legal name"},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `})},a={args:{label:"Bio",helper:"Tell us about yourself",maxLength:150,currentLength:45,showCount:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    `})},s={args:{label:"Email Verification",success:"Email verified successfully!",showValidationIcon:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    `})},l={args:{label:"Description",required:!0,helper:"Provide a detailed description",maxLength:200,currentLength:125,showCount:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    `})};var u,i,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    helper: 'We will never share your email with anyone else.'
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    \`
  })
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'Username is already taken',
    showValidationIcon: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    \`
  })
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    required: true,
    helper: 'Please enter your legal name'
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    \`
  })
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,L;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    helper: 'Tell us about yourself',
    maxLength: 150,
    currentLength: 45,
    showCount: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    \`
  })
}`,...(L=(f=a.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var w,D,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Email Verification',
    success: 'Email verified successfully!',
    showValidationIcon: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    \`
  })
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var y,X,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    required: true,
    helper: 'Provide a detailed description',
    maxLength: 200,
    currentLength: 125,
    showCount: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    \`
  })
}`,...(v=(X=l.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};const I=["Default","WithError","Required","WithCharacterCount","WithSuccess","Complete"];export{l as Complete,t as Default,o as Required,a as WithCharacterCount,n as WithError,s as WithSuccess,I as __namedExportsOrder,k as default};
