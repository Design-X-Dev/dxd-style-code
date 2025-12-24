import{_ as n}from"./DXTextarea-BWvf_8d7.js";import{r as e}from"./vue.esm-bundler-CzLKT_w4.js";import{r as v}from"./ChatBubbleLeftIcon-CBct2YZI.js";import{r as h}from"./StarIcon-Bb7sZlAl.js";import{r as re}from"./PencilIcon-CpxY3S_F.js";import{r as Z}from"./DocumentTextIcon-CeukRkb2.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";const De={title:"Molecules/DXTextarea",component:n,tags:["autodocs","category:form"]},t={render:()=>({components:{DXTextarea:n},setup(){return{value:e("")}},template:'<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />'})},a={render:()=>({components:{DXTextarea:n},setup(){return{value:e("This is some sample text in the textarea.")}},template:'<DXTextarea v-model="value" label="Notes" />'})},o={render:()=>({components:{DXTextarea:n},setup(){return{value:e("")}},template:'<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />'})},s={render:()=>({components:{DXTextarea:n},setup(){return{value:e("Disabled content")}},template:'<DXTextarea v-model="value" label="Disabled" disabled />'})},c={render:()=>({components:{DXTextarea:n},setup(){return{value:e("Invalid content")}},template:'<DXTextarea v-model="value" label="Description" error="This field is required" />'})},l={render:()=>({components:{DXTextarea:n},setup(){return{message:e(""),ChatBubbleLeftIcon:v}},template:`
      <DXTextarea
        v-model="message"
        label="Message"
        placeholder="Write your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :rows="4"
      />
    `})},i={render:()=>({components:{DXTextarea:n},setup(){return{note:e(""),StarIcon:h}},template:`
      <DXTextarea
        v-model="note"
        label="Note"
        placeholder="Add a note..."
        :suffix-icon="StarIcon"
        :rows="3"
      />
    `})},p={render:()=>({components:{DXTextarea:n},setup(){return{text:e(""),ChatBubbleLeftIcon:v,StarIcon:h}},template:`
      <DXTextarea
        v-model="text"
        label="Message with Icons"
        placeholder="Type your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :suffix-icon="StarIcon"
        :rows="4"
      />
    `})},u={render:()=>({components:{DXTextarea:n},setup(){return{description:e(""),PencilIcon:re}},template:`
      <DXTextarea
        v-model="description"
        label="Description"
        placeholder="Describe your product..."
        :prefix-icon="PencilIcon"
        :max-length="500"
        :show-count="true"
        :rows="6"
      />
    `})},m={render:()=>({components:{DXTextarea:n},setup(){return{review:e(""),StarIcon:h}},template:`
      <DXTextarea
        v-model="review"
        label="Your Review"
        placeholder="Share your experience..."
        :prefix-icon="StarIcon"
        :max-length="1000"
        :show-count="true"
        :rows="5"
        helper="Write a detailed review to help others"
      />
    `})},d={render:()=>({components:{DXTextarea:n},setup(){return{text:e(""),DocumentTextIcon:Z}},template:`
      <DXTextarea
        v-model="text"
        label="Auto-resize Textarea"
        placeholder="Start typing and watch it grow..."
        :prefix-icon="DocumentTextIcon"
        :auto-resize="true"
        :rows="3"
        helper="This textarea will automatically expand as you type"
      />
    `})},x={render:()=>({components:{DXTextarea:n},setup(){const r=e(""),ee=e(""),ne=e("");return{message:r,description:ee,review:ne,ChatBubbleLeftIcon:v,DocumentTextIcon:Z,StarIcon:h}},template:`
      <div class="space-y-6 max-w-2xl">
        <DXTextarea
          v-model="message"
          label="Message"
          placeholder="Write your message..."
          :prefix-icon="ChatBubbleLeftIcon"
          :rows="3"
        />
        
        <DXTextarea
          v-model="description"
          label="Description"
          placeholder="Describe it..."
          :prefix-icon="DocumentTextIcon"
          :max-length="300"
          :show-count="true"
          :rows="4"
        />
        
        <DXTextarea
          v-model="review"
          label="Review"
          placeholder="Your feedback..."
          :prefix-icon="StarIcon"
          :max-length="500"
          :show-count="true"
          :rows="5"
        />
      </div>
    `})};var D,T,f;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />'
  })
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,w,X;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('This is some sample text in the textarea.');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Notes" />'
  })
}`,...(X=(w=a.parameters)==null?void 0:w.docs)==null?void 0:X.source}}};var I,g,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />'
  })
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,W,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('Disabled content');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Disabled" disabled />'
  })
}`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var C,L,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('Invalid content');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Description" error="This field is required" />'
  })
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,R,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const message = ref('');
      return {
        message,
        ChatBubbleLeftIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="message"
        label="Message"
        placeholder="Write your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :rows="4"
      />
    \`
  })
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var P,_,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const note = ref('');
      return {
        note,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="note"
        label="Note"
        placeholder="Add a note..."
        :suffix-icon="StarIcon"
        :rows="3"
      />
    \`
  })
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,Y,$;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const text = ref('');
      return {
        text,
        ChatBubbleLeftIcon,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="text"
        label="Message with Icons"
        placeholder="Type your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :suffix-icon="StarIcon"
        :rows="4"
      />
    \`
  })
}`,...($=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var k,q,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const description = ref('');
      return {
        description,
        PencilIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="description"
        label="Description"
        placeholder="Describe your product..."
        :prefix-icon="PencilIcon"
        :max-length="500"
        :show-count="true"
        :rows="6"
      />
    \`
  })
}`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var V,O,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const review = ref('');
      return {
        review,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="review"
        label="Your Review"
        placeholder="Share your experience..."
        :prefix-icon="StarIcon"
        :max-length="1000"
        :show-count="true"
        :rows="5"
        helper="Write a detailed review to help others"
      />
    \`
  })
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var F,G,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const text = ref('');
      return {
        text,
        DocumentTextIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="text"
        label="Auto-resize Textarea"
        placeholder="Start typing and watch it grow..."
        :prefix-icon="DocumentTextIcon"
        :auto-resize="true"
        :rows="3"
        helper="This textarea will automatically expand as you type"
      />
    \`
  })
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const message = ref('');
      const description = ref('');
      const review = ref('');
      return {
        message,
        description,
        review,
        ChatBubbleLeftIcon,
        DocumentTextIcon,
        StarIcon
      };
    },
    template: \`
      <div class="space-y-6 max-w-2xl">
        <DXTextarea
          v-model="message"
          label="Message"
          placeholder="Write your message..."
          :prefix-icon="ChatBubbleLeftIcon"
          :rows="3"
        />
        
        <DXTextarea
          v-model="description"
          label="Description"
          placeholder="Describe it..."
          :prefix-icon="DocumentTextIcon"
          :max-length="300"
          :show-count="true"
          :rows="4"
        />
        
        <DXTextarea
          v-model="review"
          label="Review"
          placeholder="Your feedback..."
          :prefix-icon="StarIcon"
          :max-length="500"
          :show-count="true"
          :rows="5"
        />
      </div>
    \`
  })
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Te=["Default","WithValue","WithHelper","Disabled","WithError","WithPrefixIcon","WithSuffixIcon","WithBothIcons","WithCharacterCount","Review","WithAutoResize","AllIconTypes"];export{x as AllIconTypes,t as Default,s as Disabled,m as Review,d as WithAutoResize,p as WithBothIcons,u as WithCharacterCount,c as WithError,o as WithHelper,l as WithPrefixIcon,i as WithSuffixIcon,a as WithValue,Te as __namedExportsOrder,De as default};
