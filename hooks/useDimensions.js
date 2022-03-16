import {useState, useEffect} from 'react'

export default function useDimensions(content) {

    const [overflow, setOverflow] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [progress, setProgress] = useState(0);


useEffect(() => {
    const editor = document.querySelector('.editor-area');
    const lastChild = editor.lastChild
    const editorWidth = editor.offsetWidth;
    const editorHeight = editor.offsetHeight;
    const editorTop = editor.offsetTop
    const lastChildTop = lastChild && lastChild.offsetTop + lastChild.offsetHeight
    const contentHeight = ( lastChildTop - editorTop) || 0
    const maxHeight = editorWidth * 1.333333;
    const scrollHeight = editor.scrollHeight;
    // console.log('contentHEIGHT', content);
    setOverflow(scrollHeight > maxHeight);
    setProgress(contentHeight / maxHeight);
    setScrollHeight(scrollHeight)
  }, [ content, progress, overflow, scrollHeight]);










    return {
        overflow, progress,

    }
}