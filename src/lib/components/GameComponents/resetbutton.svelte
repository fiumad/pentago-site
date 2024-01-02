<script>
    import { GameState } from '$lib/stores/GameState.js';
    
    function reset(){
        $GameState.state = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
    }
    
    </script>
    
    <style>
    .SwitchButton{
        background-color: #c14e4e;
        color: rgb(57,0,0);
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-size: 36px;
        margin: 0 auto;
    }
    </style>
    <button class="SwitchButton" on:click={reset}>Reset</button>