let grid = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
piazzaMine();

function piazzaMine(){
    for (let i=0; i<2; i++) {
    let randomMina = Math.floor((Math.random() * 15));
    grid[randomMina]= "Boom";
    }
}

export {grid}; 