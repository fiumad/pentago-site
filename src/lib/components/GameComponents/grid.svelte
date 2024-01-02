<script>
import Piece from './piece.svelte';
import RotateButton from './rotatebutton.svelte';
export let quad = 0;
let xspot = [0,0,0];
let yspot = [0,0,0];
if (quad == 0){
   xspot = [0,1,2];
   yspot = [0,1,2];1
}
else if (quad == 1){
    xspot = [3,4,5];
    yspot = [0,1,2];
}
else if (quad == 2){
    xspot = [0,1,2];
    yspot = [3,4,5];
}
else {
    xspot = [3,4,5];
    yspot = [3,4,5];
}
</script>

<style>
.Pentago-Grid {
    display: grid;
    margin: 0 auto;
    display: grid;
    border-radius: 10%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    background-color: rgba(178, 34, 34, .5);
    padding: 50px;
}
</style>
<div class="Pentago-Grid">
    <Piece x={xspot[0]} y={yspot[0]}/>
    <Piece x={xspot[1]} y={yspot[0]}/>
    <Piece x={xspot[2]} y={yspot[0]}/>
    <Piece x={xspot[0]} y={yspot[1]}/>
    <Piece x={xspot[1]} y={yspot[1]}/>
    <Piece x={xspot[2]} y={yspot[1]}/>
    <Piece x={xspot[0]} y={yspot[2]}/>
    <Piece x={xspot[1]} y={yspot[2]}/>
    <Piece x={xspot[2]} y={yspot[2]}/>
</div>
