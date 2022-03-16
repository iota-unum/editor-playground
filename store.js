import create from 'zustand';

const useStore = create((set) => ({

containerWidth: '100%',
height: 0,
preview: false,
commandState: {bold: false, italic: false, formatBlock: false},
setWidth: width => set({containerWidth: width}),
setPreview:()=> set(state => ({preview: !state.preview})),
setCommandState: (commandState) => set(state => ({...state, commandState}))


}));

export default useStore