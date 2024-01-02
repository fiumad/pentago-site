<script>
import { GameState } from '$lib/stores/GameState.js';
export let x = 0;
export let y = 0;
$: current_state = $GameState.state[y][x];
$: style = current_state == 0 ? "Piece" : current_state == 1 ? "White-Piece" : "Black-Piece";

function pick(x, y){
    if ($GameState.state[y][x] == 0){
        $GameState.state[y][x] = $GameState.current_player=="White" ? 1 : 2;
        $GameState.turn ++;
        if ($GameState.current_player == "White"){
            $GameState.current_player = "Black";
        }
        else {
            $GameState.current_player = "White";
        }
    }
}
</script>
<style>
    .Piece{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        background-color: rgba(255,255,255,.2);
        color: orange;
        border: none;
    }
    .White-Piece {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer; 
        background-color: rgb(255,255,255);
        color: orange;
        border: none;
    }
    .Black-Piece { 
        height: 40px;
        width: 40px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        background-color: rgb(0,0,0);
        border: none;
        color: orange;
  }
    
</style>

<button class={style} on:click={pick(x,y)}></button>

