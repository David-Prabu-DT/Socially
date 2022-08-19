export const logIn = (formData: any) => async (dispatch: any) => {
  const { data } = await AuthApi.logIn(formData);
};
