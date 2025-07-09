export const trimValueForm = (form) => {
  const allInputs = form.querySelectorAll('input');
  allInputs.forEach((input) => {
    const valueTrim = input.value.trim();
    input.value = valueTrim;
  });
};
