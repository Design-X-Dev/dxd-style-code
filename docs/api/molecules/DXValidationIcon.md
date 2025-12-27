# DXValidationIcon

Иконка состояния валидации (успех, ошибка, предупреждение, информация).

## Import

```javascript
import { DXValidationIcon } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | `String` | `required` | Состояние: `'success'`, `'error'`, `'warning'`, `'info'` |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |

## Usage

### Basic

```vue
<DXValidationIcon state="success" />
<DXValidationIcon state="error" />
<DXValidationIcon state="warning" />
<DXValidationIcon state="info" />
```

### Sizes

```vue
<DXValidationIcon state="success" size="xs" />
<DXValidationIcon state="success" size="sm" />
<DXValidationIcon state="success" size="md" />
<DXValidationIcon state="success" size="lg" />
<DXValidationIcon state="success" size="xl" />
```

### In Input Field

```vue
<DXInput v-model="email" :error="emailError">
  <template #suffix>
    <DXValidationIcon 
      v-if="validationState"
      :state="validationState"
      size="sm"
    />
  </template>
</DXInput>

<script setup>
const validationState = computed(() => {
  if (!email.value) return null;
  if (emailError.value) return 'error';
  if (isValidEmail(email.value)) return 'success';
  return null;
});
</script>
```

### Form Field Status

```vue
<div class="flex items-center gap-2">
  <DXInput v-model="username" />
  <DXValidationIcon 
    v-if="usernameStatus"
    :state="usernameStatus"
  />
</div>
```

### In List

```vue
<ul class="space-y-2">
  <li v-for="rule in passwordRules" :key="rule.id" class="flex items-center gap-2">
    <DXValidationIcon 
      :state="rule.valid ? 'success' : 'error'"
      size="sm"
    />
    <span :class="rule.valid ? 'text-green-600' : 'text-slate-500'">
      {{ rule.text }}
    </span>
  </li>
</ul>
```

### Status Indicator

```vue
<div class="flex items-center gap-2">
  <DXValidationIcon :state="connectionStatus" size="sm" />
  <span>{{ connectionLabel }}</span>
</div>

<script setup>
const connectionStatus = computed(() => {
  switch (connection.value) {
    case 'connected': return 'success';
    case 'connecting': return 'warning';
    case 'error': return 'error';
    default: return 'info';
  }
});
</script>
```

### In Table Cell

```vue
<DXTable :data="tasks" :columns="columns">
  <template #cell-status="{ value }">
    <div class="flex items-center gap-2">
      <DXValidationIcon :state="getStatusState(value)" size="sm" />
      <span>{{ value }}</span>
    </div>
  </template>
</DXTable>
```

## State Configuration

| State | Icon | Color |
|-------|------|-------|
| `success` | CheckCircleIcon | text-emerald-500 |
| `error` | ExclamationCircleIcon | text-rose-500 |
| `warning` | ExclamationTriangleIcon | text-amber-500 |
| `info` | InformationCircleIcon | text-blue-500 |

## Animation

Иконка использует анимацию `scale` при появлении для привлечения внимания.

## See Also

- [DXAlert](./DXAlert.md)
- [DXInput](./DXInput.md)
- [DXIcon](../atoms/DXIcon.md)

