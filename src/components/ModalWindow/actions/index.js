export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (modalData) => ({type:SHOW_MODAL, payload: modalData});
export const hideModal = () => ({type:HIDE_MODAL});
