//Text rotate animation
export const animate_text = () =>{
    let i=0;

    const animate = ()=>{
        let idList = ['dev','pc','dgn','fl'];

        if (i === idList.length) {
            i=0
        }
        let animation_out = idList[i];
        let animation_in = i === (idList.length - 1) ? idList[0] : idList[i+1];
    
        document.getElementById(`${animation_out}`).className = '';
        document.getElementById(`${animation_in}`).className = '';
        document.getElementById(`${animation_out}`).classList.add('text_animate-out');
        document.getElementById(`${animation_in}`).classList.add('text_animate-in');
    
        i++
    }
    setInterval(animate,3000);
}

