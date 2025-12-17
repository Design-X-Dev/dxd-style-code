import DXCopyField from './DXCopyField.vue';
import {
  ClipboardDocumentIcon,
  KeyIcon,
  LinkIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXCopyField',
  component: DXCopyField,
  tags: ['autodocs'],
  argTypes: {
    copyIconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
    copiedIconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

export const Default = {
  args: { 
    value: 'https://example.com/share/abc123', 
    label: 'Share Link' 
  },
};

export const Code = {
  args: { 
    value: 'npm install dx-components', 
    label: 'Installation' 
  },
};

export const ApiKey = {
  args: { 
    value: 'sk_live_abc123xyz789', 
    label: 'API Key' 
  },
};

// С анимацией wiggle
export const WiggleAnimation = {
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'wiggle',
  },
};

// С анимацией scale (по умолчанию)
export const ScaleAnimation = {
  args: {
    value: 'npm install dx-components',
    label: 'Installation',
    copyIconAnimation: 'scale',
    copiedIconAnimation: 'scale',
  },
};

// С анимацией rotate
export const RotateAnimation = {
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key',
    copyIconAnimation: 'rotate',
    copiedIconAnimation: 'rotate',
  },
};

// Без анимации
export const NoAnimation = {
  args: {
    value: 'https://example.com/share',
    label: 'Link',
    copyIconAnimation: 'none',
    copiedIconAnimation: 'none',
  },
};

// Кастомные иконки
export const CustomIcons = {
  render: () => ({
    components: { DXCopyField },
    setup() {
      return { 
        KeyIcon,
        LinkIcon,
        CodeBracketIcon,
      };
    },
    template: `
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dx-components'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    `,
  }),
};

// Разные анимации для состояний
export const MixedAnimations = {
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'scale',
  },
};

// Все варианты
export const AllVariants = {
  render: () => ({
    components: { DXCopyField },
    setup() {
      return {
        ClipboardDocumentIcon,
        KeyIcon,
        LinkIcon,
        DocumentDuplicateIcon,
      };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dx-components"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    `,
  }),
};

// Interactive Example
export const Interactive = {
  render: () => ({
    components: { DXCopyField },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dx-components"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    `,
  }),
};

