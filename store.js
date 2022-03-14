import create from 'zustand';

const useStore = create((set) => ({

containerWidth: '100%',
height: 0,
setWidth: width => set({containerWidth: width})


}));

export default useStore