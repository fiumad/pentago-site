<script>
import RotateButton from './rotatebutton.svelte';
</script>

<style>
.RotateGrid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,1fr);
    margin: 0 auto;
    margin-top: 20px;
    max-width: 8%;
    gap: 5px;
}
</style>

<div class="RotateGrid">
    <RotateButton quad={0}/>
    <RotateButton quad={1}/>
    <RotateButton quad={2}/>
    <RotateButton quad={3}/>
</div>
