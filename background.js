function backgroundDraw(srcBottom, srcTop) {
    let height = window.innerHeight - window.innerHeight 
    let widthCheck = 0 
    for(let x = 0; x < 12; x++) {
        if (x < 7) {
        for(let i = 0; i  <= window.innerWidth; i += 100) {
            let ground = newImage(srcBottom)
            move(ground).to(i, height)
            ground.style.zIndex = -1
            widthCheck += 100
        }
        if (widthCheck >= window.innerWidth) {
        widthCheck = 0
        height += 100
        }
         } else if (x > 5) {
            for(let i = 0; i  <= window.innerWidth; i += 100) {
                let sky = newImage(srcTop)
                move(sky).to(i, height)
                sky.style.zIndex = -1
                widthCheck += 100
            }
            if (widthCheck >= window.innerWidth) {
            widthCheck = 0
            height += 100
            }
     }
    }
}