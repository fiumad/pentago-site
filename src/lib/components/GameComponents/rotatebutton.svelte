<script>
import {GameState} from '$lib/stores/GameState.js';
export let quad;
$: arrow = $GameState.direction == 0 ? "Arrow" : "CArrow";
function coor_to_grid(){
    let temp = [];
    for (let i = 0; i < $GameState.state.length; i++){
        for (let j = 0; j < $GameState.state[i].length; j++){
            temp.push($GameState.state[i][j]);
        }
    }
    
    let grid_temp = [[],[],[],[]];
    let order = [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,2,2,2,3,3,3,2,2,2,3,3,3,2,2,2,3,3,3]
    let i = 0;
    while (i < temp.length) {
        for (let j = 0; j < 3; j++){
            grid_temp[order[i]].push(temp[i]) 
            i++;
        } 
    }
    return grid_temp;
}

function grid_to_coor(grid){
    let order = [0,0,0,1,1,1,2,2,2,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,3,3,3,4,4,4,5,5,5]
    let temp = [];

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 9; j++){
            temp.push(grid[i][j]); 
        }
    }
    
    let coor_temp = [[],[],[],[],[],[]]

    for (let i = 0; i < temp.length; i++){
        coor_temp[order[i]].push(temp[i]);
    }
    return coor_temp;
}

function rotate(quad, dir){
    let grid = coor_to_grid();
    let temp = []
    //dir = 0 -> clockwise
    //dir = 1 -> counter clockwise
    if (dir == "0"){
         temp.push(grid[quad][6]);
         temp.push(grid[quad][3]);
         temp.push(grid[quad][0]);
         temp.push(grid[quad][7]);
         temp.push(grid[quad][4]);
         temp.push(grid[quad][1]);
         temp.push(grid[quad][8]);
         temp.push(grid[quad][5]);
         temp.push(grid[quad][2]);
    }
    else {
         temp.push(grid[quad][2]);
         temp.push(grid[quad][5]);
         temp.push(grid[quad][8]);
         temp.push(grid[quad][1]);
         temp.push(grid[quad][4]);
         temp.push(grid[quad][7]);
         temp.push(grid[quad][0]);
         temp.push(grid[quad][3]);
         temp.push(grid[quad][6]);
    }
    grid[quad] = temp;
    let coor = grid_to_coor(grid);
    $GameState.state = coor;
    $GameState.turn ++;
    $GameState.current_player = $GameState.current_player == "White" ? "Black" : "White";
}

</script>

<style>
.RotateButton{
    background-color: #c14e4e;
    border-radius: 10px;
    margin: 0 auto; 
    width: 70px;
    height: 70px;
    border: none;
    display: flex;
} 
.Arrow{
    width: 50px;
    margin: 0 auto;
}
.CArrow{
    width: 50px;
    color: #c14e4e;
    margin: 0 auto;
    transform: scaleX(-1);
}
</style>

<button on:click={rotate(quad, $GameState.direction)} class="RotateButton">
    <img class={arrow} alt={$GameState.direction==0?"Clockwise Rotation":"Counter-Clockwise Rotation"} src="/arrow_red.svg"/>
</button> 