<script>
import { GameState } from '$lib/stores/GameState.js';

function changeDirection(){
    $GameState.direction = $GameState.direction == 0 ? 1 : 0;
}

</script>

<style>
.SwitchButton{
    background-color: #c14e4e;
    color: rgb(57, 0, 0);
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 36px;
    margin: 0 auto;
}
</style>
<button class="SwitchButton" on:click={changeDirection}>Switch</button>
