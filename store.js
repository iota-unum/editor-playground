import create from 'zustand';

const useStore = create((set) => ({

containerWidth: '100%',
height: 0,
preview: false,
setWidth: width => set({containerWidth: width}),
setPreview:()=> set(state => ({preview: !state.preview})),


}));

export default useStore