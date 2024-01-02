<script>
    import {Grid, ResetButton, GridWrapper, RotateButton, SwitchButton, Piece, } from '$lib/index.js'
	import Resetbutton from '../lib/components/GameComponents/resetbutton.svelte';
	import Switchbutton from '../lib/components/GameComponents/switchbutton.svelte';
</script>

<style>
    .quarter-wrapper{
        width: 280px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .button-panel {
        display: flex;
        width: 33%;
        margin: 0 auto;
        gap: 20px;
        margin-bottom: 30px;
    }
    .button {
        background-color: #c14e4e;
        color: rgb(57, 0, 0);
        border-radius: 10px;
        margin: 0 auto; 
        border: none;
        display: flex;
    }
</style>

<h1>Welcome to Pentago.xyz!</h1>
<h3>Learn the Rules!</h3>
<ol>
    <li>Four Tic-Tac-Toe boards are placed in a 2x2 grid.</li>   
    <li>Try to get five pieces in a row. Diagonals count too!</li>   
    <li>On each turn, you may choose to place a piece, or rotate any quadrant by 90°</li>   
</ol>

<h2>Try out the controls!</h2>
<div class="quarter-wrapper">   
    <Grid quad={0}/>
</div>
<div class="button-panel">
    <RotateButton quad={0}/>
    <Switchbutton/>
    <Resetbutton/>
</div>

<h2>Create a game when you're ready!</h2>

<div class="button-panel" style="width: 10%;">
    <a class="button" href="localgame">Local Game</a>
    <a class="button" href="test">Online Game</a>
</div>