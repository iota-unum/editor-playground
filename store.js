import create from 'zustand';

const useStore = create((set) => ({

containerWidth: '100%',
height: 0,
preview: false,
overflow: false,
fontSize: 1,
selectedColor:  'rgb(255, 122, 0)',

commandState: {bold: false, italic: false, heading: false, text: true, left: true, center: false},
setWidth: width => set({containerWidth: width}),
setPreview:()=> set(state => ({preview: !state.preview})),
setCommandState: (commandState) => set(state => ({...state.commandState, commandState})),
setOverflow: (overflow)=>set({overflow}),
setFontSize: (fontSize) => set(fontSize),
setSelectedColor: color => set({selectedColor: color})

}));

export default useStore