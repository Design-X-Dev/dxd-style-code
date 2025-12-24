import '../src/styles/index.css';

/**
 * Storybook Preview Configuration
 * 
 * Component Categories (tags):
 * - category:layout - Layout components (Box, Container, Flex, Grid, Stack, Spacer)
 * - category:typography - Typography components (Heading, Text, Label, Code, Blockquote, List)
 * - category:form - Form components (Input, Select, Button, Checkbox, Radio, Toggle, etc.)
 * - category:navigation - Navigation components (Link, Menu, Sidebar, HeaderBar, Tabs, Dropdown)
 * - category:data-display - Data display components (Table, Card, Badge, Avatar, StatCard, etc.)
 * - category:feedback - Feedback components (Toast, Alert, Tooltip, Loader, Progress, Skeleton)
 * - category:overlay - Overlay components (Modal, Dropdown, Backdrop, Portal)
 * - category:provider - Provider components (BreakpointProvider, ThemeProvider)
 * - category:animation - Animation components (AnimatePresence, StaggeredAnimation, TransitionGroup)
 * - category:utility - Utility components (Observer)
 */

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f8fafc' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
  },
};

export default preview;

