import DXFormError from './DXFormError.vue';

export default {
  title: 'Atoms/DXFormError',
  component: DXFormError,
  tags: ['autodocs'],
};

export const Default = {
  args: { message: 'Пожалуйста, заполните это поле' },
};

export const LongMessage = {
  args: { message: 'Произошла ошибка при отправке формы. Пожалуйста, проверьте все поля и попробуйте снова.' },
};

