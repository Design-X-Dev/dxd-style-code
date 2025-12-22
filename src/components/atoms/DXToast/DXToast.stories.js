import DXToast from "./DXToast.vue";

export default {
  title: "Atoms/DXToast",
  component: DXToast,
  tags: ["autodocs"],
};

export const Success = {
  args: { variant: "success", message: "Operation completed successfully!" },
};

export const Error = {
  args: {
    variant: "error",
    message: "Something went wrong. Please try again.",
  },
};

export const Warning = {
  args: { variant: "warning", message: "Please review before continuing." },
};

export const Info = {
  args: { variant: "info", message: "New features are available." },
};

export const AllVariants = {
  render: () => ({
    components: { DXToast },
    template: `
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    `,
  }),
};
