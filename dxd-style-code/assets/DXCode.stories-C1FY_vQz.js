import{c as b,e as C,g as D,l as k,p as X,o as r,a as x,m as d}from"./vue.esm-bundler-Nfu98kES.js";const y={key:0},t={__name:"DXCode",props:{block:{type:Boolean,default:!1},size:{type:String,default:"sm"},lineNumbers:{type:Boolean,default:!1}},setup(e){const a=e,o={xs:"text-xs",sm:"text-sm",md:"text-base"},g=b(()=>a.block?["block w-full overflow-x-auto rounded-xl bg-slate-900 text-slate-100 p-4",o[a.size]||o.sm,"font-mono leading-relaxed"]:["inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-800",o[a.size]||o.sm,"font-mono"]);return(l,_)=>(r(),C(X(e.block?"pre":"code"),{class:k(g.value),"data-component":"DXCode","data-block":e.block},{default:D(()=>[e.block?(r(),x("code",y,[d(l.$slots,"default")])):d(l.$slots,"default",{key:1})]),_:3},8,["class","data-block"]))}};t.__docgenInfo={exportName:"default",displayName:"DXCode",description:"",tags:{},props:[{name:"block",description:"Блочный код (pre) или inline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер: xs | sm | md",type:{name:"string"},defaultValue:{func:!1,value:'"sm"'}},{name:"lineNumbers",description:"Показывать номера строк (только для block)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/typography/DXCode/DXCode.vue"]};const B={title:"Typography/DXCode",component:t,tags:["autodocs"]},n={render:()=>({components:{DXCode:t},template:"<p>Используйте <DXCode>npm install</DXCode> для установки.</p>"})},s={args:{block:!0},render:e=>({components:{DXCode:t},setup(){return{args:e}},template:`<DXCode v-bind="args">const greeting = "Hello World";
console.log(greeting);

function add(a, b) {
  return a + b;
}</DXCode>`})};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCode
    },
    template: '<p>Используйте <DXCode>npm install</DXCode> для установки.</p>'
  })
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,i,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: args => ({
    components: {
      DXCode
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXCode v-bind="args">const greeting = "Hello World";
console.log(greeting);

function add(a, b) {
  return a + b;
}</DXCode>\`
  })
}`,...(f=(i=s.parameters)==null?void 0:i.docs)==null?void 0:f.source}}};const E=["Inline","Block"];export{s as Block,n as Inline,E as __namedExportsOrder,B as default};
